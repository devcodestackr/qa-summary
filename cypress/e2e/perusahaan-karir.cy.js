TestCaseKarir({
  TCID: 'TC001',
  MenuName: 'Perusahaan > Karir',
  Category: 'Positif',
  TCName: 'Kunjungi detail card halaman Perusahaan > Karir',
  Description: 'Akses halaman detail pada card halaman Perusahaan > Karir',
})

function TestCaseKarir({ TCID, MenuName, Category, TCName, Description, DataTest }) {
  describe(`${TCID} - ${MenuName}  - ${Category} - ${TCName}`, () => {
    context(`${Description}`, () => {

      it('Open Menu Perusahaan - Karir', () => {
        cy.OpenKarirPage();
      });

    });
  });
}
