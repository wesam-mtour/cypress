const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  on("task", {
    parseXlsx({ filePath }) {
      return new Promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath));
          // fs.writeFileSync("C:/Users/WesamM/Desktop/cypress/cypress/fixtures/Book1.json",jsonData.values)
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
};