import { INFO_BERITA_SELECTORS } from "../../selectors/info-berita.selectors";

Cypress.Commands.add("OpenInfoBeritaPage", () => {
    cy.contains('Info').click();

    cy.navigateThroughPages(
        INFO_BERITA_SELECTORS.beritaMenu,
        'Berita',
        '/articles/news'
    )
    cy.contains('h2', 'Berita').should("be.visible");
});

/**
 * @description Custom commands for view info - berita page and showing berita detail
 * @param beritaName = berfungsi untuk pencarian berita berdasarkan judul insights
 * @param beritaDate = berfungsi untuk memvalidasi halaman detail berita dan tanggal terbit berita
 * @var urlDetailBerita = berfungsi untuk mencari path href/link pada halaman berita
 */

Cypress.Commands.add("ViewBerita", (beritaName, tabBeritaCategory = 'Kerjasama', beritaDate) => {

    cy.get(INFO_BERITA_SELECTORS.kerjaSamaTab).scrollIntoView();
    cy.contains('Kerjasama').should("be.visible");

    //berfungsi untuk memvalidasi kategori tab pada halaman berita
    if (tabBeritaCategory !== 'Kerjasama' || tabBeritaCategory !== '') {
        cy.get(INFO_BERITA_SELECTORS.tabCategory).contains(tabBeritaCategory).click();
    }
    cy.log(tabBeritaCategory);

    let urlDetailBerita = '';
    cy.get('.card-body')
        .contains('a', beritaName)
        .invoke('attr', 'href')
        .then((href) => {
            cy.log('Href ditemukan:', href);
            urlDetailBerita = href;
        });

    cy.then(() => {
        const pathDetailBerita = urlDetailBerita.replace("https://bankraya.co.id", "")
        if (beritaDate !== '') {
            cy.contains(beritaDate).should("be.visible");
        }
        cy.navigateThroughPages(
            `a[href="${urlDetailBerita}"]`,
            `${beritaName}`,
            `${pathDetailBerita}`
        );
    });

    cy.contains(beritaName);
    //berfungsi untuk validasi tanggal terbit berita
    if (beritaDate !== '') {
        cy.contains(beritaDate).should("be.visible");
    }

});