# 📊 Risk Matrisi ve Önceliklendirme (Prioritization)

Zafiyet taraması (OpenVAS) sonucunda elde edilen bulgular, organizasyon üzerindeki potansiyel etkilerine ve sömürülme kolaylıklarına göre önceliklendirilmiştir.

## 1. CVSS v3.1 Skorlaması ve Eşleştirme

| Bulgu / Zafiyet | CVE Kodu | Saldırı Vektörü (AV) | Karmaşıklık (AC) | Etki (Impact) | CVSS Skoru | Severity |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| Wasm Sandbox Escape | **CVE-2025-7733** | Network (N) | Low (L) | High (C:H/I:H/A:H) | **9.8** | **Kritik** 🔴 |
| Eksik JIT Hardening | N/A | Local (L) | Low (L) | Low (C:L/I:L/A:N) | **5.3** | **Orta** 🟠 |
| Güvensiz Çerezler | N/A | Network (N) | Low (L) | Low (C:L/I:N/A:N) | **2.4** | **Düşük** 🟡 |

## 2. Risk Matrisi (5x5 Analizi)

Bulguların Olabilirlik (Likelihood) ve Etki (Impact) açısından klasik 5x5 matrisine yerleştirilmesi:

| Olasılık \ Etki | Çok Düşük (1) | Düşük (2) | Orta (3) | Yüksek (4) | Çok Yüksek (5) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Neredeyse Kesin (5)** | | | | | **CVE-2025-7733** (P1) |
| **Yüksek Olası (4)** | | | JIT Hardening (P2) | | |
| **Orta Olası (3)** | | Güvensiz Çerez (P3)| | | |
| **Düşük Olası (2)** | | | | | |
| **Çok Düşük (1)** | | | | | |

## 3. Önceliklendirme Sınıfları (Remediation Priority)

Risk matrisine göre yamaların uygulama sıralaması şu şekildedir:

1. **P1 (Öncelik 1 - Acil Müdahale):** `CVE-2025-7733`
   - *Neden:* Sıfır tıklamalı (Zero-Click) ağ üzerinden doğrudan sistem seviyesinde komut (RCE) çalıştırılabilmesine olanak tanır.
   - *SLA Süresi:* 24 Saat.
2. **P2 (Öncelik 2 - Orta Vadeli):** `JIT Hardening Eksikliği`
   - *Neden:* Derinlemesine savunma (Defense-in-depth) stratejisini zayıflatır.
   - *SLA Süresi:* 30 Gün.
3. **P3 (Öncelik 3 - Düşük Vadeli):** `Güvensiz Çerezler`
   - *Neden:* Sadece oturum çalınması gibi spesifik XSS durumlarında risk taşır.
   - *SLA Süresi:* 90 Gün.
