import React from 'react';
import { Bot, Zap, Shield, Target, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
          <Zap size={14} />
          <span>Real-Time AEO Proxy Layer</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          AEO-Agentic
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Instead of reading reports, control the bots. A dynamic proxy layer that re-renders your site for LLMs in real-time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg font-semibold text-lg flex items-center gap-2 group">
            Launch Proxy Layer <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="/simulate" className="px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors rounded-lg font-semibold text-lg">
            See Bot Simulation
          </a>
        </div>
      </header>

      {/* Comparison Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-slate-500 uppercase tracking-widest text-sm font-bold mb-4">The Legacy Way (Profound)</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 italic">
                <span className="text-red-500">✕</span> Weekly static PDF reports
              </li>
              <li className="flex gap-3 text-slate-400 italic">
                <span className="text-red-500">✕</span> Manual implementation by engineers
              </li>
              <li className="flex gap-3 text-slate-400 italic">
                <span className="text-red-500">✕</span> Human "strategists" on Slack
              </li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-indigo-900/20 border border-indigo-500/30">
            <h3 className="text-indigo-400 uppercase tracking-widest text-sm font-bold mb-4">The Agentic Way</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-indigo-500 font-bold">✓</span> Zero-latency implementation via DNS
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-500 font-bold">✓</span> On-the-fly HTML re-rendering for bots
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-500 font-bold">✓</span> Autonomous A/B citation testing
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Bot className="text-indigo-400" />}
            title="Bot Detection"
            desc="Automatically detects requests from ChatGPT, Perplexity, and Claude to serve optimized content."
          />
          <FeatureCard 
            icon={<Target className="text-indigo-400" />}
            title="Competitive Hijack"
            desc="Generates contextual overlays to poison competitor citation share in real-time."
          />
          <FeatureCard 
            icon={<Shield className="text-indigo-400" />}
            title="Self-Healing AEO"
            desc="Automatically tries different technical markups until visibility targets are met."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
        © 2026 AEO-Agentic. Built for the weekend.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-indigo-500/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
