
const investorData = [
  { id: '001', card: 'Informasi Saham', tab: 'Kinerja Saham' },
  { id: '002', card: 'Informasi Saham', tab: 'Informasi Dividen', thn: '2019' },
  { id: '003', card: 'Laporan Keuangan', tab: 'Laporan Tahunan', thn: '2025', bln: 'Maret', tri: 'Triwulan 1' },
  { id: '004', card: 'Laporan Keuangan', tab: 'Laporan Publikasi', thn: '2025', bln: 'Februari', tri: 'Triwulan 2' },
  { id: '005', card: 'Laporan Keuangan', tab: 'Laporan Keuangan' },
  { id: '006', card: 'Laporan Keuangan', tab: 'Informasi SBDK', thn: '2024' },
  { id: '007', card: 'Laporan Keuangan', tab: 'Rasio Pengungkit', thn: '2024' },
  { id: '008', card: 'Laporan Keuangan', tab: 'Rasio Pendanaan Stabil Bersih (NSFR)' },
  { id: '009', card: 'Laporan Keuangan', tab: 'Rasio Kecukupan Likuiditas (LCR)', thn: '2024', tri: 'Triwulan 1' },
  { id: '010', card: 'Laporan Keuangan', tab: 'Pengungkapan Eksposur Risiko', thn: '2021' },
  { id: '011', card: 'Laporan Keuangan', tab: 'Pengungkapan Eksposur Risiko dan Permodalan' },
  { id: '012', card: 'Laporan Keuangan', tab: 'Pengungkapan Recovery Plan' },
  { id: '013', card: 'Presentasi Perusahaan', tab: '', thn: '2025', tri: 'Triwulan 1' },
  { id: '014', card: 'Berita Investor', tab: 'Aksi Perusahaan', thn: '2025', bln: 'Januari' },
  { id: '015', card: 'Berita Investor', tab: 'RUPS', thn: '2024', bln: 'Januari' },
  { id: '016', card: 'Berita Investor', tab: 'Press Release', thn: '2024', bln: 'Januari' },
  { id: '017', card: 'Berita Investor', tab: 'IR Newsletter', thn: '2024', bln: 'Januari' },
];

investorData.forEach(({ id, card, tab, thn = '', bln = '', tri = '' }) => {
  const detailName = `Card ${card}${tab ? ` > tab ${tab}` : ''}`;
  
  TestCaseHubunganInvestor({
    TCID: `TC${id}`,
    MenuName: `Perusahaan > Hubungan Investor > ${card}`,
    Category: 'Positif',
    TCName: `Kunjungi detail ${detailName}`,
    Description: `Akses halaman detail pada ${detailName}`,
    DataTest: {
      categoryCardName: card,
      tabCategoryName: tab,
      filterTahun: thn,
      filterBulan: bln,
      filterTriWulan: tri,
    }
  });
});

function TestCaseHubunganInvestor({ TCID, MenuName, Category, TCName, Description, DataTest }) {
  describe(`${TCID} - ${MenuName} - ${Category} - ${TCName}`, () => {
    context(Description, () => {
      it('Open Menu Hubungan Investor', () => {
        cy.OpenHubunganInvestorPage(); // Pastikan command custom ini sesuai
      });

      it('View Detail and Filter', () => {
        // Implementasi logika test berdasarkan DataTest
        const categoryCardName = DataTest["categoryCardName"];
        const tabCategoryName = DataTest["tabCategoryName"];
        const filterTahun = DataTest["filterTahun"];
        const filterBulan = DataTest["filterBulan"];
        const filterTriWulan = DataTest["filterTriWulan"];
        cy.OpenInvestorCategory(categoryCardName, tabCategoryName, filterTahun, filterBulan, filterTriWulan);
      });
    });
  });
}
