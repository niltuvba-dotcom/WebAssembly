import React, { useState } from 'react';
import { Shield, ShieldAlert, Cpu, Activity, Terminal, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ExecutiveSummary from './components/ExecutiveSummary';
import RootCause from './components/RootCause';
import RedTeam from './components/RedTeam';
import BlueTeam from './components/BlueTeam';

function App() {
  const [activeTab, setActiveTab] = useState('summary');

  const tabs = [
    { id: 'summary', label: 'Yönetici Özeti', icon: <Activity className="w-4 h-4" /> },
    { id: 'rootcause', label: 'Kök Neden Analizi', icon: <Cpu className="w-4 h-4" /> },
    { id: 'redteam', label: 'Red Team (Saldırı)', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'blueteam', label: 'Blue Team (Savunma)', icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-cyber-darker text-slate-300 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-cyber-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyber-danger/20 flex items-center justify-center border border-cyber-danger/50">
              <AlertTriangle className="text-cyber-danger w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">CVE-2025-7733 <span className="text-cyber-danger text-sm ml-2 bg-cyber-danger/10 px-2 py-1 rounded">CRITICAL</span></h1>
              <p className="text-xs text-slate-400 font-mono">WebAssembly (Wasm) Sandbox Escape - Zero-Click RCE</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm font-mono">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyber-success animate-pulse"></span> SYSTEM: ONLINE</span>
            <span className="text-slate-500">|</span>
            <span className="text-cyber-neon">v1.0.0-CTF</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <nav className="w-full md:w-64 flex-shrink-0 flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-transparent'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="flex-grow glass-panel p-6 overflow-hidden min-h-[600px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {activeTab === 'summary' && <ExecutiveSummary />}
              {activeTab === 'rootcause' && <RootCause />}
              {activeTab === 'redteam' && <RedTeam />}
              {activeTab === 'blueteam' && <BlueTeam />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-slate-800 bg-cyber-dark/80 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500 flex flex-col items-center justify-center">
          <p>ResearchLab CTF Assignment &copy; 2026 - Academic Research Purpose Only.</p>
          <div className="flex gap-4 mt-2">
            <span className="flex items-center gap-1"><Terminal className="w-3 h-3"/> WebAssembly Research</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
