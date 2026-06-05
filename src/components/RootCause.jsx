import React from 'react';
import { Cpu, Server, Code, Bug } from 'lucide-react';

const RootCause = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Cpu className="text-cyber-accent" />
          Kök Neden Analizi (Root-Cause Analysis)
        </h2>
        <div className="h-1 w-20 bg-cyber-accent rounded mb-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
            <h3 className="text-lg font-bold text-cyber-neon flex items-center gap-2 mb-3">
              <Bug className="w-5 h-5" />
              Zafiyetin Doğası
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              WebAssembly spesifikasyonuna göre, bir Wasm modülünün doğrusal belleği (linear memory) izole edilmiş bir "sandbox" ortamında çalışır. Ancak, <strong>CVE-2025-7733</strong> zafiyeti, V8 engine (Chrome/Edge) içindeki JIT (Just-In-Time) derleyicisinde bulunan bir optimizasyon hatasından kaynaklanmaktadır.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mt-2">
              Özellikle <code className="bg-slate-900 text-cyber-neon px-1 rounded">memory.grow</code> talimatı işlenirken 32-bit tamsayı (integer) sınırlarının yetersiz kontrol edilmesi (Integer Overflow), tahsis edilen bellek alanı dışına yazma (Out-of-Bounds Write) imkanı tanır.
            </p>
          </div>

          <div className="bg-cyber-dark/60 border border-slate-700 rounded-lg p-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
              <Server className="w-5 h-5 text-cyber-accent" />
              JIT Optimizasyon Hatası
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-danger mt-1.5"></div>
                <span>TurboFan (V8'in optimize edici derleyicisi), Array sınır kontrollerini (bound checks) gereksiz bularak atlar.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-danger mt-1.5"></div>
                <span>Wasm Table manipülasyonu ile sahte fonksiyon işaretçileri (function pointers) belleğe enjekte edilir.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-danger mt-1.5"></div>
                <span>Sonuç olarak saldırgan, tarayıcının işlem (process) belleğine doğrudan okuma/yazma erişimi elde eder (Arbitrary Read/Write).</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0d1117] border border-slate-700 rounded-lg overflow-hidden flex flex-col">
          <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
            <Code className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-300 font-mono">exploit_poc.wat (WebAssembly Text Format)</span>
          </div>
          <div className="p-4 overflow-auto flex-grow font-mono text-xs leading-relaxed">
            <pre>
              <span className="text-pink-400">(module</span><br/>
              <span className="text-slate-400">  ;; Bellek tahsisi (Başlangıç 1 sayfa)</span><br/>
              <span className="text-pink-400">  (memory </span><span className="text-yellow-300">$mem</span><span className="text-orange-300"> 1</span><span className="text-pink-400">)</span><br/>
              <br/>
              <span className="text-slate-400">  ;; Integer overflow tetikleyen fonksiyon</span><br/>
              <span className="text-pink-400">  (func </span><span className="text-blue-300">$trigger_overflow</span><span className="text-pink-400"> (export </span><span className="text-green-300">"trigger"</span><span className="text-pink-400">)</span><br/>
              <span className="text-pink-400">    (local </span><span className="text-yellow-300">$addr</span><span className="text-cyan-300"> i32</span><span className="text-pink-400">)</span><br/>
              <span className="text-slate-400">    ;; 0xffffffff + 1 -> 0 (Overflow)</span><br/>
              <span className="text-cyan-300">    i32.const</span><span className="text-orange-300"> -1</span><br/>
              <span className="text-cyan-300">    i32.const</span><span className="text-orange-300"> 1</span><br/>
              <span className="text-cyan-300">    i32.add</span><br/>
              <span className="text-pink-400">    local.set </span><span className="text-yellow-300">$addr</span><br/>
              <br/>
              <span className="text-slate-400">    ;; Bellek sınırı dışına yazma (OOB Write)</span><br/>
              <span className="text-pink-400">    local.get </span><span className="text-yellow-300">$addr</span><br/>
              <span className="text-cyan-300">    i64.const</span><span className="text-orange-300"> 0x4141414141414141</span><br/>
              <span className="text-cyan-300">    i64.store</span><br/>
              <span className="text-pink-400">  )</span><br/>
              <span className="text-pink-400">)</span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootCause;
