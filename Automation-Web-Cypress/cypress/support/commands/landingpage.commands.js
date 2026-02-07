import { LANDING_PAGE_SELECTORS } from "../../selectors/landingpage.selectors";

Cypress.Commands.add('ensureLanguage', (targetLang = 'ID') => {
  cy.get('.navbar-language a.active span')
    .invoke('text')
    .then((lang) => {
      const currentLang = lang.trim().toUpperCase();

      if (currentLang !== targetLang.toUpperCase()) {
        cy.log(`🌐 Mengganti bahasa dari ${currentLang} ke ${targetLang}`);

        cy.get(`.navbar-language a[href*="/lang/${targetLang.toLowerCase()}"]`)
          .click({ force: true });

        // Validasi URL & teks bahasa aktif
        cy.url({ timeout: 10000 }).should('include', `/lang/${targetLang.toLowerCase()}`);
        cy.get('.navbar-language a.active span')
          .should('contain.text', targetLang.toUpperCase());

        cy.log(`✅ Bahasa berhasil diganti ke ${targetLang}`);
      } else {
        cy.log(`✅ Sudah dalam bahasa ${targetLang}`);
      }
    });
});

Cypress.Commands.add("OpenLandingPage", () => {

  cy.get('#kenalan-sama-raya').scrollIntoView();
  cy.contains('h2', 'Yuk, kenalan sama Raya').should("be.visible");
  cy.contains('h3', 'Top 3 Bank Digital').should("be.visible");
  cy.get('#promo-lg').scrollIntoView();
  cy.contains('h3', 'Promo hanya untukmu').should("be.visible");
  cy.get('#product-raya').scrollIntoView();
  cy.contains('h3', 'Kelola keuangan pribadi dan usaha di satu aplikasi').should("be.visible");
  cy.get('#fitur-raya-web').scrollIntoView();
  cy.contains('h3', 'Kenapa pilih nabung di Raya?').should("be.visible");
  cy.get('#misi-seru').scrollIntoView();
  cy.contains('h2', 'Mulai atur keuanganmu dalam setiap momen').should("be.visible");
  cy.contains('h3', 'Berbagai macam Saku untuk kebutuhanmu').should("be.visible");
  cy.contains('h3', 'Transaksi aman, makin nyaman').should("be.visible");
  cy.get('#download-raya').scrollIntoView();
  cy.contains('h2', 'Tunggu apalagi, yuk gunakan aplikasi Raya sekarang juga!').should("be.visible");
  cy.get('#award').scrollIntoView();
  cy.contains('h2', 'Penghargaan yang dicapai Bank Raya').should("be.visible");
  cy.get('#informasi-seputar-raya-web').scrollIntoView();
  cy.contains('h4', 'Informasi seputar Bank Raya').should("be.visible");

});
