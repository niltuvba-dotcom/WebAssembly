import React from 'react';
import { AlertCircle, Target, Zap } from 'lucide-react';

const ExecutiveSummary = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Target className="text-cyber-accent" />
          Vaka Özeti (Executive Summary)
        </h2>
        <div className="h-1 w-20 bg-cyber-accent rounded mb-6"></div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
        <p className="text-slate-300 leading-relaxed text-lg">
          Tersine mühendisler, <span className="text-cyber-neon font-mono font-bold">JIT derlenmiş WebAssembly tablolarını manipüle ederek</span> Chrome ve Edge tarayıcılarındaki Wasm doğrusal bellek (linear memory) koruma alanından çıkmanın (Sandbox Escape) bir yolunu buldular. 
          Bu kritik zafiyet, tarayıcıda <span className="danger-text font-bold">sıfır tıklamayla uzaktan kod yürütmeye (Zero-Click RCE)</span> olanak sağlamaktadır.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-cyber-dark/60 border border-slate-700 rounded-lg p-5">
          <h3 className="text-sm text-slate-400 font-mono mb-1 uppercase tracking-wider">Etkilenen Sistemler</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-1 mt-2">
            <li>Google Chrome (V8 Engine) - &lt; 133.0.x</li>
            <li>Microsoft Edge - &lt; 133.0.x</li>
            <li>Node.js (Wasm Engine kullanan sürümler)</li>
          </ul>
        </div>
        
        <div className="bg-cyber-danger/10 border border-cyber-danger/30 rounded-lg p-5">
          <h3 className="text-sm text-cyber-danger font-mono mb-1 uppercase tracking-wider flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> CVSS v3.1 Skoru
          </h3>
          <div className="flex items-end gap-3 mt-2">
            <span className="text-4xl font-bold text-cyber-danger">9.8</span>
            <span className="text-cyber-danger/80 text-sm mb-1 font-bold">CRITICAL</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 font-mono">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</p>
        </div>
      </div>

      <div className="bg-cyber-dark/60 border border-slate-700 rounded-lg p-5">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <Zap className="w-5 h-5 text-cyber-warning" />
          Akademik Araştırma Kapsamı
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          Bu vaka çalışması, bir üniversitenin "ResearchLab Capture The Flag" ödevi olarak ayrılmıştır. Olayın araştırılması, 
          saldırı vektörlerinin kök neden analizi (root-cause analysis) yapılarak incelenmesi ve Red/Blue Team perspektiflerinden 
          çok boyutlu bir simülasyon sunulması amaçlanmaktadır.
        </p>
        <div className="flex gap-3">
          <a href="#" className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded border border-slate-600 transition-colors text-slate-300">
            CVE Veritabanında Arama Yap
          </a>
          <a href="#" className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded border border-slate-600 transition-colors text-slate-300">
            Hacker Haberleri Referansları
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
