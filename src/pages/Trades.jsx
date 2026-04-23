import React, { useEffect } from 'react';

function Trades() {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-up">
              <div>
                  <h2 className="text-3xl font-bold mb-2">Execution Journal</h2>
                  <p className="text-slate-400">All my trades. Real logic. No cherry-picking.</p>
              </div>
              <div className="glass px-6 py-3 rounded-xl flex gap-8">
                  <div className="text-center">
                      <p className="text-[10px] uppercase opacity-50 mb-1">Last 30 Days</p>
                      <p className="mono text-[#64FFDA] font-bold">-</p>
                  </div>
                  <div className="text-center">
                      <p className="text-[10px] uppercase opacity-50 mb-1">Win Rate</p>
                      <p className="mono text-[#64FFDA] font-bold">-</p>
                  </div>
              </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
              {/* Trade 1 */}
              <div className="group reveal-left">
                  <div className="glass rounded-3xl overflow-hidden relative border border-white/5 group-hover:border-[#64FFDA]/30 transition-all">
                      <div className="relative">
                          <img src="/smt_divergence.png" alt="SMT Divergence Chart" className="w-full h-64 object-cover opacity-60 group-hover:opacity-90 transition-opacity" />
                          <div className="absolute top-4 left-4 flex gap-2">
                              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded border border-emerald-500/30">KEY DIVERGENCE</span>
                              <span className="bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10">NQ / ES</span>
                          </div>
                          <div className="absolute bottom-4 right-4 max-w-[200px] glass p-3 rounded-xl border-[#64FFDA]/40 border transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                              <p className="text-[11px] leading-tight font-medium italic text-[#64FFDA]" style={{ margin: 0 }}>
                                  "One asset takes out liquidity, the other does not. Correlated pair manipulation."
                              </p>
                          </div>
                      </div>
                      <div className="p-6">
                          <h4 className="font-bold text-lg mb-2">SMT Divergence (London vs NY)</h4>
                          <p className="text-sm text-slate-400 mb-4">There was a KEY divergence between the London and New York sessions. One asset takes out the liquidity but the other NOT. This is called SMT divergence, which often occurs between correlated pairs.</p>
                          <div className="flex justify-between items-center text-xs mono">
                              <span className="opacity-50">Date: Feb 2 2026</span>
                              <span className="text-[#64FFDA]">View Breakdown →</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Trade 2 */}
              <div className="group reveal-right">
                  <div className="glass rounded-3xl overflow-hidden relative border border-white/5 group-hover:border-[#64FFDA]/30 transition-all">
                      <div className="relative">
                          <img src="/cpi_volatility.png" alt="Trade Chart" className="w-full h-64 object-cover opacity-60 group-hover:opacity-90 transition-opacity" />
                          <div className="absolute top-4 left-4 flex gap-2">
                              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded border border-emerald-500/30">PROFIT: 1:2.5 RR</span>
                              <span className="bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10">EUR/USD</span>
                          </div>
                          <div className="absolute bottom-4 right-4 max-w-[200px] glass p-3 rounded-xl border-[#64FFDA]/40 border transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                              <p className="text-[11px] leading-tight font-medium italic text-[#64FFDA]" style={{ margin: 0 }}>
                                  "CPI Volatility play. Waited for the 5m displacement."
                              </p>
                          </div>
                      </div>
                      <div className="p-6">
                          <h4 className="font-bold text-lg mb-2">CPI News Displacement</h4>
                          <p className="text-sm text-slate-400 mb-4">Focus: How to stay calm during high-impact news using HTF levels.</p>
                          <div className="flex justify-between items-center text-xs mono">
                              <span className="opacity-50">Date: Oct 22, 2026</span>
                              <span className="text-[#64FFDA]">View Breakdown →</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Trades;
