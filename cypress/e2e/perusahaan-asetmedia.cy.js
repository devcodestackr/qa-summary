const testCases = [
  { id: '001', tab: 'Aset Brand', content: 'Logo Raya Biru' },
  { id: '002', tab: 'Aset Brand', content: 'Logo Raya Warna' },
  { id: '003', tab: 'Galeri Foto', content: 'Ruang Kantor Cabang' },
  { id: '004', tab: 'Galeri Foto', content: 'Bank Raya' },
  { id: '005', tab: 'Galeri Foto', content: 'Saku Raya' },
  { id: '006', tab: 'Galeri Foto', content: 'Saku Bareng' },
  { id: '007', tab: 'Galeri Video', content: '' },
];

testCases.forEach(({ id, tab, content }) => {
  const suffix = content ? ` > ${content}` : '';
  
  TestCaseAsetmedia({
    TCID: `TC${id}`,
    MenuName: `Perusahaan > Aset Media > Tab ${tab}`,
    Category: 'Positif',
    TCName: `Kunjungi detail Tab ${tab}${suffix}`,
    Description: `Akses halaman detail pada Tab ${tab}${suffix}`,
    DataTest: {
      tabCategoryAsetName: tab,
      contentName: content
    }
  });
});

function TestCaseAsetmedia({ TCID, MenuName, Category, TCName, Description, DataTest }) {
  describe(`${TCID} - ${MenuName} - ${Category} - ${TCName}`, () => {
    context(Description, () => {
      it('Open Menu Perusahaan - Struktur Perusahaan', () => {
        cy.OpenAsetMediaPage();
      });

      it('View detail tab Struktur Organisasi', () => {
        cy.ViewAsetMedia(DataTest.tabCategoryAsetName, DataTest.contentName);
      });
    });
  });
}
