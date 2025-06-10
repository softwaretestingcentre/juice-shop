import { When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../pages/HomePage.cy";

When("she searches for {string}", searchTerm => {
  homePage.enterSearchTerm(searchTerm);
});

Then("she sees an alert message", () => {
  cy.get("#injection").then(() => {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("xss");
    });
  });
});
