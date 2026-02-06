import { PROMO_SELECTORS } from "../../selectors/promo.selectors";
/**
 * @description Custom commands for Open promo page and showing all promo
 */

Cypress.Commands.add("OpenPromoPage", () => {
    cy.navigateThroughPages(
        PROMO_SELECTORS.promoMenu,
        'Promo',
        '/promo'
    )
    cy.get(PROMO_SELECTORS.semuaPromo).scrollIntoView();
    cy.contains('div', 'Semua Promo');

});

/**
 * @description Custom commands for view promo page and showing promo detail
 * @param promoName = berfungsi untuk pencarian promo berdasarkan judul promo
 * @param promoDate = berfungsi untuk memvalidasi halaman detail promo dan jangka waktu promo
 */

Cypress.Commands.add("ViewPromo", (promoName, promoDate) => {

    cy.get(PROMO_SELECTORS.semuaPromo).scrollIntoView();
    cy.contains('div', 'Semua Promo');

    let urlDetailPromo = '';
    cy.get('.card-body')
        .contains('a', promoName)
        .invoke('attr', 'href')
        .then((href) => {
            cy.log('Href ditemukan:', href);
            urlDetailPromo = href;
        });

    cy.then(() => {
        const pathDetailPromo = urlDetailPromo.replace("https://bankraya.co.id", "")
        cy.navigateThroughPages(
            `#promoList > div > div > div.card-body > a[href="${urlDetailPromo}"]`,
            `${promoName}`,
            `${pathDetailPromo}`
        );
    });

    cy.contains(promoName);
    cy.contains(promoDate);

});