import React, { useState, useEffect } from 'react';
import { ShieldAlert, Terminal, Skull, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const RedTeam = () => {
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [simulating, setSimulating] = useState(false);

  const startSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setTerminalOutput([]);
    
    const steps = [
      "[+] Initiating targeted WebAssembly zero-click exploitation...",
      "[*] Recon: Fingerprinting browser engine (Chrome V8 detected)",
      "[*] Recon: Checking Wasm table optimization flags...",
      "[+] Vulnerability confirmed: CVE-2025-7733 surface available",
      "[*] Stage 1: Crafting malicious .wasm payload with Int-Overflow",
      "[*] Stage 2: Spraying heap to predict memory layout...",
      "[!] Memory layout predicted. Base address: 0x7ffd8a002000",
      "[*] Stage 3: Triggering JIT TurboFan miscalculation",
      "[+] Integer Overflow successful! Memory bounds check bypassed.",
      "[*] Stage 4: Overwriting Wasm function table pointers...",
      "[!] Wasm Sandbox Escaped! Arbitrary read/write achieved.",
      "[*] Stage 5: Injecting shellcode into executable memory region",
      "[+] Zero-Click RCE achieved! Reverse shell incoming...",
      "root@target:~# whoami\nroot"
    ];

    let delay = 0;
    steps.forEach((step, index) => {
      delay += Math.random() * 800 + 400; // Random delay between 400ms and 1200ms
      setTimeout(() => {
        setTerminalOutput(prev => [...prev, step]);
        if (index === steps.length - 1) setSimulating(false);
      }, delay);
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <ShieldAlert className="text-cyber-danger" />
            Red Team: Saldırı Vektörü (Attack Vector)
          </h2>
          <div className="h-1 w-20 bg-cyber-danger rounded"></div>
        </div>
        <button 
          onClick={startSimulation}
          disabled={simulating}
          className="px-4 py-2 bg-cyber-danger/20 hover:bg-cyber-danger/40 border border-cyber-danger/50 text-cyber-danger rounded-lg text-sm font-bold flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Skull className="w-4 h-4" />
          {simulating ? 'Simüle Ediliyor...' : 'Exploit Simülasyonunu Başlat'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
            <h3 className="text-lg font-bold text-white mb-3 border-b border-slate-700 pb-2">1. Recon (Keşif) Aşaması</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-cyber-danger shrink-0 mt-0.5" />
                <span>Hedefin tarayıcı sürüm tespiti (User-Agent ve JavaScript API fingerprinting).</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-cyber-danger shrink-0 mt-0.5" />
                <span><code className="text-cyber-neon bg-slate-900 px-1 rounded">WebAssembly.validate()</code> kullanılarak Wasm desteğinin ve spesifik JIT özelliklerinin kontrolü.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
            <h3 className="text-lg font-bold text-white mb-3 border-b border-slate-700 pb-2">2. Exploitation (Sömürü) Aşaması</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-cyber-danger shrink-0 mt-0.5" />
                <span>Zararlı reklam (Malvertising) veya gizli iframe üzerinden özel hazırlanmış Wasm payload'u hedefe ulaştırılır.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-cyber-danger shrink-0 mt-0.5" />
                <span><code className="text-cyber-neon bg-slate-900 px-1 rounded">memory.grow</code> talimatı ile integer overflow tetiklenerek TurboFan bypass edilir.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-cyber-danger shrink-0 mt-0.5" />
                <span>Sandbox dışına taşan bellek alanı üzerinden ROP (Return-Oriented Programming) zinciri oluşturulur.</span>
              </li>
            </ul>
          </div>

          <div className="bg-cyber-warning/10 border border-cyber-warning/30 rounded-lg p-4">
            <p className="text-sm text-cyber-warning italic flex items-center gap-2">
              <span className="font-bold">Not:</span> Bazı bulut ortamlarında (Cloud Functions) RCE tetiklenmesi durumu "(Hypothetical risk)" olarak sınıflandırılmıştır.
            </p>
          </div>
        </div>

        {/* Terminal Simulation */}
        <div className="bg-[#0a0a0a] border border-slate-700 rounded-lg overflow-hidden flex flex-col h-[400px]">
          <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-300 font-mono">attacker_console (Metasploit/CobaltStrike)</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="p-4 overflow-y-auto flex-grow font-mono text-xs">
            {terminalOutput.length === 0 && !simulating && (
              <div className="text-slate-500 italic h-full flex flex-col items-center justify-center">
                <Terminal className="w-10 h-10 mb-2 opacity-20" />
                Simülasyonu başlatmak için butona tıklayın...
              </div>
            )}
            <div className="space-y-1.5">
              {terminalOutput.map((line, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    line.startsWith('[+]') ? 'text-green-400' :
                    line.startsWith('[!]') ? 'text-red-400 font-bold' :
                    line.startsWith('root@') ? 'text-yellow-400 mt-4' :
                    'text-slate-300'
                  }
                >
                  {line}
                </motion.div>
              ))}
              {simulating && (
                <motion.div 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-slate-400 inline-block align-middle ml-1"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedTeam;
