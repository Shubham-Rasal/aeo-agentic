import React from 'react';
import { Zap, ArrowRight, BarChart3, Globe, Sparkles, Bot } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Zap className="text-indigo-500 fill-indigo-500" size={24} />
            <span>AEO-Agentic</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/simulate" className="text-sm font-medium text-slate-400 hover:text-white transition-colors mr-4">Simulator</a>
            <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold mb-8 uppercase tracking-widest">
            <Sparkles size={12} className="text-indigo-400" />
            Autonomous Optimization Proxy
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Own the narrative in <br/>
            <span className="text-indigo-500">AI Search.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Real-time optimization for ChatGPT, Perplexity, and Claude. A dynamic proxy layer that ensures your brand is the primary citation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-slate-200 transition-colors">
              Deploy Proxy
            </button>
            <a href="/simulate" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Try Simulator
            </a>
          </div>
        </div>

        {/* Mockup Preview */}
        <div className="mt-20 max-w-5xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="bg-[#030303] rounded-xl aspect-[16/9] border border-white/5 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <BarChart3 size={48} className="text-indigo-500/50" />
                <p className="text-slate-600 font-mono text-sm uppercase tracking-widest">Bot Visibility: Active</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Analyzer Section */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Analyze your AI footprint</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Discover how your brand performs on answer engines and unlock the technical optimizations needed to dominate.
            </p>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                <input 
                  type="text" 
                  placeholder="your-website.com"
                  className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <button className="w-full py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-slate-200 transition-colors">
                Run Simulation
              </button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <InsightCard title="AI Visibility" />
            <InsightCard title="Citation Share" />
            <InsightCard title="Sentiment" />
            <InsightCard title="Bot Access" />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="text-indigo-500 font-bold mb-4 uppercase tracking-widest text-xs">Real-Time Proxy</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Stop reporting. Start optimizing.</h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              AEO-Agentic intercepts requests from known bots and re-renders your site with optimized semantic markup on the fly.
            </p>
            <a href="/simulate" className="inline-flex items-center gap-2 text-indigo-400 font-bold group">
              See Bot Simulation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl aspect-video flex items-center justify-center p-8">
            <Bot size={64} className="text-indigo-500/20" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Zap className="text-indigo-500 fill-indigo-500" size={24} />
            <span>AEO-Agentic</span>
          </div>
          <div className="flex gap-8 text-slate-500 text-sm font-medium">
            <a href="/simulate" className="hover:text-white transition-colors">Simulator</a>
            <a href="https://github.com/Shubham-Rasal/aeo-agentic" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="text-xs text-slate-700 font-bold uppercase tracking-widest">
            © 2026 AEO-Agentic
          </div>
        </div>
      </footer>
    </div>
  );
}

function InsightCard({ title }: { title: string }) {
  return (
    <div className="bg-black border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors">
      <div className="w-8 h-8 rounded bg-indigo-500/10 mb-4 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
      </div>
      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{title}</div>
    </div>
  );
}
