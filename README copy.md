# Automation-Web-Cypress - Test Automation Documentation

## 📋 Project Overview / Gambaran Proyek

Automation-Web-Cypress adalah framework automation testing untuk **Web App** menggunakan **Cypress** (v14.1.0). Project ini mengotomatiskan pengujian berbagai fitur dan halaman website untuk memastikan kualitas dan keandalan sistem.

---

## 🎯 Purpose / Tujuan Repository

### 🇮🇩 Bahasa Indonesia
Repository ini dibuat dengan tujuan utama untuk:
- **Mengotomatiskan pengujian** Web App secara end-to-end untuk memastikan semua fitur berfungsi dengan baik
- **Meningkatkan kualitas software** dengan mendeteksi bug lebih awal dalam siklus pengembangan
- **Mempercepat proses testing** yang sebelumnya dilakukan secara manual menjadi otomatis
- **Menjaga konsistensi** pengujian setiap kali ada perubahan pada codebase
- **Mendokumentasikan test cases** secara terstruktur dan mudah dipahami
- **Mendukung CI/CD pipeline** untuk automated testing pada setiap deployment

### 🇺🇸 English
This repository is created with the main purpose to:
- **Automate end-to-end testing** of Web App to ensure all features work properly
- **Improve software quality** by detecting bugs early in the development cycle
- **Accelerate testing process** that was previously done manually to become automated
- **Maintain testing consistency** every time there are changes in the codebase
- **Document test cases** in a structured and easy-to-understand manner
- **Support CI/CD pipeline** for automated testing on every deployment

---

## 🧪 Types of Testing / Jenis Testing yang Dilakukan

### 🇮🇩 Bahasa Indonesia
1. **End-to-End (E2E) Testing**
   - Menguji alur pengguna lengkap dari awal hingga akhir pada website
   - Memvalidasi integrasi antar komponen dan halaman

2. **Functional Testing**
   - Menguji setiap fungsi dan fitur website sesuai dengan spesifikasi
   - Memvalidasi input, output, dan perilaku sistem

3. **UI/UX Testing**
   - Menguji tampilan antarmuka pengguna dan pengalaman pengguna
   - Memvalidasi elemen visual, navigasi, dan responsivitas

4. **Regression Testing**
   - Memastikan perubahan kode tidak mempengaruhi fungsionalitas yang sudah ada
   - Dijalankan setiap kali ada update atau fix pada codebase

5. **Data-Driven Testing**
   - Pengujian berbasis data menggunakan file Excel
   - Memvalidasi berbagai skenario dengan data yang berbeda-beda

6. **Smoke Testing**
   - Pengujian awal untuk memvalidasi build stabil sebelum pengujian lebih lanjut
   - Memastikan fungsi-fungsi utama berjalan dengan baik

### 🇺🇸 English
1. **End-to-End (E2E) Testing**
   - Testing complete user flows from start to end on the website
   - Validating integration between components and pages

2. **Functional Testing**
   - Testing each function and feature of the website according to specifications
   - Validating input, output, and system behavior

3. **UI/UX Testing**
   - Testing user interface and user experience
   - Validating visual elements, navigation, and responsiveness

4. **Regression Testing**
   - Ensuring code changes don't affect existing functionality
   - Run every time there's an update or fix in the codebase

5. **Data-Driven Testing**
   - Data-based testing using Excel files
   - Validating various scenarios with different data sets

6. **Smoke Testing**
   - Initial testing to validate stable builds before further testing
   - Ensuring main functions work properly

---

## 🛠️ Tools & Technologies

### 🇮🇩 Bahasa Indonesia

| Kategori | Teknologi | Versi | Deskripsi |
|-----------|-----------|-------|-----------|
| **Test Framework** | Cypress | v14.1.0 | Framework testing end-to-end utama |
| **Runtime Environment** | Node.js | v16+ | Environment untuk menjalankan Cypress |
| **Package Manager** | npm | v8+ | Manajemen dependency dan package |
| **Reporting** | cypress-mochawesome-reporter | v3.8.2 | Plugin reporter untuk format HTML |
| **Reporting** | mochawesome | v7.1.3 | Library untuk generate laporan |
| **Data Processing** | xlsx | v0.18.5 | Library untuk membaca file Excel |
| **Browser** | Electron | - | Browser default Cypress untuk testing |
| **Browser** | Chrome/Chromium | - | Browser alternatif untuk testing |
| **OS Support** | macOS | - | Sistem operasi yang diuji |
| **OS Support** | Windows | - | Sistem operasi yang diuji |
| **OS Support** | Linux | - | Sistem operasi yang diuji |

### 🇺🇸 English

| Category | Technology | Version | Description |
|----------|------------|---------|-------------|
| **Test Framework** | Cypress | v14.1.0 | Main end-to-end testing framework |
| **Runtime Environment** | Node.js | v16+ | Environment to run Cypress |
| **Package Manager** | npm | v8+ | Dependency and package management |
| **Reporting** | cypress-mochawesome-reporter | v3.8.2 | Reporter plugin for HTML format |
| **Reporting** | mochawesome | v7.1.3 | Library for generating reports |
| **Data Processing** | xlsx | v0.18.5 | Library for reading Excel files |
| **Browser** | Electron | - | Default Cypress browser for testing |
| **Browser** | Chrome/Chromium | - | Alternative browser for testing |
| **OS Support** | macOS | - | Tested operating system |
| **OS Support** | Windows | - | Tested operating system |
| **OS Support** | Linux | - | Tested operating system |

---

## 🏗️ Project Structure

```
Automation-Web-Cypress--Web/
├── cypress/
│   ├── e2e/                          # Test files (End-to-End scenarios)
│   │   ├── landingpage.cy.js         # Landing page tests
│   │   ├── produk.cy.js              # Product page tests
│   │   ├── promo.cy.js               # Promo/Promotion tests
│   │   ├── perusahaan-*.cy.js        # Company information tests
│   │   ├── info-berita.cy.js         # News/Berita tests
│   │   ├── info-insights.cy.js       # Insights tests
│   │   ├── info-pengumuman.cy.js     # Announcement tests
│   │   └── template.cy.js            # Template/Demo tests
│   ├── support/
│   │   ├── e2e.js                    # E2E setup
│   │   ├── helper.js                 # Helper functions
│   │   ├── commands/                 # Custom Cypress commands
│   │   │   ├── index.js              # Command index
│   │   │   ├── *commands.js          # Feature-specific commands
│   │   │   └── ...
│   │   ├── constants/                # Test constants
│   │   ├── pages/                    # Page objects
│   │   │   ├── produkPages.js
│   │   │   └── templatePages.js
│   │   └── fixtures/                 # Test data files
│   │       └── uploads/              # Uploaded files
│   ├── selectors/                    # CSS/XPath selectors
│   │   ├── landingpage.selectors.js
│   │   ├── perusahaan.selectors.js
│   │   ├── product.selectors.js
│   │   └── ...
│   └── fixtures/
│       └── *.xlsx                    # Excel test data files
├── cypress.config.js                 # Cypress configuration
├── package.json                      # NPM dependencies
├── requirements.txt                  # Python dependencies (if any)
└── README.md                         # This file
```

---

## 🎯 Features & Functionalities by Test File

| Test File | Feature | Functionality | Page URL Path |
|-----------|---------|--------------|---------------|
| **landingpage.cy.js** | Landing Page | Akses dan validasi landing page utama  | `/` |
| **produk.cy.js** | Products | Test berbagai produk  (Saku , Saku Bujet, Saku Pintar, dll) | `/products` |
| **promo.cy.js** | Promotions | Test halaman promosi/penawaran spesial | `/promo` |
| **perusahaan-tentangkami.cy.js** | Corporate - About Us | Informasi tentang perusahaan  | `/corporate/about` |
| **perusahaan-strukturperusahaan.cy.js** | Corporate - Structure | Struktur organisasi perusahaan | `/corporate/structure` |
| **perusahaan-hubunganinvestor.cy.js** | Corporate - Investor Relations | Info saham, laporan keuangan, presentasi, berita investor | `/corporate/investor-relations` |
| **perusahaan-tatakelola.cy.js** | Corporate - Good Governance | Tata kelola perusahaan dan kebijakan | `/corporate/governance` |
| **perusahaan-karir.cy.js** | Corporate - Career | Lowongan kerja dan rekrutmen | `/corporate/career` |
| **perusahaan-asetmedia.cy.js** | Corporate - Media Assets | Aset media perusahaan (logo, foto, dll) | `/corporate/media` |
| **perusahaan-whistleblowing.cy.js** | Corporate - Whistleblowing | Sistem pelaporan pelanggaran | `/corporate/whistleblowing` |
| **info-berita.cy.js** | Info - News | Berita dan artikel terkini  | `/info/news` |
| **info-insights.cy.js** | Info - Insights | Insight industri dan analisis pasar | `/info/insights` |
| **info-pengumuman.cy.js** | Info - Announcements | Pengumuman resmi  | `/info/announcements` |
| **template.cy.js** | Template | Demo template test cases | Demo |

---

## 📊 Test Scenarios (Skenario Test Cases)

### 1️⃣ Landing Page Tests

| TC ID | Test Name | Scenario | Expected Result | Status |
|-------|-----------|----------|-----------------|--------|
| TC001 | Landing Page Access | Akses halaman utama  | Halaman landing page terbuka dengan benar | ✅ Positive |

---

### 2️⃣ Product Tests

| TC ID | Product Name | Category | Scenario | Expected Result | Status |
|-------|-------------|----------|----------|-----------------|--------|
| TC001 | Saku  | Simpanan | Klik produk Saku  dan buka detail page | Detail halaman produk menampilkan informasi lengkap | ✅ Positive |
| TC002 | Saku Bujet | Tabungan | Klik produk Saku Bujet dan buka detail page | Detail halaman produk menampilkan informasi lengkap | ✅ Positive |
| TC003 | Saku Pintar | Tabungan | Klik produk Saku Pintar dan buka detail page | Detail halaman produk menampilkan informasi lengkap | ✅ Positive |
| TC004 | Saku Jaga | Tabungan | Klik produk Saku Jaga dan buka detail page | Detail halaman produk menampilkan informasi lengkap | ✅ Positive |
| TC005 | Saku Bareng | Tabungan | Klik produk Saku Bareng dan buka detail page | Detail halaman produk menampilkan informasi lengkap | ✅ Positive |

---

### 3️⃣ Investor Relations Tests

| TC ID | Category | Tab | Year | Month | Quarter | Scenario | Expected Result | Status |
|-------|----------|-----|------|-------|---------|----------|-----------------|--------|
| TC001 | Informasi Saham | Kinerja Saham | - | - | - | Buka tab Kinerja Saham | Menampilkan data performa saham | ✅ Positive |
| TC002 | Informasi Saham | Informasi Dividen | 2019 | - | - | Filter tahun 2019 | Data dividen tahun 2019 tampil | ✅ Positive |
| TC003 | Laporan Keuangan | Laporan Tahunan | 2025 | Maret | Triwulan 1 | Filter dengan year, month, quarter | Laporan sesuai filter tampil | ✅ Positive |
| TC004 | Laporan Keuangan | Laporan Publikasi | 2025 | Februari | Triwulan 2 | Filter dengan year, month, quarter | Laporan sesuai filter tampil | ✅ Positive |
| TC005 | Laporan Keuangan | Laporan Keuangan | - | - | - | Buka tab Laporan Keuangan | Menampilkan laporan keuangan utama | ✅ Positive |
| TC006 | Laporan Keuangan | Informasi SBDK | 2024 | - | - | Filter tahun 2024 | Informasi SBDK tahun 2024 tampil | ✅ Positive |
| TC007 | Laporan Keuangan | Rasio Pengungkit | 2024 | - | - | Filter tahun 2024 | Rasio pengungkit tahun 2024 tampil | ✅ Positive |
| TC008 | Laporan Keuangan | Rasio Pendanaan Stabil | - | - | - | Buka tab Rasio NSFR | Menampilkan rasio NSFR | ✅ Positive |
| TC009 | Laporan Keuangan | Rasio Likuiditas (LCR) | 2024 | - | Triwulan 1 | Filter dengan year & quarter | Data LCR sesuai filter tampil | ✅ Positive |
| TC010 | Laporan Keuangan | Pengungkapan Risiko | 2021 | - | - | Filter tahun 2021 | Data risiko tahun 2021 tampil | ✅ Positive |
| TC011 | Laporan Keuangan | Pengungk. Risiko & Permodalan | - | - | - | Buka tab Risiko & Permodalan | Menampilkan info risiko dan permodalan | ✅ Positive |
| TC012 | Laporan Keuangan | Recovery Plan | - | - | - | Buka tab Recovery Plan | Menampilkan recovery plan | ✅ Positive |
| TC013 | Presentasi Perusahaan | - | 2025 | - | Triwulan 1 | Filter presentasi dengan year & quarter | Presentasi sesuai filter tampil | ✅ Positive |
| TC014 | Berita Investor | Aksi Perusahaan | 2025 | Januari | - | Filter dengan year & month | Aksi perusahaan Jan 2025 tampil | ✅ Positive |
| TC015 | Berita Investor | RUPS | 2024 | Januari | - | Filter dengan year & month | RUPS Januari 2024 tampil | ✅ Positive |
| TC016 | Berita Investor | Press Release | 2024 | Januari | - | Filter dengan year & month | Press release Jan 2024 tampil | ✅ Positive |
| TC017 | Berita Investor | IR Newsletter | 2024 | Januari | - | Filter dengan year & month | Newsletter Jan 2024 tampil | ✅ Positive |

---

### 4️⃣ News/Berita Tests

| TC ID | Berita Title | Category | Date | Scenario | Expected Result | Status |
|-------|-------------|----------|------|----------|-----------------|--------|
| TC001 | Ribuan Pelari Memeriahkan  Run Surabaya | Kerjasama | 2025-10-27 | Buka detail berita dan validasi | Halaman detail berita tampil dengan konten lengkap | ✅ Positive |
| TC002 | Kinerja  Tumbuh Positif di KW III | Kegiatan Perusahaan | - | Buka detail berita dan validasi | Halaman detail berita tampil dengan konten lengkap | ✅ Positive |
| TC003 |  Perkuat Komitmen ESG | CSR | 2025-10-03 | Buka detail berita dan validasi | Halaman detail berita tampil dengan konten lengkap | ✅ Positive |
| TC004 |  Hadirkan Fitur "Uang Saku" | Produk | - | Buka detail berita dan validasi | Halaman detail berita tampil dengan konten lengkap | ✅ Positive |

---

### 5️⃣ Other Features

| Test File | TC ID | Feature | Scenario | Expected Result | Status |
|-----------|-------|---------|----------|-----------------|--------|
| **promo.cy.js** | TC001+ | Promotions | Akses halaman promosi dan fitur | Halaman promosi tampil dengan penawaran terkini | ✅ Positive |
| **info-insights.cy.js** | TC001+ | Market Insights | Akses halaman insights industri | Halaman insights tampil dengan analisis terkini | ✅ Positive |
| **info-pengumuman.cy.js** | TC001+ | Announcements | Akses pengumuman resmi | Halaman pengumuman tampil dengan info terbaru | ✅ Positive |
| **perusahaan-tentangkami.cy.js** | TC001+ | About Company | Baca info tentang perusahaan | Halaman about tampil dengan profil lengkap | ✅ Positive |
| **perusahaan-karir.cy.js** | TC001+ | Career | Lihat lowongan kerja | Halaman karir tampil dengan daftar lowongan | ✅ Positive |

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js v16+ (tested with v22.17.0)
- npm v8+
- macOS, Windows, atau Linux

### Installation Steps

```bash
# 1. Clone repository
git clone git@github.com-/Automation-Web.git
cd Automation-Web-Cypress--Web

# 2. Install dependencies
npm install

# 3. Verify installation
npx cypress --version
```

---

## 🚀 Running Tests

### Available NPM Scripts

```bash
# Open Cypress UI (interactive mode)
npm run test:debug

# Open Cypress UI dengan environment DEV
npm run test:debug:dev

# Open Cypress UI dengan environment STAGING
npm run test:debug:staging

# Run all tests in headless mode
npm run test:report

# Run all tests dengan environment DEV
npm run test:report:dev

# Run all tests dengan environment STAGING
npm run test:report:staging

# Run specific test spec file
npm run test:report --spec "cypress/e2e/produk.cy.js"

# Open dengan Electron browser
npm run test:electron
```

### Example Commands

```bash
# Development environment
npm run test:debug:dev

# Staging environment
npm run test:debug:staging

# Production (default baseUrl)
npm run test:debug
```

---

## 🔧 Configuration

### cypress.config.js

Key configurations:
- **Default Command Timeout:** 25,000ms
- **Memory Management:** Experimental memory management enabled
- **Studio Mode:** Experimental studio enabled for test recording
- **Report Generator:** Using cypress-mochawesome-reporter

### Environment Variables

Available environments (set via `--env ENV=<name>`):
- `dev` - Development environment
- `staging` - Staging environment
- Default - Production environment

Base URLs dapat dikonfigurasi di `cypress.config.js`:
```javascript
env: {
  DEV_URL: "https://dev-url.com",
  STAGING_URL: "https://staging-url.com"
}
```

---

## 📁 Key Support Files

### Commands Structure
```
cypress/support/commands/
├── index.js                          # Main commands export
├── landingpage.commands.js           # Landing page custom commands
├── produk.commands.js                # Product page commands
├── perusahaan-hubunganinvestor.commands.js  # Investor relations commands
├── info-berita.commands.js           # News commands
└── ... (feature-specific commands)
```

### Selectors Structure
```
cypress/selectors/
├── landingpage.selectors.js          # Landing page selectors
├── perusahaan.selectors.js           # Company page selectors
├── product.selectors.js              # Product selectors
├── promo.selectors.js                # Promo selectors
└── ... (feature-specific selectors)
```

### Fixtures (Test Data)
```
cypress/fixtures/
├── data-template.xlsx                # Template test data
├── *.xlsx                            # Other Excel test data
└── uploads/                          # Files for upload testing
```

---

## 📝 Test Data Management

### Excel Integration
Tests use Excel files for test data (located in `cypress/fixtures/`):

```javascript
// Reading Excel data
cy.readExcelFile({
  filePath: "data-template.xlsx",
  sheetNm: "Sheet1",           // Optional: specific sheet
  isArray2D: false             // Optional: return as 2D array
}).then((data) => {
  // Use data in test
});
```

### Available Dependencies
- **cypress:** ^14.1.0 - Main testing framework
- **cypress-mochawesome-reporter:** ^3.8.2 - Test reporting
- **mochawesome:** ^7.1.3 - Report generation
- **xlsx:** ^0.18.5 - Excel file handling

---

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Check if port 3000 is in use and free it
   lsof -i :3000
   kill -9 <PID>
   ```

2. **Dependencies Not Installed**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   npm install
   ```

3. **Permission Denied Issues (macOS)**
   ```bash
   # Fix npm cache permissions
   sudo chown -R $(whoami) ~/.npm
   ```

4. **Timeout Issues**
   - Increase `defaultCommandTimeout` in `cypress.config.js`
   - Check internet connection
   - Verify test environment is running

---

## 📊 Test Reports

After running tests, reports are generated:
- HTML report: `cypress/results/reports/`
- JSON results: `cypress/results/`

### View Report
```bash
# Mochawesome report can be viewed in HTML format
# Check the generated HTML file in results directory
```

---

## 🔐 Security Notes

- ⚠️ Do not commit credentials or sensitive data
- Use environment variables for sensitive information
- Keep base URLs in config, not in test files

---

## 👥 Contributors  Automation Team

---

## 📅 Change Log

| Date | Version | Changes |
|------|---------|---------|
| 2025-02-06 | 1.0.0 | Comprehensive documentation with test scenarios and features |

---

## 📞 Support & Contact

For issues, questions, or suggestions:
- Check the test files for examples
- Review cypress.config.js for configuration
- Contact automation team lead

---

## 📄 License

ISC License (see LICENSE file if present)

---

## ✨ Best Practices

1. **Test Independence:** Each test should be independent and not rely on others
2. **Clear Naming:** Use descriptive test case names (TC format)
3. **Data Separation:** Keep test data in Excel files, not hardcoded
4. **Selectors:** Centralize selectors in dedicated selector files
5. **Commands:** Create reusable custom commands for common actions
6. **Error Handling:** Use proper assertions and wait mechanisms
7. **Maintenance:** Update selectors when UI changes

---

**Last Updated:** February 6, 2025  
**Maintained By:**  Automation Team
