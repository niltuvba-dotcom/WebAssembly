# Proje Yol Haritası (Roadmap)

Felsefe: *"Önce anla, sonra kodla." Sorunu küçük, sıralı bölümlere böl. Bir dedektif gibi düşün: gözlemle, ham veriyi çevir, desenleri tespit et, raporla.*

## Faz 0: Yazmadan Önce Anla
- [x] Hedef zafiyetin (CVE-2025-7733) literatür taramasının yapılması.
- [x] V8 Engine ve TurboFan mekanizmalarının incelenmesi.
- [x] Integer Overflow ve Out-of-Bounds Write vektörlerinin kavranması.

## Aşama 1: Araştırma ve Keşif (→ docs/research/)
- [x] Nessus/OpenVAS varsayımsal tarama bulgularının derlenmesi (`01_OpenVAS_Scan_Report.md`).
- [x] Risk matrisinin CVSS 9.8'e göre oluşturulması (`02_Risk_Matrix_and_Prioritization.md`).
- [x] Remediation (Düzeltme) adımlarının belirlenmesi (`03_Remediation_Plan.md`).

## Faz 2: Ortam Kurulumu
- [x] Vite React Frontend iskeletinin oluşturulması.
- [x] Red Team / Blue Team simülasyonları için Python betiklerinin hazırlanması.
- [x] `Dockerfile` ve `docker-compose.yml` kullanılarak ortam izolasyonunun sağlanması.

## Aşama 3: Uygulama
1. UI Mockup ve bileşen tasarımı (Glassmorphism).
2. Yönetici Özeti (Executive Summary) modülünün kodlanması.
3. Kök-Neden Analizi (Root Cause) modülünün kodlanması.
4. Red Team Terminal simülasyonunun entegrasyonu.
5. Blue Team IDS/IPS uyarı arayüzünün entegrasyonu.
6. JSON tabanlı statik veri altyapısının (`src/lib/data`) entegrasyonu.

## Faz 4: Test ve Raporlama
- [x] Arayüzdeki animasyon ve responsive durumların test edilmesi.
- [x] Docker build işlemlerinin hatasız çalıştığının doğrulanması.
- [x] Tüm modüller için `.md` dokümantasyonlarının tamamlanması (`docs/modules/`).

## Faz 5: Teslim Kontrol Listesi
- [x] README.md zorunlu şablona uyumlu mu?
- [x] ROADMAP.md zorunlu fazları içeriyor mu?
- [x] Dockerfile, docker-compose.yml, .env.example eksiksiz mi?
- [x] `docs/research/`, `docs/modules/`, `docs/references/` klasörleri mevcut mu?
- [ ] Danışman Hoca (keyvanarasteh) Github'da Collaborator olarak eklendi mi?
