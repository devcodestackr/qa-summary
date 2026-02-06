import { PERUSAHAAN_PAGE_SELECTORS } from "../../selectors/perusahaan.selectors";

Cypress.Commands.add("OpenKarirPage", () => {
    cy.contains('Perusahaan').click();

    cy.navigateThroughPages(
        PERUSAHAAN_PAGE_SELECTORS.dropdownSubMenuPerusahaan,
        'Karir',
        '/corporate/career'
    )

    cy.contains('h3', 'Rayakan perjalanan karier yang bermakna bersama').scrollIntoView().should('be.visible');
    cy.contains('h5', 'Core Values Akhlak').scrollIntoView().should('be.visible');
    cy.get(PERUSAHAAN_PAGE_SELECTORS.cardA1).should('be.visible');
    cy.get(PERUSAHAAN_PAGE_SELECTORS.cardK1).should('be.visible');
    cy.get(PERUSAHAAN_PAGE_SELECTORS.cardH).should('be.visible');
    cy.get(PERUSAHAAN_PAGE_SELECTORS.cardL).should('be.visible');
    cy.get(PERUSAHAAN_PAGE_SELECTORS.cardA2).should('be.visible');
    cy.get(PERUSAHAAN_PAGE_SELECTORS.cardK2).should('be.visible');
    cy.contains('h1', 'Dukungan Penuh untuk Karier & Kesejahteraanmu').scrollIntoView().should('be.visible');
    cy.contains('h1', 'Bagaimana Pengalaman Raya Rangers?').scrollIntoView().should('be.visible');
    cy.get(PERUSAHAAN_PAGE_SELECTORS.cardTestimonial).should('be.visible');
    cy.contains('h1', 'Lebih lengkap tentang Bank Raya').scrollIntoView().should('be.visible');
});