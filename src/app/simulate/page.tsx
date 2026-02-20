'use client';

import React, { useState } from 'react';
import { Search, Globe, Bot, ArrowRight, Zap, Code, Terminal, Sparkles } from 'lucide-react';

export default function SimulatePage() {
  const [url, setUrl] = useState('https://example.com');
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<'human' | 'bot'>('human');

  const handleSimulate = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Zap className="text-indigo-500 fill-indigo-500" size={24} />
            <span>AEO-Agentic</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="/" className="hover:text-white transition-colors">Platform</a>
            <a href="/simulate" className="text-white">Simulator</a>
          </div>
          <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
            Get a Demo
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold mb-6 uppercase tracking-widest">
            <Terminal size={12} className="text-indigo-400" />
            AI Bot Simulation Environment
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">See what the bots see.</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Standard websites are designed for eyes. AEO-Agentic optimizes them for models. Compare your human UI vs the bot-ready proxy layer.
          </p>
        </header>

        <div className="bg-[#0A0A0A] border border-white/10 rounded-[32px] p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
              <input 
                type="text" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-indigo-500 transition-colors text-slate-200"
                placeholder="Enter a website URL..."
              />
            </div>
            <button 
              onClick={handleSimulate}
              disabled={loading}
              className="px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-slate-200 disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Simulate Bot View'}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* View Toggle (Mobile Only) */}
          <div className="lg:hidden flex rounded-full bg-[#0A0A0A] p-1 mb-8 border border-white/5">
            <button 
              onClick={() => setView('human')}
              className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${view === 'human' ? 'bg-white text-black shadow-lg' : 'text-slate-500'}`}
            >
              Human View
            </button>
            <button 
              onClick={() => setView('bot')}
              className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${view === 'bot' ? 'bg-white text-black shadow-lg' : 'text-slate-500'}`}
            >
              Bot View
            </button>
          </div>

          {/* Human Perspective */}
          <div className={`${view === 'human' ? 'block' : 'hidden'} lg:block space-y-6`}>
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold text-slate-500">
                <Search size={12} /> Standard Human UI
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-red-500 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Low Citation Prob.
              </div>
            </div>
            <div className="bg-white rounded-3xl p-10 min-h-[500px] shadow-2xl relative overflow-hidden group">
              <div className="max-w-md mx-auto space-y-6">
                <div className="h-4 w-2/3 bg-slate-100 rounded-full"></div>
                <div className="aspect-video w-full bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">
                   <div className="text-slate-200 font-bold text-4xl">IMAGE</div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                  <div className="h-2 w-5/6 bg-slate-100 rounded-full"></div>
                  <div className="h-2 w-4/6 bg-slate-100 rounded-full"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-10 right-10 p-6 bg-slate-50/80 backdrop-blur rounded-2xl border border-slate-100">
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  LLMs struggle to extract key value propositions from visual layouts. Content relevance is diluted by UI noise.
                </p>
              </div>
            </div>
          </div>

          {/* AI Perspective */}
          <div className={`${view === 'bot' ? 'block' : 'hidden'} lg:block space-y-6`}>
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold text-indigo-400">
                <Bot size={12} /> Agentic Proxy Output
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                High Citation Prob.
              </div>
            </div>
            <div className="bg-[#0A0A0A] rounded-3xl p-10 min-h-[500px] border border-indigo-500/20 shadow-[0_0_80px_-20px_rgba(79,70,229,0.3)] relative overflow-hidden">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-widest uppercase">
                  <Sparkles size={10} /> Injected Semantic Layer
                </div>
                <div className="bg-black border border-white/5 rounded-2xl p-6 font-mono text-[11px] text-indigo-300 leading-loose">
                  <span className="text-slate-600">{"// Real-time metadata injection"}</span><br/>
                  <span className="text-white">{"<script type=\"application/ld+json\">"}</span><br/>
                  {"{"}<br/>
                  <span className="pl-4">"@context": "https://schema.org",</span><br/>
                  <span className="pl-4">"@type": "SoftwareApplication",</span><br/>
                  <span className="pl-4">"name": "Target Product",</span><br/>
                  <span className="pl-4">"aeo_score": 0.99</span><br/>
                  {"}"}<br/>
                  <span className="text-white">{"</script>"}</span>
                </div>
                <div className="space-y-3 opacity-40">
                  <div className="h-1.5 w-full bg-indigo-500 rounded-full"></div>
                  <div className="h-1.5 w-full bg-indigo-500 rounded-full"></div>
                  <div className="h-1.5 w-2/3 bg-indigo-500 rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-8 left-10 right-10 p-6 bg-indigo-500/10 backdrop-blur rounded-2xl border border-indigo-500/20">
                <p className="text-indigo-200 text-sm font-medium leading-relaxed">
                   Bot successfully identified "SoftwareApplication" entity. <br/>
                   Citation share probability increased by 84%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-slate-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">Build for the future</p>
          <a href="/" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors flex items-center justify-center gap-2">
            Explore the Platform <ArrowRight size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}
