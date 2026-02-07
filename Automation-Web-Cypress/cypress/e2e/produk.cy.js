
describe('TC001 - Saku Raya - Positif - Kunjungi Detail Card Saku Raya', () => {
  context(`Akses halaman detail pada card Saku Raya`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Saku Raya', 'Simpanan')
    });

  })
})

describe('TC002 - Saku Bujet - Positif - Kunjungi Detail Card Saku Bujet', () => {
  context(`Akses halaman detail pada card Saku Bujet`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Saku Bujet')
    });

  })

})

describe('TC003 - Saku Pintar - Positif - Kunjungi Detail Card Saku Pintar', () => {
  context(`Akses halaman detail pada card Saku Pintar`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Saku Pintar')
    });

  })
})

describe('TC004 - Saku Jaga - Positif - Kunjungi Detail Card Saku Jaga', () => {
  context(`Akses halaman detail pada card Saku Jaga`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Saku Jaga')
    });

  })

})

describe('TC005 - Saku Bareng - Positif - Kunjungi Detail Card Saku Bareng', () => {
  context(`Akses halaman detail pada card Saku Bareng`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Saku Bareng')
    });

  })

})

describe('TC006 - Saku Bisnis - Positif - Kunjungi Detail Card Saku Bisnis', () => {
  context(`Akses halaman detail pada card Saku Bisnis`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Saku Bisnis')
    });

  })

})

describe('TC007 - Pinang Flexi - Positif - Kunjungi Detail Card Pinang Flexi', () => {
  context(`Akses halaman detail pada card Pinang Flexi dan melakukan simulasi perhitungan Pinjaman`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Pinang Flexi')
    });

    it('Simulasi Pinang Flexi', () => {
      cy.log('test perhitungan Pinang Flexi')
      const nominal = 1000000;
      const tenor = 6;
      cy.simulasiPinangFlexi(nominal, tenor);
    });

  })

})

describe('TC008 - Pinang Flexi Extra - Positif - Kunjungi Detail Card Pinang Flexi Extra', () => {
  context(`Akses halaman detail pada card Pinang Flexi Extra`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Pinang Flexi Extra')
    });

  })

})

describe('TC009 - Pinang Maksima - Positif - Kunjungi Detail Card Pinang Maksima', () => {
  context(`Akses halaman detail pada card Pinang Maksima dan terdapat simulasi perhitungan pinjaman Invoice Financing dan Pembiayaan Kontrak Kerja`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Pinang Maksima')
    });

    it('Simulasi Invoice Financing', () => {
      cy.log('test perhitungan masksima')
      const invoice = 150000000;
      const tenor = 25;
      cy.simulasiInvoiceFinancing(invoice, tenor);
    });

    it('Simulasi Pembiayaan Kontrak Kerja', () => {
      cy.log('test perhitungan masksima')
      const invoice = 100000000;
      const dp = 10000000;
      const tenor = 30;
      cy.simulasiPembiayaanKontrakKerja(invoice, dp, tenor);
    });

  })

})

describe('TC010 - Pinang Performa - Positif - Kunjungi Detail Card Pinang Perfoma', () => {
  context(`Akses halaman detail pada card Pinang Performa`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Pinang Performa')
    });

  })

})

describe('TC011 - Pinang Dana Talangan - Positif - Kunjungi Detail Card Pinang Dana Talangan', () => {
  context(`Akses halaman detail pada card Pinang Dana Talangan`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Pinang Dana Talangan')
    });

  })

})

describe('TC012 - QRIS Bisnis - Positif - Kunjungi Detail Card QRIS Bisnis', () => {
  context(`Akses halaman detail pada card QRIS Bisnis`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('QRIS Bisnis')
    });

  })

})

describe('TC013 - Raya Paylater - Positif - Kunjungi Detail Card Raya Paylater', () => {
  context(`Akses halaman detail pada card Raya Paylater`, () => {

    it('Open Menu Produk', () => {
      cy.OpenProductPage()
    });

    it('Lihat Detail Produk dan Validasi Halaman', () => {
      cy.OpenProduct('Raya Paylater')
    });

  })

})