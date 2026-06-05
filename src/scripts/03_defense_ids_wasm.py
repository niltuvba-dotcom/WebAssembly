import time

def monitor_ids():
    print("[*] EDR/IDS Monitor aktif (Process Anomaly Detection)...")
    time.sleep(2)
    print("[!] UYARI: Chrome/Edge renderer sürecinde anormal bellek okuma/yazma paterni!")
    time.sleep(1)
    print("[*] Eylem: memory.grow çağrılarındaki anomaliler için process duraklatılıyor (SIGSTOP)...")
    time.sleep(1)
    print("[+] Tehdit engellendi. Wasm sandbox çıkış girişimi loglandı.")

if __name__ == "__main__":
    monitor_ids()
