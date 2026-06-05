<div align="center">
  # WebAssembly Sandbox Escape RCE (CVE-2025-7733) Red vs Blue Simulation

  ![Dil](https://img.shields.io/badge/Dil-Python_|_React-blue?style=flat-square)
  ![Durum](https://img.shields.io/badge/Durum-Tamamlandı-yellow?style=flat-square)
  ![Ders](https://img.shields.io/badge/Ders-CTF_Research-purple?style=flat-square)
</div>

### Danışman Bilgisi
| | |
| :--- | :--- |
| **Ad Soyad** | [Danışman Adı] |
| **E-posta** | email@university.edu |

### Öğrenci Bilgisi
| | |
| :--- | :--- |
| **Ad Soyad** | [Öğrenci Adı] |
| **Öğrenci No** | [Öğrenci Numarası] |

### Ders Bilgileri
| | |
| :--- | :--- |
| **Ders Adı** | Sızma Testi |
| **Ders Kodu** | BGT006 |
| **Kredi** | 3 AKTS |
| **Ön Koşullar** | Ağ Temelleri, Linux CLI, Python, Web Güvenliği |
| **Dönem** | 2025-2026 Bahar |

---

## 📑 1. Abstract (Proje Özeti)

Modern tarayıcılarda yüksek performanslı uygulamalar çalıştırmayı sağlayan WebAssembly (Wasm), aynı zamanda kritik bir saldırı yüzeyi oluşturmaktadır. Bu akademik proje, **Chrome ve Edge** tarayıcılarındaki V8 motorunda (JIT Derleyici) ortaya çıkan kritik WebAssembly (Wasm) Sanal Ortam Güvenlik Açığının (CVE-2025-7733) çok boyutlu (multi-dimensional) teknik analizini simüle eder.

Sıradan bir statik rapor hazırlamak yerine, **Glassmorphism**, **Cyberpunk estetiği** ve modern **Vite/React** teknolojileri harmanlanarak, tarayıcı zafiyetlerinin modern web teknolojileri ile nasıl dinamik bir **"Güvenlik Gösterge Paneli" (SecOps Dashboard)** üzerinden raporlanabileceği kanıtlanmıştır.

---

## 🎯 2. Zafiyet Değerlendirme Raporu (Vulnerability Assessment)
BGT006 Sızma Testi dersi proje kriterleri doğrultusunda hazırlanan resmi değerlendirme belgeleri `docs/research/` dizininde sunulmuştur:

- [x] **Nessus/OpenVAS Tarama Raporları:** [01_OpenVAS_Scan_Report.md](./docs/research/01_OpenVAS_Scan_Report.md)
- [x] **Risk Matrisi ve Önceliklendirme:** [02_Risk_Matrix_and_Prioritization.md](./docs/research/02_Risk_Matrix_and_Prioritization.md)
- [x] **Düzeltme Önerileri (Remediation) Raporu:** [03_Remediation_Plan.md](./docs/research/03_Remediation_Plan.md)
- [x] **CVE Eşleştirme ve CVSS Skorlama:** Tüm dokümanlar resmi `CVE-2025-7733` (CVSS 9.8) kaydı baz alınarak hazırlanmıştır.

---

## 📊 3. Visualization & Interface (Dashboard Önizlemesi)

Geliştirilen interaktif Cybersecurity Dashboard, hocalar ve araştırmacılar için veriyi yalnızca metin olarak sunmaz; interaktif grafikler ve canlı simülasyonlarla destekler.

![Site Demo](./public/assets/site_demo.gif)

*Figür 1: Canlı Red/Blue Team Simülasyonu ve Zafiyet Analizine sahip Dashboard Arayüzü (Hareketli Demo)*

---

## ⚙️ 3. Vulnerability Mechanics (Zafiyetin Anatomisi)

Bu projenin simüle ettiği saldırı vektörü (Attack Vector), JIT derleyicisi kaynaklı hafıza bozulması güvenlik açıklarına dayanmaktadır:

| Faz | Açıklama | CVSS Puanı (Tahmini) |
| :--- | :--- | :--- |
| **1. Integer Overflow (TurboFan Bypass)** | `memory.grow` talimatı işlenirken V8 TurboFan'daki 32-bit tamsayı sınırı kontrolünün atlanarak (Integer Overflow) Wasm doğrusal belleğinden çıkılması. | `9.8 / 10` |
| **2. Out-of-Bounds Write (OOB)** | Wasm Sandbox dışına taşılarak tarayıcının işlem belleğine doğrudan erişilmesi (Arbitrary Read/Write) ve sahte fonksiyon işaretçileri yazılarak Sıfır Tıklamalı RCE (Zero-Click RCE) elde edilmesi. | `9.5 / 10` |

---

## 🔬 4. Methodology & Implementation (Proje Mimarisi)

Bu depo, modern Frontend teknolojilerini ve Red/Blue Team felsefesini birleştiren tam teşekküllü bir PoC çalışmasıdır:

*   **Vite & React:** Hızlı derleme mimarisi ve komponent tabanlı yapı.
*   **Arayüz Tasarımı (Glassmorphism):** Tailwind CSS kullanılarak oluşturulan, donanım ivmeli arka plan bulanıklıkları ve siber güvenlik temalı (Cyberpunk) estetik.
*   **Modüler Veri Kaynağı:** Projedeki olay geçmişi ve veriler `src/lib/data/` altındaki `.json` dosyalarından modüler şekilde simüle edilebilir.
*   **Terminal Simülasyonu:** React bileşenleri ile dinamik akan hacker uçbirimi görünümü.

> **💡 Derin Araştırma Raporları:** Zafiyetin Root-Cause (Kök-Neden) analizleri, OOB (Out-of-Bounds) Write detayları ve teknik araştırma sonuçları için lütfen projeye dahil edilen `docs/research/` klasörüne göz atın.

---

## ⚔️ 5. Red vs Blue Team Simulation (Hacker Uçbirimi)

Proje arayüzüne ek olarak, `src/scripts/` dizininde, zafiyetin gerçek dünyada nasıl sömürüldüğünü ve bir tespit sistemi tarafından nasıl engellendiğini kanıtlayan kurgusal Python scriptleri mevcuttur.

![Terminal Demo](./public/assets/terminal_demo.gif)

*Figür 2: Red vs Blue Team Canlı Terminal Simülasyonu (Hareketli Demo)*

**Test etmek için:**
```bash
# 1. Aşama: Red Team Keşif (Recon) İşlemi
python3 src/scripts/01_recon_wasm.py

# 2. Aşama: Red Team Saldırı (Exploit) Simülasyonu
python3 src/scripts/02_exploit_integer_overflow.py --target "192.168.1.10"

# 3. Aşama: Blue Team Savunma (EDR/IDS) Simülasyonu
python3 src/scripts/03_defense_ids_wasm.py
```

---

## 🛠️ 6. Deployment (Arayüz Kurulumu)

Araştırma panelini ayağa kaldırmak için aşağıdaki adımları kullanabilirsiniz:

### Geliştirici Modu (NodeJS)
```bash
git clone https://github.com/niltuvba-dotcom/WebAssembly.git
cd WebAssembly
npm install
npm run dev
# localhost:5173 adresinden paneli görüntüleyin.
```

---

## 🛡️ 7. Conclusion & Mitigation (Sonuç ve Savunma)

Bu analiz sonucunda; tarayıcıların JIT derleyicilerindeki optimizasyon hatalarının, sanal ortam (Sandbox) kaçışlarına olanak sağladığı ve sistem seviyesinde komut çalıştırılabileceği kanıtlanmıştır. Tarayıcıların en güncel sürümlerde (örn: Chrome v133.x) tutulması, kurumsal ortamlarda JIT veya Wasm özelliklerinin katı politikalara (GPO) bağlanması ve EDR üzerinden process anormalliklerinin izlenmesi kritik önem taşımaktadır.

---

> **⚠️ Yasal Uyarı ve Etik Bildirim (Disclaimer)** <br>
> Bu depo ve içerisindeki simülasyonlar/analizler, siber güvenlik bilincini arttırmak, modern web teknolojilerinin analitik bir raporlama aracı olarak kullanımını kanıtlamak ve üniversite seviyesinde akademik araştırma yapmak amacıyla geliştirilmiştir. Kurgusal PoC verileri içerir. Kötüye kullanımı kesinlikle yasaktır.