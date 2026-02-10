import { PRODUK_SELECTORS } from "../../selectors/product.selectors";
import simulasiPerhitungan from "../pages/produkPages";

/**
 * @description Custom commands for Open product page and showing all product
 */

Cypress.Commands.add("OpenProductPage", () => {
  cy.navigateThroughPages(
    PRODUK_SELECTORS.produkMenu,
    'Produk',
    '/product-brochure/semua?tabs=semua'
  )
  cy.contains('h5', 'PRODUK RAYA');
});

/**
 * @description Custom commands for open produk detail
 */

Cypress.Commands.add("OpenProduct", (productName, tabProductCategory = 'Semua') => {

  //berfungsi untuk memvalidasi kategori tab pada halaman produk
  if (tabProductCategory !== 'Semua' || tabProductCategory !== '') {
    cy.get('#tab-nav-desktop > div > div > div').contains(tabProductCategory).click();
  }
  cy.log(tabProductCategory);

  if (productName == 'Saku Raya') {
    // Lihat Detail Saku Raya 
    cy.navigateThroughPages(
      PRODUK_SELECTORS.sakuRaya,
      'Lihat Detail',
      '/product-brochure/detail/saku-raya'
    )

    // Verifikasi heading Page
    cy.contains('h3', 'Beragam Saku buat pisahkan keuangan sesuai kebutuhan').should("be.visible");
    cy.contains('h2', 'Keuntungan pakai Saku Raya')
    cy.contains('h2', 'Cara buat Saku Raya')
    cy.contains('h2', 'Apa aja persyaratannya?')
    cy.contains('h3', 'Simulasi dan Biaya')
    cy.contains('h3', 'Biaya & informasi lainnya')

  } else if (productName == 'Saku Bujet') {

    // Lihat Detail Saku Bujet 
    cy.navigateThroughPages(
      PRODUK_SELECTORS.sakuBujet,
      'Lihat Detail',
      '/product-brochure/detail/saku-bujet'
    )
    //verifikasi heading page
    cy.contains('h3', 'Pilihan buat bujetin pengeluaran tiap harinya').should("be.visible");
    cy.contains('h2', 'Keuntungan pakai Saku Bujet')
    cy.contains('h2', 'Cara buat Saku Bujet')
    cy.contains('h2', 'Saku Bujet bisa buat apa aja?')
    cy.contains('h3', 'Simulasi dan Biaya')
    cy.contains('h3', 'Informasi lainnya')

  } else if (productName == 'Saku Pintar') {

    // Lihat Detail Saku Pintar
    cy.navigateThroughPages(
      PRODUK_SELECTORS.sakuPintar,
      'Lihat Detail',
      '/product-brochure/detail/saku-pintar'
    )
    cy.contains('h3', 'Wujudkan impian jadi kenyataan').should("be.visible");
    cy.contains('h2', 'Keuntungan pakai Saku Pintar')
    cy.contains('h2', 'Cara buat Saku Pintar')
    cy.contains('h2', 'Saku Pintar bisa buat apa aja?')
    cy.contains('h3', 'Simulasi dan Biaya')
    cy.contains('h3', 'Informasi lainnya')

  } else if (productName == 'Saku Jaga') {

    // Lihat Detail Saku Jaga
    cy.navigateThroughPages(
      PRODUK_SELECTORS.sakuJaga,
      'Lihat Detail',
      '/product-brochure/detail/saku-jaga'
    )
    cy.contains('h3', 'Persiapan buat jaga-jaga hal tak terduga').should("be.visible");
    cy.contains('h2', 'Keuntungan pakai Saku Jaga')
    cy.contains('h2', 'Cara buat Saku Jaga')
    cy.contains('h2', 'Saku Jaga bisa buat apa aja?')
    cy.contains('h3', 'Simulasi dan Biaya')
    cy.contains('h3', 'Informasi lainnya')

  } else if (productName == 'Saku Bareng') {

    cy.navigateThroughPages(
      PRODUK_SELECTORS.sakuBareng,
      'Lihat Detail',
      '/product-brochure/detail/saku-bareng'
    )
    cy.contains('h3', 'Nabung bareng hingga 100 kawan').should("be.visible");
    cy.contains('h2', 'Keuntungan pakai Saku Bareng')
    cy.contains('h2', 'Cara buat Saku Bareng')
    cy.contains('h2', 'Saku Bareng bisa buat apa aja?')
    cy.contains('h3', 'Simulasi dan Biaya')
    cy.contains('h3', 'Informasi lainnya')

  } else if (productName == 'Saku Bisnis') {

    cy.navigateThroughPages(
      PRODUK_SELECTORS.sakuBisnis,
      'Lihat Detail',
      '/product-brochure/detail/saku-bisnis'
    )
    cy.contains('h3', 'Pisahin uang personal dan bisnis dengan Raya Bisnis').should("be.visible");
    cy.contains('h2', 'Keuntungan pakai Saku Bisnis')
    cy.contains('h2', 'Cara buat Saku Bisnis')
    cy.contains('h2', 'Saku Bisnis bisa buat apa aja?')
    cy.contains('h3', 'Simulasi dan Biaya')
    cy.contains('h3', 'Informasi lainnya')

  } else if (productName == 'Pinang Flexi') {

    cy.navigateThroughPages(
      PRODUK_SELECTORS.pinangFlexi,
      'Lihat Detail',
      '/product-brochure/detail/pinang-flexi'
    )
    cy.contains('h3', 'Penuhi segala kebutuhanmu dengan pinjaman hingga 25 juta').should("be.visible");
    cy.contains('h2', 'Kenapa pilih Pinang Flexi?')
    cy.contains('h2', 'Cara mengajukan Pinang Flexi')
    cy.contains('h2', 'Apa saja Persyaratannya?')
    cy.contains('h3', 'Biaya & informasi lainnya')

  } else if (productName == 'Pinang Flexi Extra') {

    cy.navigateThroughPages(
      PRODUK_SELECTORS.pinangFlexiExtra,
      'Lihat Detail',
      '/product-brochure/detail/pinang-flexi-extra'
    )
    cy.contains('h3', 'Penuhi segala kebutuhanmu dengan pinjaman hingga 500 juta').should("be.visible");
    cy.contains('h2', 'Kenapa Pilih Pinang Flexi Extra?')
    cy.contains('h2', 'Cara mengajukan Pinang Flexi Extra')
    cy.contains('h2', 'Apa saja Persyaratannya?')
    cy.contains('h3', 'Simulasi & Biaya')
    cy.contains('h3', 'Biaya & Informasi lainnya')

  } else if (productName == 'Pinang Maksima') {

    cy.navigateThroughPages(
      PRODUK_SELECTORS.pinangMaksima,
      'Lihat Detail',
      '/product-brochure/detail/pinang-maksima'
    )
    cy.contains('h3', 'Maksimalkan potensi usahamu dengan pinjaman modal kerja').should("be.visible");
    cy.contains('h2', 'Kenapa pilih Pinang Maksima?')
    cy.contains('h2', 'Cara mengajukan Pinang Maksima')
    cy.contains('h2', 'Apa saja persyaratanya?')
    cy.contains('h3', 'Biaya & informasi lainnya')

  } else if (productName == 'Pinang Performa') {

    cy.navigateThroughPages(
      PRODUK_SELECTORS.pinangPeforma,
      'Lihat Detail',
      '/product-brochure/detail/pinang-performa'
    )
    cy.contains('h3', 'Tingkatkan bisnismu dengan pinjaman hingga 100 juta').should("be.visible");
    cy.contains('h2', 'Kenapa pilih Pinang Performa?')
    cy.contains('h2', 'Cara mengajukan Pinang Performa')
    cy.contains('h2', 'Apa saja Persyaratannya?')
    cy.contains('h3', 'Simulasi dan Biaya')
    cy.contains('h3', 'Biaya & informasi lainnya')

  } else if (productName == 'Pinang Dana Talangan') {

    cy.navigateThroughPages(
      PRODUK_SELECTORS.pinangDanaTalangan,
      'Lihat Detail',
      '/product-brochure/detail/pinang-dana-talangan'
    )
    cy.contains('h3', 'Pinjaman untuk talangan usaha hingga Rp200 juta').should("be.visible");
    cy.contains('h2', 'Kenapa pilih Pinang Dana Talangan?')
    cy.contains('h2', 'Cara mengajukan Pinang Dana Talangan')
    cy.contains('h2', 'Apa saja Persyaratannya?')
    cy.contains('h3', 'Simulasi dan Biaya')
    cy.contains('h3', 'Biaya & informasi lainnya')

  } else if (productName == 'QRIS Bisnis') {

    cy.navigateThroughPages(
      PRODUK_SELECTORS.qrisBisnis,
      'Lihat Detail',
      '/product-brochure/detail/qris-bisnis'
    )
    cy.contains('h3', 'Pencairan kilat QRIS cair 4 kali sehari').should("be.visible");
    cy.contains('h2', 'Apa keunggulan QRIS Bisnis?')
    cy.contains('h2', 'Kapan waktu pencairan QRIS Bisnis?')
    cy.contains('h2', 'Bagaimana cara daftar QRIS Bisnis Bank Raya?')
    cy.contains('h2', 'Apa syarat & ketentuannya?')

  } else if (productName == 'Raya Paylater') {

    cy.navigateThroughPages(
      PRODUK_SELECTORS.rayaPaylater,
      'Lihat Detail',
      '/product-brochure/detail/raya-paylater'
    )
    cy.contains('h3', 'Belanja Sekarang, Bayar Nanti Pakai Raya PayLater').should("be.visible");
    cy.contains('h2', 'Kenapa pilih Raya PayLater?')
    cy.contains('h2', 'Cara mengajukan Raya PayLater?')
    cy.contains('h2', 'Apa saja Persyaratannya?')
    cy.contains('h3', 'Simulasi dan Biaya')
    cy.contains('h3', 'Biaya & informasi lainnya')

  }
});

/**
 * @description Custom commands for simulation invoice financing 
 */

//Simulasi perhitungan Invoice Financing
Cypress.Commands.add("simulasiInvoiceFinancing", (invoice, tenor) => {
  cy.contains('Pinang Maksima');
  cy.log('Simulasi Invoice Financing');
  cy.get(`#invoice-tab`).contains('Invoice').should("be.visible");

  if (invoice <= 100000000) {
    cy.log('Minimal Invoice 100.000.000');
    alert('Message :: Minimal Invoice 100000000, Invoice kamu saat ini :: ' + invoice)
  }

  cy.get(PRODUK_SELECTORS.maksimaInvoiceSelector.nilaiInvoice).type(invoice)
  cy.typeInput(PRODUK_SELECTORS.maksimaInvoiceSelector.jangkaWaktuInvoice, tenor)

  const InvoiceSimulasi = simulasiPerhitungan.invoiceFinancingSimulasi(invoice, tenor);
  cy.log(InvoiceSimulasi);
  /**
   * @description verify calculation and set formating invoice financing 
   * @param estimasiMaksPencairan == Estimasi maksimum pencairan and Pokok Pinjaman
   * @param totalKewajibanPinjaman == Total Kewajiban Pinjaman
   * @param cadanganBunga == Cadangan Bunga (15% p.a)
   */

  cy.log("Estimasi maksimum pencairan")
  cy.formatMoney({
    number: InvoiceSimulasi.estimasiMaksPencairan,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.maksimaInvoiceSelector.estimasiMaksPencairan).should("include.text", formatted);
  });

  cy.log("Total Kewajiban Pinjaman");
  cy.formatMoney({
    number: InvoiceSimulasi.totalKewajibanPinjaman,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.maksimaInvoiceSelector.totalKewajibanPinjaman).should("include.text", formatted);
  });

  cy.get(`#toggle-button`).contains('Lihat Rincian').click();

  cy.log("Pokok Pinjaman");
  cy.formatMoney({
    number: InvoiceSimulasi.estimasiMaksPencairan,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.maksimaInvoiceSelector.pokokPinjaman).should("include.text", formatted);
  });

  cy.log("Cadangan Bunga (15% p.a)")
  cy.formatMoney({
    number: InvoiceSimulasi.cadanganBunga,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.maksimaInvoiceSelector.cadanganBunga).should("include.text", formatted);
  });

});

//Simulasi perhitungan Pembiayaan Kontrak Kerja
Cypress.Commands.add("simulasiPembiayaanKontrakKerja", (nominal, dp, tenor) => {
  cy.contains('Pinang Maksima');
  cy.log('Simulasi Pembiayaan Kontrak Kerja');
  cy.get(`#payment-tab`).click();
  cy.contains('Kontrak Kerja').should("be.visible");

  if (nominal < 100000000) {
    cy.log('Minimal Nominal 100.000.000');
    alert('Message :: Minimal Nominal 100000000, Nominal kamu saat ini :: ' + nominal)
  }

  if (dp > (nominal / 2)) {
    cy.log('Maksimal Nominal adalah 50% Nominal');
    alert('Message :: Maksimal DP adalah 50% dari ' + nominal + ' DP kamu saat ini :: ' + dp)
  }

  cy.get(PRODUK_SELECTORS.maksimaKontrakSelector.nilaiNominal).type(nominal)
  cy.get(PRODUK_SELECTORS.maksimaKontrakSelector.nilaiDP).type(dp)
  cy.typeInput(PRODUK_SELECTORS.maksimaKontrakSelector.jangkaWaktuKontrakKerja, tenor)

  const KontrakKerjaSimulasi = simulasiPerhitungan.KontrakKerjaSimulasi(nominal, dp, tenor);
  /**
   * @description verify calculation and set formating invoice financing 
   * @param estimasiMaksPencairanKontrakKerja == Estimasi maksimum pencairan and Pokok Pinjaman
   * @param totalKewajibanPinjamanKontrakKerja == Total Kewajiban Pinjaman
   * @param cadanganBungaKontrakKerja == Cadangan Bunga (15% p.a)
   */

  cy.log("Estimasi maksimum pencairan")
  cy.formatMoney({
    number: KontrakKerjaSimulasi.estimasiMaksPencairanKontrakKerja,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.maksimaKontrakSelector.estimasiMaksPencairanKontrakKerja).should("include.text", formatted);
  });

  cy.log("Total Kewajiban Pinjaman");
  cy.formatMoney({
    number: KontrakKerjaSimulasi.totalKewajibanPinjamanKontrakKerja,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.maksimaKontrakSelector.totalKewajibanPinjamanKontrakKerja).should("include.text", formatted);
  });

  cy.get(`#toggle-button`).contains('Lihat Rincian').click();

  cy.log("Pokok Pinjaman");
  cy.formatMoney({
    number: KontrakKerjaSimulasi.estimasiMaksPencairanKontrakKerja,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.maksimaKontrakSelector.pokokPinjamanKontrakKerja).should("include.text", formatted);
  });

  cy.log("Cadangan Bunga (15% p.a)")
  cy.formatMoney({
    number: KontrakKerjaSimulasi.cadanganBungaKontrakKerja,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.maksimaKontrakSelector.cadanganBungaKontrakKerja).should("include.text", formatted);
  });

});

//Simulasi perhitungan Pinang Flexi
Cypress.Commands.add("simulasiPinangFlexi", (nominal, tenor) => {
  cy.contains('Pinang Flexi');
  cy.log('Simulasi Pinang Flexi');
  cy.contains('label', 'Nominal Pinjaman').should("be.visible");

  if (nominal < 500000) {
    cy.log('Minimal nominal pinjaman 500.000');
    alert('Message :: Minimal Nominal 500000, Nominal kamu saat ini :: ' + nominal)
  }

  cy.get(PRODUK_SELECTORS.pinangFlexiSelector.nominalPinjaman).type(nominal)
  cy.get('#term-slider')
    .invoke('val', tenor)
    .trigger('input')
    .trigger('change');

  const PinangFlexiSimulasi = simulasiPerhitungan.PinangFlexiSimulasi(nominal, tenor);
  cy.log(PinangFlexiSimulasi);

  /**
   * @description verify calculation and set formating invoice financing 
   * @param angsuranPerBulan == Total angsuran yang dibayar perbulan
   * @param pokokPinjaman == Total Kewajiban Pinjaman
   * @param bungaPinjaman == Cadangan Bunga (1.5% p.a)
   */

  cy.log("Angsuran per Bulan")
  cy.formatMoney({
    number: PinangFlexiSimulasi.angsuranPerBulan,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.pinangFlexiSelector.angsuranPerbulan).should("include.text", formatted);
  });

  cy.get(`#toggle-button`).contains('Lihat Rincian').click();

  cy.log("Pokok Pinjaman");
  cy.formatMoney({
    number: nominal,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.pinangFlexiSelector.pokokPinjaman).should("include.text", formatted);
  });

  cy.log("Bunga Pinjaman 1.5%")
  cy.formatMoney({
    number: PinangFlexiSimulasi.bungaPinjaman,
    isRemoveDecimal: true,
    formatAsThousands: false,
  }).then((formatted) => {
    cy.log(formatted);
    cy.get(PRODUK_SELECTORS.pinangFlexiSelector.bungaPinjaman).should("include.text", formatted);
  });

});