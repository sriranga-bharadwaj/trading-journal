import React, { useState } from 'react';
import { Loader } from 'lucide-react';

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    try {
        const response = await fetch('http://localhost:3000/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await response.json();

        if (response.ok) {
            setStatus('success');
            setMessage(data.message);
            setEmail('');
        } else {
            setStatus('error');
            setMessage(data.error || 'Something went wrong.');
        }
    } catch (err) {
        setStatus('error');
        setMessage('Server error. Make sure the Node.js backend is running!');
    }
  };

  return (
    <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center glass p-12 rounded-[40px] border-[#64FFDA]/20 relative overflow-hidden reveal-up">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#64FFDA]/10 blur-[80px] rounded-full"></div>
            <h2 className="text-4xl font-bold mb-6 italic tracking-tight">Ready to Master the Charts?</h2>
            <p className="text-slate-400 mb-10">Get my weekly trade breakdowns and educational PDFs delivered to your inbox.</p>

            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    placeholder="Your best email address"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#64FFDA]/50 transition-all text-white" 
                />
                <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="bg-[#64FFDA] text-slate-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {status === 'loading' ? (
                        <><Loader className="w-5 h-5 animate-spin" /> Saving...</>
                    ) : (
                        'Claim Free Guide'
                    )}
                </button>
            </form>
            {message && (
                <div className={`mt-4 text-sm font-bold ${status === 'success' ? 'text-[#64FFDA]' : 'text-red-400'}`}>
                    {message}
                </div>
            )}

            <p className="mt-6 text-[10px] opacity-40 uppercase tracking-widest text-[#f8fafc]">Join 4,500+ traders globally</p>
        </div>
        <div className="text-center mt-20 opacity-30 text-xs uppercase tracking-[0.2em] reveal-up">
            &copy; 2026 Bharadwaj Learning Lab. All trading involves risk.
        </div>
    </footer>
  );
}

export default Footer;
