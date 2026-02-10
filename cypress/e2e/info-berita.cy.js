describe('TC001 - Info Berita  - Positif - Kunjungi detail berita Ribuan Pelari Memeriahkan Raya Run Surabaya', () => {
  context(`Akses halaman detail pada card berita Ribuan Pelari Memeriahkan Raya Run Surabaya`, () => {

    it('Open Menu Info - Berita', () => {
      cy.OpenInfoBeritaPage()
    });

    it('Lihat Detail Berita dan Validasi Halaman', () => {
      const beritaName = 'Ribuan Pelari Memeriahkan Raya Run Surabaya';
      const tabBeritaCategory = 'Kerjasama';
      const beritaDate = '2025-10-27';
        cy.ViewBerita(beritaName, tabBeritaCategory, beritaDate)
    });

  });
});

describe('TC002 - Info Berita  - Positif - Kunjungi detail berita Kinerja Bank Raya Tumbuh Positif di Kuartal III, Semakin Optimis Menuju Kinerja Berkelanjutan', () => {
  context(`Akses halaman detail pada card berita Kinerja Bank Raya Tumbuh Positif di Kuartal III, Semakin Optimis Menuju Kinerja Berkelanjutan`, () => {

    it('Open Menu Info - Berita', () => {
      cy.OpenInfoBeritaPage()
    });

    it('Lihat Detail Berita dan Validasi Halaman', () => {
      const beritaName = 'Kinerja Bank Raya Tumbuh Positif di Kuartal III, Semakin Optimis Menuju Kinerja Berkelanjutan';
      const tabBeritaCategory = 'Kegiatan Perusahaan';
      const beritaDate = '';
        cy.ViewBerita(beritaName, tabBeritaCategory, beritaDate)
    });

  });
});

describe('TC003 - Info Berita  - Positif - Kunjungi detail berita Bank Raya Semakin Perkuat Komitmen Implementasi Ekosistem Bisnis Berkelanjutan Berbasis ESG', () => {
  context(`Akses halaman detail pada card berita Bank Raya Semakin Perkuat Komitmen Implementasi Ekosistem Bisnis Berkelanjutan Berbasis ESG`, () => {

    it('Open Menu Info - Berita', () => {
      cy.OpenInfoBeritaPage()
    });

    it('Lihat Detail Berita dan Validasi Halaman', () => {
      const beritaName = 'Bank Raya Semakin Perkuat Komitmen Implementasi Ekosistem Bisnis Berkelanjutan Berbasis ESG';
      const tabBeritaCategory = 'CSR';
      const beritaDate = '2025-10-03';
        cy.ViewBerita(beritaName, tabBeritaCategory, beritaDate)
    });

  });
});

describe('TC004 - Info Berita  - Positif - Kunjungi detail berita Bank Raya Hadirkan Fitur “Uang Saku” Dukung Masyarakat Bijak Kelola Keuangan Sejak Dini', () => {
  context(`Akses halaman detail pada card berita Bank Raya Hadirkan Fitur “Uang Saku” Dukung Masyarakat Bijak Kelola Keuangan Sejak Dini`, () => {

    it('Open Menu Info - Berita', () => {
      cy.OpenInfoBeritaPage()
    });

    it('Lihat Detail Berita dan Validasi Halaman', () => {
      const beritaName = 'Bank Raya Hadirkan Fitur “Uang Saku” Dukung Masyarakat Bijak Kelola Keuangan Sejak Dini';
      const tabBeritaCategory = 'Produk';
      const beritaDate = '';
        cy.ViewBerita(beritaName, tabBeritaCategory, beritaDate)
    });

  });
});

