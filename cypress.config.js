const { defineConfig } = require("cypress");
const path = require("path");
const XLSX = require("xlsx");
// const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        readExcelFileToJson({ filePath, sheetNm, isArray2D = false }) {
          const absolutePath = path.resolve(
            __dirname,
            "cypress/fixtures",
            filePath
          );
          const workbook = XLSX.readFile(absolutePath);
          const sheetName = workbook.SheetNames.includes(sheetNm)
            ? sheetNm
            : workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];

          if (isArray2D) {
            return XLSX.utils.sheet_to_json(sheet, {
              header: 1,
              blankrows: false,
              skipHidden: true,
            });
          }

          return XLSX.utils.sheet_to_json(sheet);
        },
      });

      require("cypress-mochawesome-reporter/plugin")(on);

      const env = config.env?.ENV;
      if (env) config.baseUrl = config.env[`${env.toUpperCase()}_URL`];
      return config;
    },

    // experimentalStudio: true,
    experimentalMemoryManagement: true,
    experimentalStudio: true,
    // numTestsKeptInMemory: 0,
    defaultCommandTimeout: 25000,
    pageLoadTimeout: 25000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    testIsolation: false,
    baseUrl: "https://bankraya.co.id/",
    // reporter: 'mochawesome',
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,
      json: true,
      // timestamp: "mmddyyyy_HHMMss",
      embeddedScreenshots: true,
      includeCommands: true,
      inlineAssets: true,
      saveAllAttempts: false,
      saveHtml: true,
      saveJson: true,
      charts: true,
      code: true,
      quiet: false,
    },
    retries: {
      runMode: 2,    // rerun failed 2x saat cypress run
      openMode: 1    // rerun failed 1x saat cypress open
    },
  },
});
