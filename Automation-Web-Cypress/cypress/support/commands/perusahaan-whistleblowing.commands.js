import { PERUSAHAAN_PAGE_SELECTORS } from "../../selectors/perusahaan.selectors";

Cypress.Commands.add("OpenWhistleblowingSystemPage", () => {
    cy.contains('Perusahaan').click();

    cy.get(`#landing-navbar-collapse > ul > li:nth-child(4) > div > ${PERUSAHAAN_PAGE_SELECTORS.dropdownSubMenuPerusahaan}`)
    .contains('Whistleblowing System')
    .should("be.visible").click();
    cy.wait(1000)
    cy.log('OpenWhistleblowingSystemPage')

});