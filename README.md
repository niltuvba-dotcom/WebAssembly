<div align="center">
  <a href="https://istinye.edu.tr">
    <img src="docs/assets/istinye-university-logo.webp" alt="İstinye Üniversitesi" width="180"/>
  </a>

  # WebAssembly Sandbox Escape RCE (CVE-2025-7733) Red vs Blue Simulation

  ![GitHub](https://img.shields.io/badge/GitHub-Private-red?style=flat-square&logo=github)
  ![Dil](https://img.shields.io/badge/Dil-React-blue?style=flat-square)
  ![Durum](https://img.shields.io/badge/Durum-Devam%20Ediyor-yellow?style=flat-square)
  ![Ders](https://img.shields.io/badge/Ders-BGT006-purple?style=flat-square)
</div>

### Danışman Bilgisi
| | |
| :--- | :--- |
| **Ad Soyad** | Keyvan Arasteh |
| **GitHub** | [@keyvanarasteh](https://github.com/keyvanarasteh) |
| **E-posta** | keyvan.arasteh@istinye.edu.tr |
| **LinkedIn** | [keyvanarasteh](https://linkedin.com/in/keyvanarasteh) |
| **Web Sitesi** | [qline.tech](https://qline.tech) |

### Öğrenci Bilgisi
| | |
| :--- | :--- |
| **Ad Soyad** | Nisa |
| **Öğrenci No** | 2520****1019 |

### Ders Bilgileri
| | |
| :--- | :--- |
| **Ders Adı** | Sızma Testi |
| **Ders Kodu** | BGT006 |
| **Kredi** | 3 AKTS |
| **Ön Koşullar** | Ağ Temelleri, Linux CLI, Web Güvenliği |
| **Zaman** | 2025-2026 Bahar |

---

## 📑 1. Abstract (Proje Özeti)

Modern tarayıcılarda yüksek performanslı uygulamalar çalıştırmayı sağlayan WebAssembly (Wasm), aynı zamanda kritik bir saldırı yüzeyi oluşturmaktadır. Bu akademik proje, Chrome ve Edge tarayıcılarındaki V8 motorunda ortaya çıkan kritik WebAssembly Sanal Ortam Güvenlik Açığının (CVE-2025-7733) çok boyutlu analizini simüle eder.

---

## 🎯 2. Zafiyet Değerlendirme Raporu (Vulnerability Assessment)
Değerlendirme belgeleri `docs/research/` dizininde sunulmuştur:

- [x] **Nessus/OpenVAS Tarama Raporları:** [01_OpenVAS_Scan_Report.md](./docs/research/01_OpenVAS_Scan_Report.md)
- [x] **Risk Matrisi ve Önceliklendirme:** [02_Risk_Matrix_and_Prioritization.md](./docs/research/02_Risk_Matrix_and_Prioritization.md)
- [x] **Düzeltme Önerileri (Remediation) Raporu:** [03_Remediation_Plan.md](./docs/research/03_Remediation_Plan.md)

---

## 🔬 3. Methodology & Implementation (Proje Mimarisi)
*   **Vite & React:** Hızlı derleme mimarisi ve komponent tabanlı yapı.
*   **Modüler Veri Kaynağı:** Projedeki olay geçmişi ve veriler `src/lib/data/` altındaki `.json` dosyalarından okunur.
*   **DevOps (Docker):** Uygulama `docker-compose` mimarisiyle konteynerize edilmiştir.

---

## ⚔️ 4. Red vs Blue Team Simulation
Projede zafiyetin gerçek dünyada nasıl sömürüldüğünü ve bir tespit sistemi tarafından nasıl engellendiğini kanıtlayan Python scriptleri mevcuttur: `src/scripts/`

---

## 🛠️ 5. Deployment (Arayüz Kurulumu)
Araştırma panelini ayağa kaldırmak için Docker kullanabilirsiniz:

```bash
docker-compose up -d --build
```

---

> **⚠️ Yasal Uyarı ve Etik Bildirim (Disclaimer)** <br>
> Bu depo ve içerisindeki simülasyonlar/analizler akademik araştırma amacıyla geliştirilmiştir. Kötüye kullanımı kesinlikle yasaktır.