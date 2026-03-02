import { ArrowRight, Wallet, Send, CheckCircle, Lightbulb, FileText } from 'lucide-react';
import { ComponentType, SVGProps } from 'react';

interface Page {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
  status: string;
}

const pages: Page[] = [
  {
    icon: Wallet,
    title: 'Wallet Connect',
    description: 'Securely connect your Stellar wallet and manage your crypto assets with confidence.',
    color: 'from-blue-500/20 to-blue-600/20',
    status: 'Ready',
  },
  {
    icon: Send,
    title: 'Transfer Form',
    description: 'Intuitive interface for creating and reviewing blockchain transfers before submission.',
    color: 'from-cyan-500/20 to-blue-500/20',
    status: 'Ready',
  },
  {
    icon: CheckCircle,
    title: 'Simulation Result',
    description: 'Comprehensive simulation environment to test transactions safely before execution.',
    color: 'from-green-500/20 to-cyan-500/20',
    status: 'Ready',
  },
  {
    icon: Lightbulb,
    title: 'Intent Demo',
    description: 'See how AI agents understand and execute your blockchain intentions with clarity.',
    color: 'from-amber-500/20 to-orange-500/20',
    status: 'Ready',
  },
  {
    icon: FileText,
    title: 'Transaction Explanation',
    description: 'Get detailed, human-readable explanations of every transaction before it executes.',
    color: 'from-purple-500/20 to-pink-500/20',
    status: 'Ready',
  },
];

export default function Pages() {
  return (
    <section id="pages" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-4">
            MVP Pages
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need for secure, explainable blockchain interactions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pages.map((page, index) => {
            const Icon = page.icon;
            return (
              <div
                key={index}
                className="group relative glass-effect rounded-xl border border-blue-500/20 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 animate-fade-in hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/40 to-cyan-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-300" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                      {page.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors mb-6">
                    {page.description}
                  </p>

                  <button className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-cyan-300">
                    Explore
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
