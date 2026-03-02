import { Shield, Brain, Zap, Eye, Lock, Gauge } from 'lucide-react';
import { ComponentType, SVGProps } from 'react';

interface Feature {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: 'AI-Powered Agents',
    description: 'Intelligent agents that understand and execute your blockchain intentions safely.',
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description: 'Every transaction is explained. Understand exactly what happens before it executes.',
  },
  {
    icon: Shield,
    title: 'Maximum Security',
    description: 'Battle-tested validation ensures your assets and transactions are always protected.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed without sacrificing safety or clarity.',
  },
  {
    icon: Lock,
    title: 'Verified Execution',
    description: 'Cryptographically verified transaction simulations before submission.',
  },
  {
    icon: Gauge,
    title: 'Advanced Analytics',
    description: 'Real-time monitoring and detailed reporting of all transaction activities.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-4">
            Why Choose Stellar Agent
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built for developers who demand transparency, security, and simplicity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group glass-effect p-8 rounded-xl border border-blue-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:bg-blue-500/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
