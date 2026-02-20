import React from 'react';
import { Bot, Zap, Shield, Target, ArrowRight, BarChart3, Globe, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Zap className="text-indigo-500 fill-indigo-500" size={24} />
            <span>AEO-Agentic</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="/simulate" className="hover:text-white transition-colors">Simulator</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Log in</button>
            <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
              Get a Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold mb-8 uppercase tracking-widest">
            <Sparkles size={12} className="text-indigo-400" />
            Announcing Real-Time DNS Proxy v2
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Get your brand cited by <br/>
            <span className="text-indigo-500">ChatGPT.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Reach millions of consumers who are using AI to discover products. A dynamic proxy layer that optimizes your site for LLMs in real-time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-slate-200 transition-colors">
              Get a Demo
            </button>
            <a href="/simulate" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Get Started
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
                <p className="text-slate-600 font-mono text-sm">Dashboard Preview: Agentic Proxy Active</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof */}
      <section className="py-20 border-y border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-600 mb-12">The teams we empower</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-30 grayscale hover:grayscale-0 transition-all">
            <div className="font-bold text-xl flex justify-center italic">MongoDB</div>
            <div className="font-bold text-xl flex justify-center italic">indeed</div>
            <div className="font-bold text-xl flex justify-center italic">MERCURY</div>
            <div className="font-bold text-xl flex justify-center italic">Zapier</div>
            <div className="font-bold text-xl flex justify-center italic">Ramp</div>
            <div className="font-bold text-xl flex justify-center italic">Figma</div>
          </div>
        </div>
      </section>

      {/* Analyzer Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Get your free AEO Report today</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Discover how your brand performs on answer engines — and uncover the opportunities to outpace the competition.
            </p>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                <input 
                  type="text" 
                  placeholder="Enter your website URL"
                  className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <button className="w-full py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-slate-200 transition-colors">
                Analyze my brand
              </button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <InsightCard title="AI Visibility" />
            <InsightCard title="Source Citations" />
            <InsightCard title="Brand Sentiment" />
            <InsightCard title="Content AEO" />
          </div>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="text-indigo-500 font-bold mb-4">Agents</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Create AI-optimized content in minutes, not weeks</h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              Create, optimize, and publish content at scale while ensuring maximum visibility across AI-powered search.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-indigo-400 font-bold group">
              Learn more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl aspect-video flex items-center justify-center p-8">
            <Bot size={64} className="text-indigo-500/20" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-8">
              <Zap className="text-indigo-500 fill-indigo-500" size={24} />
              <span>AEO-Agentic</span>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              The real-time optimization layer for the AI-first web. Control the bots, own the narrative.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Social</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex justify-between text-xs text-slate-700 font-bold uppercase tracking-widest">
          <span>© 2026 AEO-Agentic</span>
          <span>All systems normal</span>
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
