import React from 'react';
import { Shield, Activity, FileCheck, Search } from 'lucide-react';

const BlueTeam = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Shield className="text-cyber-success" />
          Blue Team: Savunma ve İyileştirme (Remediation)
        </h2>
        <div className="h-1 w-20 bg-cyber-success rounded mb-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
            <Search className="w-5 h-5 text-cyber-neon" />
            OpenVAS Zafiyet Tarama Bulguları
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Tarama Tarihi:</span>
              <span className="text-white font-mono">2026-06-05 03:00 UTC</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Hedef Sistem:</span>
              <span className="text-white font-mono">Chrome Enterprise 132.0 / Edge</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">CVE ID:</span>
              <span className="text-cyber-danger font-bold bg-cyber-danger/10 px-2 py-0.5 rounded">CVE-2025-7733</span>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-700">
              <h4 className="text-sm font-bold text-slate-300 mb-2">Tespit Edilen Anomaliler (IoC):</h4>
              <ul className="text-xs font-mono text-slate-400 space-y-1 bg-[#0a0a0a] p-3 rounded border border-slate-700">
                <li className="text-yellow-400">SIGSEGV in v8::internal::wasm::WasmEngine</li>
                <li>Unexpected memory.grow offset limits</li>
                <li>Abnormal WebAssembly module size (&gt;10MB compiled)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
            <FileCheck className="w-5 h-5 text-cyber-success" />
            Remediation Plan (Düzeltme Adımları)
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-cyber-success/20 text-cyber-success flex items-center justify-center font-bold text-sm shrink-0 border border-cyber-success/50">1</div>
              <div>
                <h4 className="text-sm font-bold text-slate-200">Tarayıcı Güncellemesi (Kritik)</h4>
                <p className="text-xs text-slate-400 mt-1">Google Chrome ve Microsoft Edge tarayıcıları derhal <code className="text-cyber-neon">v133.0.6834.x</code> sürümüne (veya daha yeni) güncellenmelidir.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-cyber-success/20 text-cyber-success flex items-center justify-center font-bold text-sm shrink-0 border border-cyber-success/50">2</div>
              <div>
                <h4 className="text-sm font-bold text-slate-200">GPO (Group Policy) Ayarları</h4>
                <p className="text-xs text-slate-400 mt-1">Acil durum önlemi olarak kurumsal ağlarda JIT derleyicisi veya WebAssembly geçici olarak devre dışı bırakılabilir (Örn: <code className="text-cyber-neon">--js-flags="--no-wasm-tier-up"</code>).</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-cyber-success/20 text-cyber-success flex items-center justify-center font-bold text-sm shrink-0 border border-cyber-success/50">3</div>
              <div>
                <h4 className="text-sm font-bold text-slate-200">EDR ve IPS İmzaları</h4>
                <p className="text-xs text-slate-400 mt-1">Ağ tabanlı saldırıları tespit etmek için Wasm tabanlı zararlı yük (payload) imzaları IPS cihazlarına eklenmeli, EDR üzerinden Chrome/Edge child-process anormallikleri izlenmelidir.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-cyber-dark/60 border border-slate-700 rounded-lg p-5">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
          <Activity className="w-5 h-5 text-cyber-neon" />
          Risk Matrisi ve Önceliklendirme
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-slate-800/50 border-b border-slate-700">
              <tr>
                <th className="px-4 py-3">Bulgu</th>
                <th className="px-4 py-3 text-center">Severity</th>
                <th className="px-4 py-3">Saldırı Vektörü</th>
                <th className="px-4 py-3 text-center">Öncelik</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              <tr className="bg-cyber-danger/5 hover:bg-cyber-danger/10 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-200">CVE-2025-7733 (Wasm Sandbox Escape)</td>
                <td className="px-4 py-3 text-center"><span className="text-cyber-danger font-bold bg-cyber-danger/10 px-2 py-1 rounded">CRITICAL</span></td>
                <td className="px-4 py-3 text-slate-400">Network / Zero-Click</td>
                <td className="px-4 py-3 text-center"><span className="text-white font-bold bg-red-600 px-2 py-1 rounded text-xs">P1</span></td>
              </tr>
              <tr className="hover:bg-slate-800/50 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-200">Eksik Bellek İzolasyonu (Hypothetical)</td>
                <td className="px-4 py-3 text-center"><span className="text-cyber-warning font-bold bg-cyber-warning/10 px-2 py-1 rounded">HIGH</span></td>
                <td className="px-4 py-3 text-slate-400">Local / Cloud Functions</td>
                <td className="px-4 py-3 text-center"><span className="text-white font-bold bg-orange-500 px-2 py-1 rounded text-xs">P2</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlueTeam;
