const tataKelolaData = [
  { id: '001', cat: 'Sekretaris Perusahaan' },
  // Anggota Komite
  { id: '002', cat: 'Anggota Komite', sub: 'Komite Audit', name: 'Johanes Kuntjoro Adisardjono' },
  { id: '003', cat: 'Anggota Komite', sub: 'Komite Audit', name: 'Retno Wahyuni Wijayanti' },
  { id: '004', cat: 'Anggota Komite', sub: 'Komite Pemantau Risiko', name: 'Muhamad Sidik Heruwibowo' },
  { id: '005', cat: 'Anggota Komite', sub: 'Komite Pemantau Risiko', name: 'Nyimas Dewi Ratih Kamil' },
  { id: '006', cat: 'Anggota Komite', sub: 'Komite Remunerasi & Nominasi', name: 'Hari Anggoro Sunu' },
  { id: '007', cat: 'Anggota Komite', sub: 'Komite Remunerasi & Nominasi', name: 'Yuyus Susdiana' },
  // Laporan Tata Kelola
  { id: '008', cat: 'Laporan Tata Kelola', sub: 'Pedoman Kerja Direksi & Dewan Komisaris' },
  { id: '009', cat: 'Laporan Tata Kelola', sub: 'Pedoman Kerja Komite Komisaris' },
  { id: '010', cat: 'Laporan Tata Kelola', sub: 'Audit Internal' },
  { id: '011', cat: 'Laporan Tata Kelola', sub: 'Kebijakan Manajemen Risiko' },
  { id: '012', cat: 'Laporan Tata Kelola', sub: 'Anti Money Laundering' },
  { id: '013', cat: 'Laporan Tata Kelola', sub: 'ASEAN Corporate Governance Scorecard (ACGS)' },
  { id: '014', cat: 'Laporan Tata Kelola', sub: 'Anggaran Dasar' },
  { id: '015', cat: 'Laporan Tata Kelola', sub: 'Kebijakan Tata Kelola Perusahaan Yang Baik' },
  { id: '016', cat: 'Laporan Tata Kelola', sub: 'Laporan Self Assessment Tata Kelola' },
];

tataKelolaData.forEach(({ id, cat, sub = '', name = '' }) => {
  // Logika pembuatan string secara dinamis
  const menuPath = `Tab ${cat}${sub ? ` > ${sub}` : ''}`;
  const detailLabel = `${sub}${name ? ` ${name}` : ''}`.trim();
  
  TestCaseTataKelola({
    TCID: `TC${id}`,
    MenuName: `Perusahaan > Tata Kelola > ${menuPath}`,
    Category: 'Positif',
    TCName: `Kunjungi detail ${menuPath}${name ? ` ${name}` : ''}`,
    Description: `Akses halaman detail pada ${menuPath}${name ? ` ${name}` : ''}`,
    DataTest: {
      categoryTabTataKelola: cat,
      anggotaKomiteName: name,
      profileKomiteName: name,
      categoryTabLaporanTataKelola: cat === 'Laporan Tata Kelola' ? sub : '',
    }
  });
});

function TestCaseTataKelola({ TCID, MenuName, Category, TCName, Description, DataTest }) {
  describe(`${TCID} - ${MenuName} - ${Category} - ${TCName}`, () => {
    context(Description, () => {
      it('Open Menu Tata Kelola', () => {
        cy.OpenTataKelolaPage();
      });

      it('Validasi Detail Tata Kelola', () => {
        const { categoryTabTataKelola, anggotaKomiteName, profileKomiteName, categoryTabLaporanTataKelola } = DataTest;
        cy.ViewTataKelola(categoryTabTataKelola, anggotaKomiteName, profileKomiteName, categoryTabLaporanTataKelola);
      });
    });
  });
}
