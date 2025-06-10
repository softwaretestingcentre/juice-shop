import { Given } from "cypress-cucumber-preprocessor/steps";
import homePage from "../pages/HomePage.cy";

Given("Haxxor goes to the Juice Shop", () => {
    homePage.navigate();
});

When("she searches for {string}", searchTerm => {
  homePage.enterSearchTerm(searchTerm);
});

Then("she sees she has solved the {string} challenge", challengeName => {
    cy.expectChallengeSolved({ challenge: challengeName});
});