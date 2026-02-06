import {
  LANDING_SELECTORS,
  PRODUK_PAGE_SELECTORS,
} from "../../selectors/template.selectors";

Cypress.Commands.add("klikMenuNavbarProduk", () => {
  cy.contains(LANDING_SELECTORS.menuNavbarLink, "Produk")
    .should("be.visible")
    .click();
  cy.url().should("include", "/product-brochure");
  cy.get(PRODUK_PAGE_SELECTORS.tabProdukSemua).should("be.visible");
});

Cypress.Commands.add("klikLihatDetailSakuRaya", () => {
  cy.contains(
    `${PRODUK_PAGE_SELECTORS.sakuRayaCard} .card-title`,
    "Saku Raya"
  ).should("be.visible");
  cy.contains(`${PRODUK_PAGE_SELECTORS.sakuRayaCard} .btn`, "Lihat Detail")
    .should("be.visible")
    .click();
  cy.url().should("include", "/saku-raya");
});
