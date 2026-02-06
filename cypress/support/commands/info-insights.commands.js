import { INFO_INSIGHTS_SELECTORS } from "../../selectors/info-insights.selectors";

Cypress.Commands.add("OpenInfoInsightsPage", () => {
    cy.contains('Info').click();

    cy.navigateThroughPages(
        INFO_INSIGHTS_SELECTORS.insightsMenu,
        'Insights',
        '/articles/insights'
    )
    cy.contains('h2', 'Insights').should("be.visible");
});

/**
 * @description Custom commands for view info - insights page and showing insights detail
 * @param insightsName = berfungsi untuk pencarian promo berdasarkan judul insights
 * @param insightsDate = berfungsi untuk memvalidasi halaman detail insights dan tanggal terbit insights
 * @param insightsData = berfungsi untuk memvalidasi data title dan artikel pada detail insights
 * @var urlDetailInsights = berfungsi untuk mencari path href/link pada halaman insights
 */

Cypress.Commands.add("ViewInsights", (insightsName, insightsDate, insightsData) => {

    cy.get(INFO_INSIGHTS_SELECTORS.artikelTab).scrollIntoView();
    cy.contains('Artikel').should("be.visible");
    
    let urlDetailInsights = '';
    cy.get('.card-body')
        .contains('a', insightsName)
        .invoke('attr', 'href')
        .then((href) => {
            cy.log('Href ditemukan:', href);
            urlDetailInsights = href;
        });

    cy.then(() => {
        const pathDetailInsights = urlDetailInsights.replace("https://bankraya.co.id", "")
        if (insightsDate !== '') {
            cy.contains(insightsDate).should("be.visible");
        }
        cy.navigateThroughPages(
            `a[href="${urlDetailInsights}"]`,
            `${insightsName}`,
            `${pathDetailInsights}`
        );
    });

    cy.contains(insightsName);
    //berfungsi untuk validasi tanggal terbit insights
    if (insightsDate !== '') {
        cy.contains(insightsDate).should("be.visible");
    }
    
    cy.log("Data title: "+insightsData["title"]);
    cy.log("Data artikel: "+insightsData["artikel"]);

    //berfungsi untuk validasi isi title dan artikel insights
    if (insightsData["title"] !== '') {
        cy.log("validasi konten title");
        cy.contains(insightsData["title"]);
    } else if (insightsData["artikel"] !== '') {
        cy.log("validasi konten artikel");
        cy.contains(insightsData["artikel"]);
    }
});