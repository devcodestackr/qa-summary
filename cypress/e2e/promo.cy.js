describe('TC001 - Promo  - Positif - Kunjungi Detail Promo Traveling Bareng Bestie', () => {
  context(`Akses halaman detail pada card promo Traveling Bareng Bestie`, () => {

    it('Open Menu Promo', () => {
      cy.OpenPromoPage()
    });

    it('Lihat Detail Promo dan Validasi Halaman', () => {
      const promoName = 'Traveling Bareng Bestie';
      const promoDate = '31 Maret 2026';
        cy.ViewPromo(promoName, promoDate)
    });

  });
});

describe('TC002 - Promo - Kunjungi Detail Promo Pesta Raya 2025', () => {
  context(`Akses halaman detail pada card promo Pesta Raya 2025`, () => {

    it('Open Menu Promo', () => {
      cy.OpenPromoPage()
    });

    it('Lihat Detail Promo dan Validasi Halaman', () => {
      const promoName = 'Pesta Raya 2025';
      const promoDate = '8 Agustus 2025 - 31 Januari 2026';
        cy.ViewPromo(promoName, promoDate)
    });

  });
});

describe('TC003 - Promo - Positif - Kunjungi Detail Promo Jalan Bareng Raya & Green SM', () => {
  context(`Akses halaman detail pada card promo Jalan Bareng Raya & Green SM`, () => {

    it('Open Menu Promo', () => {
      cy.OpenPromoPage()
    });

    it('Lihat Detail Promo dan Validasi Halaman', () => {
      const promoName = 'Jalan Bareng Raya & Green SM';
      const promoDate = '1 Agustus 2025 - 31 Januari 2026';
        cy.ViewPromo(promoName, promoDate)
    });

  });
});

describe('TC004 - Promo - Positif - Promo Watsons Cashback Hingga 20% Dengan QRIS Bank Raya!', () => {
  context(`Akses halaman detail pada card promo Promo Watsons Cashback Hingga 20% Dengan QRIS Bank Raya!`, () => {

    it('Open Menu Promo', () => {
      cy.OpenPromoPage()
    });

    it('Lihat Detail Promo dan Validasi Halaman', () => {
      const promoName = 'Promo Watsons Cashback Hingga 20% Dengan QRIS Bank Raya!';
      const promoDate = '1 Juli - 31 Desember 2025';
        cy.ViewPromo(promoName, promoDate)
    });

  });
});

describe('TC005 - Promo - Positif - Promo Wingstop Cashback Hingga 50% Dengan QRIS Bank Raya!', () => {
  context(`Akses halaman detail pada card promo Promo Wingstop Cashback Hingga 50% Dengan QRIS Bank Raya!`, () => {

    it('Open Menu Promo', () => {
      cy.OpenPromoPage()
    });

    it('Lihat Detail Promo dan Validasi Halaman', () => {
      const promoName = 'Promo Wingstop Cashback Hingga 50% Dengan QRIS Bank Raya!';
      const promoDate = 'Promo berlaku setiap tanggal 1 – 24 setiap bulannya';
        cy.ViewPromo(promoName, promoDate)
    });

  });
});