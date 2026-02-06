// Import commands.js using ES2015 syntax:
import "cypress-mochawesome-reporter/register";
import "./commands";
import "./commands/template.commands";
import "./commands/produk.commands";
import "./commands/landingpage.commands";
import "./commands/promo.commands";
import "./commands/info-berita.commands";
import "./commands/info-insights.commands";
import "./commands/info-pengumuman.commands";
import "./commands/perusahaan-tentangkami.commands";
import "./commands/perusahaan-strukturperusahaan.commands";
import "./commands/perusahaan-hubunganinvestor.commands";
import "./commands/perusahaan-tatakelola.commands";
import "./commands/perusahaan-whistleblowing.commands";
import "./commands/perusahaan-karir.commands";
import "./commands/perusahaan-asetmedia.commands";

before(() => {
  cy.log("Visit website Bank Raya");
  cy.visit(Cypress.config("baseUrl"));
  cy.url().should("eq", Cypress.config("baseUrl"));

});

after(() => {
  cy.log("Finish Test...");
});

afterEach(function () {
  cy.log("Checking if the test failed", this.currentTest.state);
  if (this.currentTest.state === "failed") {
    Cypress.stop();
  }
});

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("getComputedStyle")) {
    return false;
  }
});

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Swiper is not defined")) {
    return false;
  }
});

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Chart is not defined")) {
    return false;
  }
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // jika error berkaitan dengan "replace" di sini, abaikan
  if (err.message.includes("replace")) {
    return false;
  }
});
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("Unexpected end of input")) {
    return false;
  }
});
Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Canvas is already in use. Chart with ID '0' must be destroyed before the canvas can be reused.")) {
    return false;
  }
});
Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("null is not a function")) {
    return false;
  }
});
