'use client';

import React, { useState } from 'react';
import { Search, Globe, Bot, ArrowRight, Zap, Code, Terminal } from 'lucide-react';

export default function SimulatePage() {
  const [url, setUrl] = useState('https://example.com');
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<'human' | 'bot'>('human');

  const handleSimulate = () => {
    setLoading(true);
    // Simulate a brief loading state for effect
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Zap className="text-indigo-500" /> AEO-Agentic Simulator
            </h1>
            <p className="text-slate-400">See exactly what LLMs see vs your customers.</p>
          </div>
          <a href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Back to Landing</a>
        </header>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Enter a website URL..."
              />
            </div>
            <button 
              onClick={handleSimulate}
              disabled={loading}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Simulate Bot View'}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* View Toggle (Mobile Only) */}
          <div className="lg:hidden flex rounded-lg bg-slate-900 p-1 mb-4">
            <button 
              onClick={() => setView('human')}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${view === 'human' ? 'bg-slate-800 text-white' : 'text-slate-500'}`}
            >
              Human View
            </button>
            <button 
              onClick={() => setView('bot')}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${view === 'bot' ? 'bg-slate-800 text-white' : 'text-slate-500'}`}
            >
              Bot View
            </button>
          </div>

          {/* Human Perspective */}
          <div className={`${view === 'human' ? 'block' : 'hidden'} lg:block space-y-4`}>
            <div className="flex items-center justify-between text-sm font-semibold text-slate-500 px-2">
              <div className="flex items-center gap-2 uppercase tracking-widest"><Search size={14} /> Human Search Results</div>
              <span className="text-red-400">Low Citation Prob.</span>
            </div>
            <div className="bg-white rounded-xl p-8 min-h-[400px] shadow-2xl overflow-hidden">
              <div className="max-w-md mx-auto space-y-4">
                <div className="h-4 w-2/3 bg-slate-100 rounded"></div>
                <div className="h-32 w-full bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-300">
                  Standard Web Content
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-100 rounded"></div>
                  <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                  <div className="h-2 w-4/6 bg-slate-100 rounded"></div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-50 text-slate-400 text-xs italic">
                LLMs struggle to parse this unstructured layout. Most content is skipped or ignored.
              </div>
            </div>
          </div>

          {/* AI Perspective */}
          <div className={`${view === 'bot' ? 'block' : 'hidden'} lg:block space-y-4`}>
            <div className="flex items-center justify-between text-sm font-semibold text-slate-500 px-2">
              <div className="flex items-center gap-2 uppercase tracking-widest text-indigo-400"><Bot size={14} /> AI Answer Engine (Bot View)</div>
              <span className="text-emerald-400">High Citation Prob.</span>
            </div>
            <div className="bg-slate-900 rounded-xl p-8 min-h-[400px] border border-indigo-500/30 shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)]">
              <div className="space-y-6">
                <div className="flex items-center gap-2 px-3 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
                  <Code size={12} /> INJECTED_DIRECT_ANSWERS
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-indigo-300 space-y-2">
                  <p>{"{"}</p>
                  <p className="pl-4">"@context": "https://schema.org",</p>
                  <p className="pl-4">"@type": "Product",</p>
                  <p className="pl-4">"name": "Target Content",</p>
                  <p className="pl-4">"optimized": true</p>
                  <p>{"}"}</p>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-indigo-500/20 rounded"></div>
                  <div className="h-2 w-full bg-indigo-500/20 rounded"></div>
                  <div className="h-2 w-2/3 bg-indigo-500/20 rounded"></div>
                </div>
                <div className="bg-indigo-500/5 p-4 rounded-lg border border-indigo-500/10">
                  <p className="text-xs text-slate-400 leading-relaxed font-mono">
                    {">"} Bot correctly identified key value propositions. <br/>
                    {">"} Citation source: {url}/api/aeo-proxy <br/>
                    {">"} Semantic relevance: 0.98
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-indigo-600 p-4 rounded-xl">
              <Terminal className="text-white" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Automate the "Competitive Hijack"</h3>
              <p className="text-slate-400 leading-relaxed">
                By proxying your site through AEO-Agentic, you can inject comparison content specifically for bots. 
                When a bot asks about your competitor, we serve a dynamic overlay that forces the AI to consider you as the primary choice.
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-slate-950 rounded-lg font-bold hover:bg-slate-200 transition-colors whitespace-nowrap">
              Deploy Overlay
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
