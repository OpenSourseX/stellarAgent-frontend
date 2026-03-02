import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-effect rounded-full border border-cyan-500/30">
          <Sparkles size={16} className="text-cyan-400" />
          <span className="text-sm text-cyan-300">Introducing Safe, Explainable Blockchain</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold mb-6 gradient-text leading-tight">
          Blockchain Agents
          <br />
          You Can Trust
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience transparent, explainable blockchain transactions powered by intelligent agents.
          Every step is clear, every decision is validated.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-lg">
            Explore Demo
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 glass-effect text-white rounded-lg font-semibold hover:bg-white/10 transition-all border border-white/20 hover:border-blue-500/50">
            View Docs
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { value: '4', label: 'MVP Pages' },
            { value: '100%', label: 'Explainable' },
            { value: 'Safe', label: 'Verified' },
          ].map((stat, i) => (
            <div key={i} className="glass-effect p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all hover:bg-blue-500/10">
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
