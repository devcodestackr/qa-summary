import { INFO_PENGUMUMAN_SELECTORS } from "../../selectors/info-pengumuman.selectors";

Cypress.Commands.add("OpenInfoPengumumanPage", () => {
    cy.contains('Info').click();

    cy.navigateThroughPages(
        INFO_PENGUMUMAN_SELECTORS.pengumumanMenu,
        'Pengumuman',
        '/articles/announcement'
    )
    cy.contains('h2', 'Pengumuman').should("be.visible");

});

/**
 * @description Custom commands for view info - pengumuman page and showing pengumuman detail
 * @param pengumumanName = berfungsi untuk pencarian pengumuman berdasarkan judul pengumumannya
 * @param pengumumanDate = berfungsi untuk memvalidasi halaman detail pengumuman dan tanggal terbit pengumuman
 * @param pengumumanData = berfungsi untuk memvalidasi data artikel pada detail pengumuman
 * @var urlDetailPengumuman = berfungsi untuk mencari path href/link pada halaman pengumuman
 */

Cypress.Commands.add("ViewPengumuman", (pengumumanName, tabPengumumanCategory = 'Transformasi', pengumumanDate, pengumumanData) => {

    cy.get(INFO_PENGUMUMAN_SELECTORS.transformasiTab).scrollIntoView();
    cy.contains('Transformasi').should("be.visible");

    //berfungsi untuk memvalidasi kategori tab pada halaman berita
    if (tabPengumumanCategory !== 'Transformasi' || tabPengumumanCategory !== '') {
        cy.get(INFO_PENGUMUMAN_SELECTORS.tabPengumumanCategory).contains(tabPengumumanCategory).click();
    }
    cy.log(tabPengumumanCategory);

    let urlDetailPengumuman = '';
    const getIdtab = tabPengumumanCategory.toLocaleLowerCase()
    cy.get('.card-body')
        .get(`#${getIdtab} > div > div > div > div.card-body > h5 > a`).contains(pengumumanName)
        .invoke('attr', 'href')
        .then((href) => {
            cy.log('Href ditemukan:', href);
            urlDetailPengumuman = href;
        });

    cy.then(() => {
        const pathDetailPengumuman = urlDetailPengumuman.replace("https://bankraya.co.id", "")
        if (pengumumanDate !== '') {
            cy.contains(pengumumanDate).should("be.visible");
        }
        cy.navigateThroughPages(
            `a[href="${urlDetailPengumuman}"]`,
            `${pengumumanName}`,
            `${pathDetailPengumuman}`
        );
    });

    cy.contains(pengumumanName);
    //berfungsi untuk validasi tanggal terbit pengumuman
    if (pengumumanDate !== '') {
        cy.contains(pengumumanDate).should("be.visible");
    }

    //berfungsi untuk validasi isi artikel pengumuman
    cy.log("Data artikel: " + pengumumanData);
    if (pengumumanData !== '') {
        cy.log("validasi konten artikel");
        cy.contains(pengumumanData);
    }

});