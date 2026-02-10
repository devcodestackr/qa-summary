templateScenario({
  TCID: "TC001",
  TCName: "Akses Wesite Bank Raya",
  Description: `Akses halaman detail Saku Raya pada Website Bank Raya`,
});

// template scenario with function
function templateScenario({ TCID, TCName, Description }) {
  describe(`${TCID} - ${TCName}`, () => {
    before(function () {
      cy.log("Visit website Bank Raya");
      cy.visit(Cypress.config("baseUrl"));
      cy.url().should("eq", Cypress.config("baseUrl"));

      cy.log("Fetch data test from excel in the fixtures folder");
      cy.readExcelFile({
        filePath: "data-template.xlsx",
        // sheetNm: sheetName,
        // isArray2D: false,
      }).then((data) => {
        this.dataTest = data[0];
      });
    });

    after(() => {
      cy.log("Attempting logout...");
    });

    afterEach(function () {
      cy.log("Checking if the test failed", this.currentTest.state);
      if (this.currentTest.state === "failed") {
        Cypress.stop();
      }
    });

    context(`${Description}`, () => {
      it("1. Klik Menu Navbar Produk", () => {
        cy.log("Klik menu navbar produk");
        cy.klikMenuNavbarProduk();
      });

      it("2. Klik Lihat Detail Saku Raya", () => {
        cy.log("Klik lihat detail Saku Raya");
        cy.klikLihatDetailSakuRaya();
      });

      it("3. Logging data test from excel", function () {
        cy.log("Logging data test from excel");
        cy.wrap(this.dataTest).should("not.be.empty");
        Object.entries(this.dataTest).forEach(([key]) => {
          cy.log(`${key}: ${this.dataTest[key]}`);
        });
      });
    });
  });
}
