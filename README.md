# Deploy ke GitHub Pages

Frontend dibangun sebagai halaman statis dari `Index.html`. Data dan berkas tetap disimpan oleh Google Apps Script di Google Sheets dan Google Drive.

## 1. Siapkan Apps Script

1. Buka proyek Apps Script yang terhubung ke spreadsheet database ini.
2. Salin perubahan `Code.gs` ke proyek tersebut dan simpan.
3. Jalankan `setupDatabase` dari Apps Script jika database belum pernah disiapkan.
4. Pilih **Deploy > New deployment > Web app**.
5. Pilih eksekusi sebagai akun pemilik deployment dan akses **Anyone**. Deployment anonim diperlukan agar halaman GitHub Pages dapat mengirim permintaan lintas domain tanpa login.
6. Deploy, lalu salin URL Web App yang berakhiran `/exec`.

**Peringatan akses publik:** deployment `Anyone` tidak meminta login. Siapa pun yang mengetahui URL GitHub Pages dapat membaca dan mengubah data siswa/staf serta berkas. Jangan gunakan konfigurasi ini untuk data nyata kecuali akses publik memang disetujui dan sesuai kebijakan sekolah. GitHub Pages juga bersifat publik.

## 2. Atur GitHub Pages

1. Push proyek ke branch `main` atau `master`.
2. Di repository GitHub, buka **Settings > Secrets and variables > Actions > Variables**.
3. Tambahkan repository variable bernama `GAS_WEB_APP_URL`, dengan nilai URL Web App `/exec` dari langkah sebelumnya.
4. Buka **Settings > Pages**, pilih **GitHub Actions** sebagai build and deployment source.
5. Jalankan workflow **Deploy GitHub Pages** pada tab **Actions**, atau push perubahan ke branch `main`/`master`.

Workflow membuat `dist/index.html` dan menerbitkannya. `dist` tidak perlu di-commit.

## Build lokal

Di PowerShell:

```powershell
$env:GAS_WEB_APP_URL = "https://script.google.com/macros/s/ID_DEPLOYMENT/exec"
node scripts/build-pages.mjs
```

Hasilnya berada di `dist/index.html`. Jika kode Apps Script berubah, perbarui deployment Web App melalui **Deploy > Manage deployments > Edit > New version**.
