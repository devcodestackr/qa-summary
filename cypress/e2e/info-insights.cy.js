describe.only('TC001 - Info Insights  - Positif - Kunjungi detail insights Apa itu Modal Kerja? Simak Arti & Contohnya di Sini!', () => {
  context(`Akses halaman detail pada card insights Apa itu Modal Kerja? Simak Arti & Contohnya di Sini!`, () => {

    it('Open Menu Info - Insights', () => {
      cy.OpenInfoInsightsPage()
    });

    it('Lihat Detail Insights dan Validasi Halaman', () => {
      const insightsName = 'Apa itu Modal Kerja? Simak Arti & Contohnya di Sini!';
      const insightsDate = '2025-07-07';
      const insightsData = { 
        title: "Apa Sih Modal Kerja Itu?",
        artikel: "Modal kerja adalah selisih antara aset lancar (uang tunai, piutang, persediaan) dan utang lancar (kewajiban jangka pendek seperti utang dagang atau gaji karyawan). Ini menunjukkan kemampuan bisnis untuk memenuhi kewajiban operasional dalam waktu dekat."
      };
        cy.ViewInsights(insightsName, insightsDate, insightsData)
    });

  });
});

describe.only('TC002 - Info Insights  - Positif - Kunjungi detail insights Cara Mudah Bayar Listrik Hanya Dengan Gadget!', () => {
  context(`Akses halaman detail pada card insights Cara Mudah Bayar Listrik Hanya Dengan Gadget!`, () => {

    it('Open Menu Info - Insights', () => {
      cy.OpenInfoInsightsPage()
    });

    it('Lihat Detail Insights dan Validasi Halaman', () => {
      const insightsName = 'Cara Mudah Bayar Listrik Hanya Dengan Gadget!';
      const insightsDate = '2025-07-07';
      const insightsData = { 
        title: "Siapkan Ini Dulu Sebelum Bayar Listrik!",
        artikel: "Agar proses pembayaran berjalan lancar, pastikan Anda sudah menyiapkan hal-hal berikut:"
      };
        cy.ViewInsights(insightsName, insightsDate, insightsData)
    });

  });
});

describe.only('TC003 - Info Insights  - Positif - Kunjungi detail insights Langkah Mudah untuk Top Up E-Wallet dengan Bank Raya!', () => {
  context(`Akses halaman detail pada card insights Langkah Mudah untuk Top Up E-Wallet dengan Bank Raya!`, () => {

    it('Open Menu Info - Insights', () => {
      cy.OpenInfoInsightsPage()
    });

    it('Lihat Detail Insights dan Validasi Halaman', () => {
      const insightsName = 'Langkah Mudah untuk Top Up E-Wallet dengan Bank Raya!';
      const insightsDate = '2025-07-07';
      const insightsData = { 
        title: "Kenapa Banyak Pengguna E-Wallet Saat Ini?",
        artikel: "Praktis dan Cepat. Transaksi jadi jauh lebih simpel tanpa perlu bawa uang tunai. Cukup buka aplikasi e-wallet di ponsel, scan QR code, dan selesai! Tidak heran kalau e-wallet kini jadi pilihan utama untuk belanja, bayar tagihan, hingga beli makanan."
      };
        cy.ViewInsights(insightsName, insightsDate, insightsData)
    });

  });
});
