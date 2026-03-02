import { Cpu, Network, TrendingUp } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold gradient-text mb-6">
              The Future of Blockchain
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stellar Agent reimagines how users interact with blockchain technology. By combining AI-powered agents with crystal-clear transaction explanations, we're building the bridge between complex blockchain operations and human understanding.
            </p>

            <div className="space-y-4">
              {[
                { icon: Cpu, text: 'Intelligent transaction analysis' },
                { icon: Network, text: 'Decentralized & trustless' },
                { icon: TrendingUp, text: 'Scalable for enterprise' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-all">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative z-10 glass-effect rounded-2xl border border-cyan-500/30 p-8 hover:border-cyan-500/60 transition-all hover:shadow-2xl hover:shadow-cyan-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Safe Execution
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <span className="text-gray-300">Pre-execution validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <span className="text-gray-300">Detailed simulations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <span className="text-gray-300">User confirmations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <span className="text-gray-300">Trustless blockchain</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-500/20">
                <p className="text-sm text-gray-400">
                  Every transaction is explainable, every action is validated, and complete control remains with you.
                </p>
              </div>
            </div>

            {/* Animated background element */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
