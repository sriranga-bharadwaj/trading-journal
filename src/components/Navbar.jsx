import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-2xl px-8 py-3 reveal-up reveal-visible">
        <Link to="/" className="flex items-center gap-2 decoration-transparent">
          <TrendingUp className="text-[#64FFDA] w-8 h-8" />
          <span className="text-xl font-bold tracking-tighter uppercase italic text-white">Learning With RANGA</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium opacity-80">
          <a href="/basics.html" className="hover:text-teal transition-colors text-white">Curriculum</a>
          <a href="/psychology.html" className="hover:text-[#64FFDA] transition-colors font-bold text-[#64FFDA]">Psychology</a>
          <Link to="/trades" className="hover:text-[#64FFDA] transition-colors text-white">Trade Journal</Link>
        </div>
        <button className="bg-[#64FFDA] text-slate-900 px-5 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">
          Join Inner Circle
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
