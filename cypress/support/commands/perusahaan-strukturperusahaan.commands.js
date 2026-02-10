import { PERUSAHAAN_PAGE_SELECTORS } from "../../selectors/perusahaan.selectors";

Cypress.Commands.add("OpenStrukturPerusahaanPage", () => {
    cy.contains('Perusahaan').click();

    cy.navigateThroughPages(
        PERUSAHAAN_PAGE_SELECTORS.dropdownSubMenuPerusahaan,
        'Struktur Perusahaan',
        '/corporate/company-structure'
    )
    cy.contains('h2', 'Struktur Perusahaan Bank Raya').should("be.visible");
    cy.contains('a', 'Struktur Organisasi').should("be.visible");

});

/**
 * @description Custom commands for view perusahaan - struktur perusahaan page and showing the detail
 * @param categoryTab = using for get category tab
 * @param manajemenName = using for get management name
 * @param profileName = using for get management name in the detail card
 */

Cypress.Commands.add("ViewProfilManajemen", (categoryTab, manajemenName, profileName) => {

    if (categoryTab == 'Struktur Organisasi') {

        cy.get(PERUSAHAAN_PAGE_SELECTORS.categoryTab).contains(categoryTab).click();
        cy.contains('h3', 'Struktur Organisasi Bank Raya').should("be.visible")
        cy.get(PERUSAHAAN_PAGE_SELECTORS.strukturOrganisasiImg).should('be.visible');

    } else if (categoryTab == 'Struktur Kepemilikan') {

        cy.get(PERUSAHAAN_PAGE_SELECTORS.categoryTab).contains(categoryTab).click();
        cy.contains('h3', 'Struktur Kepemilikan Bank Raya').should("be.visible");
        cy.get(PERUSAHAAN_PAGE_SELECTORS.strukturKepemilikanImg).should('be.visible');

    } else if (categoryTab == 'Manajemen') {

        cy.get(PERUSAHAAN_PAGE_SELECTORS.categoryTab).contains(categoryTab).click();
        cy.contains('h3', 'Dewan Komisaris').should("be.visible");

        cy.contains(manajemenName)
            .parent()
            .find('a')
            .click();

        cy.contains('h4', profileName).should("be.visible");

    } else {
        cy.log('Nama tab belum diisi');
    }
    cy.log(categoryTab);
});