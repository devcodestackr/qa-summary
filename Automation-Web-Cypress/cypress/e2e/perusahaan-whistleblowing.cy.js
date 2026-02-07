TestCaseWhistleBlowingSystem({
  TCID: 'TC001',
  MenuName: 'Perusahaan > Whistleblowing System',
  Category: 'Positif',
  TCName: 'Kunjungi detail Menu Whistleblowing System',
  Description: 'Akses halaman detail pada Menu Whistleblowing System'
})

function TestCaseWhistleBlowingSystem({ TCID, MenuName, Category, TCName, Description, DataTest }) {
  describe(`${TCID} - ${MenuName}  - ${Category} - ${TCName}`, () => {
    context(`${Description}`, () => {

      it('Open Menu Perusahaan - Whistleblowing System', () => {
        cy.OpenWhistleblowingSystemPage();
      });

    });
  });
}
