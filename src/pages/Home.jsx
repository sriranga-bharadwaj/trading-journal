import React, { useEffect } from 'react';
import { Brain, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react';

function Home() {
  useEffect(() => {
    // Scroll Magic: Intersection Observer for `.reveal-*` elements
    const observerTarget = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    observerTarget.forEach(el => observer.observe(el));

    // Dynamic Background Timing & Logic
    const dynamicBg = document.getElementById('dynamic-bg');
    if (dynamicBg) {
      setTimeout(() => {
          dynamicBg.classList.add('zen-active');
      }, 3500);
    }

    return () => observer.disconnect();
  }, []);

  // Generate random background candles
  const candles = Array.from({ length: 80 }).map((_, i) => {
    const h = Math.floor(Math.random() * 150) + 20;
    const isRed = Math.random() > 0.5;
    const topOffset = Math.floor(Math.random() * 200) - 100;
    return (
      <div 
        key={i} 
        className={`candle ${isRed ? 'red' : ''}`}
        style={{ height: `${h}px`, transform: `translateY(${topOffset}px)` }}
      />
    );
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden lg:min-h-[85vh] flex items-center">
          <div id="dynamic-bg">
              <div className="candle-bg" id="candleBg">
                {candles}
              </div>
              <div className="zen-image-wrapper"></div>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
              <div className="reveal-left">
                  <span className="inline-block px-4 py-1 rounded-full border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-bold mb-6 uppercase tracking-widest bg-[#64FFDA]/5">
                      Learn with ME
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                      Stop Guessing. <br />
                      <span className="text-[#64FFDA] italic">Read the Tape.</span>
                  </h1>
                  <p className="text-slate-400 text-lg mb-8 max-w-lg">
                      Not an expert. Just consistent learning and real trades. I don't sell "signals". Learn the basics of
                      liquidity and risk, then watch me apply them in real markets.
                  </p>
                  <div className="flex gap-4">
                      <button 
                          className="bg-[#64FFDA] text-slate-900 px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all"
                          onClick={() => window.location.href='/basics.html'}
                      >
                          Start Learning Basics
                      </button>
                      <button 
                          className="glass px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all text-white"
                          onClick={() => window.location.href='/psychology.html'}
                      >
                          Read Psychology
                      </button>
                  </div>
              </div>
              <div className="relative float reveal-right">
                  <div className="absolute -inset-4 bg-[#64FFDA]/20 blur-3xl rounded-full"></div>
                  <div className="glass p-4 rounded-3xl relative border border-white/20">
                      <img src="/intro_zen.png" alt="Trading Chart" className="rounded-2xl opacity-80 grayscale hover:grayscale-0 transition-all duration-700 w-full h-auto" />
                      <div className="absolute top-10 right-10 glass p-3 rounded-lg border-[#64FFDA]/50 border animate-pulse">
                          <p className="mono text-xs text-[#64FFDA] leading-none">ENTRY CONFIRMED</p>
                          <p className="mono text-lg font-bold">1.24503</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Teaching Basics Section */}
      <section id="basics" className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 reveal-up">
                  <h2 className="text-3xl font-bold mb-4">The Foundations</h2>
                  <p className="text-slate-400">Master these three pillars before you ever place a trade.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="glass p-8 rounded-3xl group hover:border-[#64FFDA]/50 transition-all cursor-pointer reveal-up"
                      style={{ transitionDelay: '100ms' }} onClick={() => window.location.href='/psychology.html'}>
                      <div className="w-14 h-14 bg-[#64FFDA]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Brain className="text-[#64FFDA] w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Market Psychology</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">Learn to identify where retail traders are trapped and how big money exploits human emotion.</p>
                      <a href="/psychology.html" className="text-[#64FFDA] text-xs font-bold flex items-center gap-2 uppercase tracking-tighter decoration-transparent">
                          Lesson 01: Read Now <ArrowRight className="w-4 h-4" />
                      </a>
                  </div>
                  {/* Card 2 */}
                  <div className="glass p-8 rounded-3xl group hover:border-[#64FFDA]/50 transition-all cursor-pointer reveal-up"
                      style={{ transitionDelay: '200ms' }}>
                      <div className="w-14 h-14 bg-[#64FFDA]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <ShieldCheck className="text-[#64FFDA] w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Risk Architecture</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">Trading is a game of math. We focus on R:R ratios and capital preservation above all else.</p>
                      <a href="#" className="text-[#64FFDA] text-xs font-bold flex items-center gap-2 uppercase tracking-tighter decoration-transparent">
                          Lesson 02: Position Sizing <ArrowRight className="w-4 h-4" />
                      </a>
                  </div>
                  {/* Card 3 */}
                  <div className="glass p-8 rounded-3xl group hover:border-[#64FFDA]/50 transition-all cursor-pointer reveal-up"
                      style={{ transitionDelay: '300ms' }} onClick={() => window.location.href='/orderblocks.html'}>
                      <div className="w-14 h-14 bg-[#64FFDA]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <BarChart3 className="text-[#64FFDA] w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Orderblocks & Execution</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">Forget messy indicators. We read raw candlesticks, market structure, liquidity voids, and TCP logic.</p>
                      <a href="/orderblocks.html" className="text-[#64FFDA] text-xs font-bold flex items-center gap-2 uppercase tracking-tighter decoration-transparent">
                          Lesson 03: Orderblocks <ArrowRight className="w-4 h-4" />
                      </a>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

export default Home;
