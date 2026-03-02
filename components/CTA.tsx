import { ArrowRight } from 'lucide-react';
import { MouseEvent } from 'react';

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
        <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
          Ready to Transform Your Blockchain Experience?
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join developers and enterprises building safer, more transparent blockchain applications with Stellar Agent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-lg"
            onClick={(e: MouseEvent) => {
              /* handle start building click */
              e.preventDefault();
            }}
          >
            Start Building
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="px-10 py-4 glass-effect text-white rounded-lg font-semibold hover:bg-white/10 transition-all border border-white/20 hover:border-blue-500/50 text-lg"
            onClick={(e: MouseEvent) => e.preventDefault()}
          >
            Schedule Demo
          </button>
        </div>

        <p className="text-gray-400 mt-8 text-sm">
          No credit card required. Get started in minutes.
        </p>
      </div>
    </section>
  );
}
