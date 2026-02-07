import { LANDING_PAGE_SELECTORS } from "../selectors/landingpage.selectors";

describe('TC001 - Landing Page - Positif - Akses Landing Page', () => {
  context(`Akses halaman Landing Page pada Website Bank Raya`, () => {

    it('Kunjungi website Bank Raya', () => {
      cy.log("Kunjungi website Bank Raya");
      cy.ensureLanguage('ID');
    });

    it('Lihat detail dan validasi Landing Page', () => {
      cy.OpenLandingPage();
    });

  })
})