import { PERUSAHAAN_PAGE_SELECTORS } from "../../selectors/perusahaan.selectors";

Cypress.Commands.add("OpenAsetMediaPage", () => {
    cy.contains('Perusahaan').click();

    cy.navigateThroughPages(
        PERUSAHAAN_PAGE_SELECTORS.dropdownSubMenuPerusahaan,
        'Aset Media',
        '/corporate/media-assets'
    )

    cy.contains('h2', 'Aset Media').scrollIntoView().should('be.visible');
    cy.contains('h5', 'Divisi Sekretariat Perusahaan').scrollIntoView().should('be.visible');
});

/**
 * @description Custom commands for view perusahaan > aset media page and showing the detail
 * @param tabCategoryAsetName = using for get category tab name
 * @param contentName = using for get content name
 */

Cypress.Commands.add("ViewAsetMedia", (tabCategoryAsetName, contentName) => {
    if (tabCategoryAsetName == 'Aset Brand' || tabCategoryAsetName == 'Galeri Foto') {

        // cy.get(PERUSAHAAN_PAGE_SELECTORS.tabAsetBrand).click();
        cy.contains(tabCategoryAsetName).click()
        cy.wait(1000)
        cy.contains(tabCategoryAsetName).should('be.visible');
        cy.contains(contentName)
            .parents('.card')
            .find('a')
            .click();
    }
    else if (tabCategoryAsetName == 'Galeri Video') {

        cy.get(PERUSAHAAN_PAGE_SELECTORS.tabGaleriVideo).click();
        cy.contains(tabCategoryAsetName).should('be.visible');
        cy.contains('h5', '#MudahKayaRaya di Bank Raya!').should('be.visible')
        cy.contains('h5', 'Pinang Dana Talangan Bank Raya - Agen BRILink').should('be.visible')

    } else {
        alert('tabCategoryAsetName tidak boleh kosong')
        cy.log(tabCategoryAsetName);
    }

});