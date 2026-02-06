
const structureData = [
  { id: '001', tab: 'Struktur Organisasi' },
  { id: '002', tab: 'Struktur Kepemilikan' },
  // Data Manajemen: [ID, Nama/Profil, Jabatan untuk TCName]
  { id: '003', tab: 'Manajemen', name: 'Muhamad Sidik Heruwibowo', role: 'Komisaris Utama' },
  { id: '004', tab: 'Manajemen', name: 'Johanes Kuntjoro Adisardjono', role: 'Komisaris Independen' },
  { id: '005', tab: 'Manajemen', name: 'Retno Wahyuni Wijayanti', role: 'Komisaris Independen' },
  { id: '006', tab: 'Manajemen', name: 'Nyimas Dewi Ratih Kamil', role: 'Komisaris' },
  { id: '007', tab: 'Manajemen', name: 'Ida Bagus Ketut Subagia', role: 'Direktur Utama' },
  { id: '008', tab: 'Manajemen', name: 'Rustarti Suri Pertiwi', role: 'Direktur Keuangan' },
  { id: '009', tab: 'Manajemen', name: 'Danar Widyantoro', role: 'Direktur Manajemen Risiko, Kepatuhan dan Sumber Daya Manusia' },
  { id: '010', tab: 'Manajemen', name: 'Kicky Andrie Davetra', role: 'Direktur Bisnis' },
  { id: '011', tab: 'Manajemen', name: 'Lukman Hakim', role: 'Direktur Digital dan Operasional' },
];

structureData.forEach(({ id, tab, name = '', role = '' }) => {
  const isManajemen = tab === 'Manajemen';
  
  TestCaseStrukturPerusahaan({
    TCID: `TC${id}`,
    MenuName: `Perusahaan > Struktur Perusahaan > Tab ${tab}`,
    Category: 'Positif',
    TCName: isManajemen ? `Kunjungi detail profil ${role} pada tab Manajemen` : `Kunjungi detail tab ${tab}`,
    Description: isManajemen ? `Akses halaman detail pada tab ${role}` : `Akses halaman detail pada tab ${tab}`,
    DataTest: {
      categoryTab: tab,
      manajemenName: name,
      profileName: name,
    }
  });
});

function TestCaseStrukturPerusahaan({ TCID, MenuName, Category, TCName, Description, DataTest }) {
  describe(`${TCID} - ${MenuName} - ${Category} - ${TCName}`, () => {
    context(Description, () => {
      it('Open Menu Perusahaan - Struktur Perusahaan', () => {
        cy.OpenStrukturPerusahaanPage();
      });

      it('View detail tab Struktur Organisasi', () => {
        const { categoryTab, manajemenName, profileName } = DataTest;
        cy.ViewProfilManajemen(categoryTab, manajemenName, profileName);
      });
    });
  });
}
