import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-blue-500/20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <Zap className="w-8 h-8 text-blue-400 group-hover:text-cyan-300 transition-colors" />
            <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-lg -z-10 group-hover:bg-cyan-400/30 transition-all" />
          </div>
          <h1 className="text-xl font-bold gradient-text">
            Stellar Agent
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#pages" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium">
            Pages
          </a>
          <a href="#vision" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium">
            Vision
          </a>
        </nav>

        <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 text-sm">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
