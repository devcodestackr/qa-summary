import { PERUSAHAAN_PAGE_SELECTORS } from "../../selectors/perusahaan.selectors";

Cypress.Commands.add("OpenPerusahaanPage", () => {
    cy.contains('Perusahaan').click();

    cy.navigateThroughPages(
        PERUSAHAAN_PAGE_SELECTORS.dropdownSubMenuPerusahaan,
        'Tentang Kami',
        '/corporate/about-us'
    )
    cy.contains('h2', 'Rayakan Kebersamaan').should("be.visible");
    cy.contains('.message-title', 'Pesan dari CEO').should("be.visible");
    cy.contains('.vision-title', 'Visi Bank Raya').scrollIntoView().should("be.visible");
    cy.contains('.award-title', 'Penghargaan yang dicapai Bank Raya').scrollIntoView().should("be.visible");

});

/**
 * @description Custom commands for view perusahaan - tentang kami page and showing the detail
 * @param CSRCard = using for get CSR card
 * @param CSRName = using for get CSR headline
 * @param CSRDate = using for get CSR date
 * @param CSRData = using for validate data test
 * @var {object} = artikel data test
 */

Cypress.Commands.add("ViewCSR", (CSRCard, CSRName, CSRDate, CSRData) => {

    //berfungsi untuk mmeilih card yang akan dilihat/diklik
    if (CSRCard !== '') {
        cy.get(PERUSAHAAN_PAGE_SELECTORS.CSRCard).contains(CSRCard).click();
        let urlDetailCSR = '';
        
        //berfungsi untuk memilih Program CSR  berdasarkan nama programnya
        if (CSRName !== '') {

            cy.get('.card-body')
                .contains('a', CSRName)
                .invoke('attr', 'href')
                .then((href) => {
                    cy.log('Href ditemukan:', href);
                    urlDetailCSR = href;
                });

            cy.then(() => {
                const pathDetailCSR = urlDetailCSR.replace("https://bankraya.co.id", "")
                if (CSRDate !== '') {
                    cy.contains(CSRDate).should("be.visible");
                }
                cy.navigateThroughPages(
                    `a[href="${urlDetailCSR}"]`,
                    `${CSRName}`,
                    `${pathDetailCSR}`
                );
            });

            cy.contains(CSRName);
            //berfungsi untuk validasi tanggal terbit CSR
            if (CSRDate !== '') {
                cy.contains(CSRDate).should("be.visible");
            }

            //berfungsi untuk validasi isi artikel CSR
            cy.log("Data artikel: " + CSRData);
            if (CSRData !== '') {
                cy.log("validasi konten artikel");
                cy.contains(CSRData);
            }
        } else {
            cy.contains('h4', 'Tunggu dulu ya!!').should("be.visible");
        }

    }
    cy.log(CSRCard);

});