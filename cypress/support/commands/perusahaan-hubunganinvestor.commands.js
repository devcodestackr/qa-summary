import { PERUSAHAAN_PAGE_SELECTORS } from "../../selectors/perusahaan.selectors";

Cypress.Commands.add("OpenHubunganInvestorPage", () => {
    cy.contains('Perusahaan').click();

    cy.navigateThroughPages(
        PERUSAHAAN_PAGE_SELECTORS.dropdownSubMenuPerusahaan,
        'Hubungan Investor',
        '/corporate/investor-relations'
    )

    cy.contains('h5', 'Hubungan Investor').scrollIntoView().should('be.visible');
    cy.contains('h2', 'Informasi kinerja saham dan keuangan Bank Raya').scrollIntoView().should('be.visible');
});

/**
 * @description Custom commands for view perusahaan - hubungan investor page and showing the detail
 * @param categoryCardName = using for get category card name
 * @param tabCategoryName = using for get category tab name in the detail card
 * @param filterTahun = using for get filter by year
 * @param filterBulan = using for get filter by month
 * @param filterTriWulan = using for get filter by quarter
 */

Cypress.Commands.add("OpenInvestorCategory", (categoryCardName, tabCategoryName, filterTahun, filterBulan, filterTriWulan) => {

    if (categoryCardName !== '') {
        const pathMap = {
            'Informasi Saham': 1,
            'Laporan Keuangan': 2,
            'Presentasi Perusahaan': 3,
            'Berita Investor': 4
        };
        const childIndex = pathMap[categoryCardName];
        cy.get(`:nth-child(${childIndex}) > .bg-trans > .card > .card-body`)
            .contains(categoryCardName)
            .scrollIntoView()
            .should('be.visible')
            .closest('div.card-product')
            .within(() => {

                // ambil href tombol ketika Lihat Detail
                cy.contains('a', 'Lihat Detail')
                    .invoke('attr', 'href')
                    .then((href) => {
                        cy.contains('a', 'Lihat Detail').click();
                        cy.url().should('include', href);
                    });
            });
    }
    else if (categoryCardName == 'Presentasi Perusahaan') {
        cy.FilterTahun(filterTahun, tabCategoryName);
        cy.FilterTriWulan(filterTriWulan, tabCategoryName);
    }
    cy.log(categoryCardName);

    if (tabCategoryName !== '') {
        cy.log(`Selecting tab: ${tabCategoryName}`);
        // Cari tab <a> berdasarkan text
        cy.get('#nav-tab-dekstop li')
            .contains('li', tabCategoryName)
            .scrollIntoView()
            .should('be.visible')
            .click();
    }
    cy.log('TEST', tabCategoryName);

    if (tabCategoryName == 'Informasi Dividen' || tabCategoryName == 'Laporan SBDK' || tabCategoryName == 'Rasio Pengungkit' || tabCategoryName == 'Pengungkapan Eksposur Risiko') {
        cy.FilterTahun(filterTahun, tabCategoryName);
    }

    if (tabCategoryName == 'Laporan Tahunan' || tabCategoryName == 'Laporan Publikasi') {
        cy.FilterTahun(filterTahun, tabCategoryName);
        cy.FilterBulan(filterBulan, tabCategoryName);
        cy.FilterTriWulan(filterTriWulan, tabCategoryName);
    }

    if (tabCategoryName == 'Aksi Perusahaan' || tabCategoryName == 'RUPS' || tabCategoryName == 'Press Release' || tabCategoryName == 'IR Newsletter' || tabCategoryName == 'Pengumuman Perusahaan') {
        cy.FilterTahun(filterTahun, tabCategoryName);
        cy.FilterBulan(filterBulan, tabCategoryName); 
    }
});

Cypress.Commands.add('FilterTahun', (filterTahun, categoryTab) => {
    cy.wait(1000)
    if (filterTahun !== '') {
        cy.log("validasi tahun informasi");
        const getCategoryID = categoryTab.toLowerCase().replaceAll(' ', '_');
        cy.get(`#${getCategoryID}`).find('#dropdownFilterYear').click()
        cy.get(`#${getCategoryID}`).find(`button[data-id="${filterTahun}"]`).click()
        cy.wait(1000);
        cy.resultFilter(categoryTab)

    } else {
        cy.log('Filter tahun kosong');
    }
});

Cypress.Commands.add('FilterBulan', (filterBulan, categoryTab) => {

    if (filterBulan !== '') {
        cy.log("validasi informasi bulan");
        const getCategoryID = categoryTab.toLowerCase().replaceAll(' ', '_');
        cy.get(`#${getCategoryID}`).find('#dropdownFilterMonth').click()
        cy.get(`#${getCategoryID}`).find('button').contains(filterBulan).click()
        cy.wait(1000);
        cy.resultFilter(categoryTab)
    } else {
        cy.log('Filter bulan kosong');
    }
});

Cypress.Commands.add('FilterTriWulan', (filterTriWulan, categoryTab) => {

    if (filterTriWulan !== '') {

        cy.log("validasi informasi triwulan");
        const getCategoryID = categoryTab.toLowerCase().replaceAll(' ', '_');
        cy.get(`#${getCategoryID}`).find('#dropdownFilterQuarter').click()
        cy.get(`#${getCategoryID}`).find('button').contains(filterTriWulan).click()
        cy.wait(1000);
        cy.resultFilter(categoryTab)

    } else {
        cy.log('Filter triwulan kosong');
    }
});

//validate page the result of filter
Cypress.Commands.add('resultFilter',(tabCategoryName) =>{
    const getReportCard = tabCategoryName.toLowerCase().replaceAll(' ', '_');
    cy.get('#'+getReportCard+'')
        .parent()
        .should('be.visible')
        .then(($el) => {
            // check data visble or not 
            if ($el.find('.card').length > 0) {
                cy.log('Card tampil');
            } else {
                cy.log('Card tidak tampil');
                cy.contains('div', 'Yah, saat ini laporan masih belum ada. Coba lagi nanti ya!.');
            }
        });
})