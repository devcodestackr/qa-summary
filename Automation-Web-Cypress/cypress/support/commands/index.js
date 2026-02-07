// -- Read Excel File --
Cypress.Commands.add(
  "readExcelFile",
  ({ filePath, sheetNm = null, isArray2D = false }) => {
    return cy.task("readExcelFileToJson", { filePath, sheetNm, isArray2D });
  }
);

Cypress.Commands.add("navigateThroughPages", (selector, textSelector, url) => {
  cy.get(selector).contains(textSelector).should("be.visible").click();
  cy.url().should("include", url);
});

// -- Input type --
Cypress.Commands.add("typeInput", (selector, text) => {
  cy.get(selector).should("be.visible").clear().type(text);
  cy.get(selector).should("have.value", text);
});

// -- convert to format money
Cypress.Commands.add(
  "formatMoney",
  ({
    number,
    local = "id-ID",
    isRemoveDecimal = false,
    formatAsThousands = false,
    isRound = false,
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  }) => {
    // Format dalam ribuan rupiah?
    if (formatAsThousands && typeof number === "number" && number !== 0) {
      number = number / 1000;
    }

    // Format angka dengan 2 digit di belakang koma
    let formatted = new Intl.NumberFormat(local, {
      style: "decimal",
      minimumFractionDigits: isRound ? 0 : minimumFractionDigits,
      maximumFractionDigits: isRound ? 0 : maximumFractionDigits,
    }).format(number);

    // Hilangkan ",00" jika angka adalah bilangan bulat
    if (isRemoveDecimal && Number.isInteger(number) && number !== 0) {
      formatted = formatted.replace(/,(0|00)$/, "");
    }

    return cy.wrap(formatted);
  }
);
