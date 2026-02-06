import { PERUSAHAAN_PAGE_SELECTORS } from "../../selectors/perusahaan.selectors";

Cypress.Commands.add("OpenTataKelolaPage", () => {
    cy.contains('Perusahaan').click();

    cy.navigateThroughPages(
        PERUSAHAAN_PAGE_SELECTORS.dropdownSubMenuPerusahaan,
        'Tata Kelola',
        '/corporate/gcg'
    )
    cy.contains('h2', 'Informasi Tata Kelola Bank Raya').should("be.visible");
    cy.contains('a', 'Sekretaris Perusahaan').should("be.visible");

});

/**
 * @description Custom commands for view menu perusahaan > tata kelola page and showing the detail
 * @param categoryTabTataKelola = using for get category tata kelola tab
 * @param anggotaKomiteName = using for get anggota komite name
 * @param profileKomiteName = using for get anggota komite name in the detail card
 * @param categoryTabLaporanTataKelola = using for get category laporan tata kelola tab in categoryTabTataKelola = Laporan Tata Kelola
 */

Cypress.Commands.add("ViewTataKelola", (categoryTabTataKelola, anggotaKomiteName, profileKomiteName, categoryTabLaporanTataKelola) => {

    if (categoryTabTataKelola == 'Sekretaris Perusahaan') {

        cy.get(PERUSAHAAN_PAGE_SELECTORS.categoryTabTataKelola).contains(categoryTabTataKelola).click();
        cy.get(PERUSAHAAN_PAGE_SELECTORS.sekretarisPerusahaanImg).should('be.visible');
        cy.contains('h3', 'Sekretaris Perusahaan').should('be.visible');
        cy.contains('h4', 'Ajeng Putri Hapsari').should('be.visible');

    } else if (categoryTabTataKelola == 'Anggota Komite') {

        cy.get(PERUSAHAAN_PAGE_SELECTORS.categoryTabTataKelola).contains(categoryTabTataKelola).click();
        cy.contains('h3', 'Komite Audit').should('be.visible');

        cy.contains(anggotaKomiteName)
            .parent()
            .find('a')
            .click();

        cy.contains('h4', profileKomiteName).should('be.visible');

    }
    else if (categoryTabTataKelola == 'Laporan Tata Kelola') {

        cy.get(PERUSAHAAN_PAGE_SELECTORS.categoryTabTataKelola).contains(categoryTabTataKelola).click();
        cy.contains('a', 'Pedoman Kerja Direksi & Dewan Komisaris').should('be.visible');

        if (categoryTabLaporanTataKelola !== '') {
            cy.log(`Selecting tab: ${categoryTabLaporanTataKelola}`);
            cy.contains('a.nav-link.nav-report', categoryTabLaporanTataKelola)
                .scrollIntoView()
                .should('be.visible')
                .click();
            cy.wait(1000)

            cy.get('.reportList')
                .should('be.visible')
                .then(($el) => {
                    cy.wait(1000)
                    if ($el.find('div.card-header.border-0.card-bg-color.d-flex.align-items-center.justify-content-center').is(':visible')) {
                        cy.log('Card tampil');
                    } else {
                        cy.log('Card tidak tampil');
                        cy.contains('div', 'Yah, saat ini laporan masih belum ada. Coba lagi nanti ya!.');
                    }
                });
        }
        cy.log(categoryTabLaporanTataKelola);

    } else {
        cy.log('Nama tab belum diisi');
    }
    cy.log(categoryTabTataKelola);
});