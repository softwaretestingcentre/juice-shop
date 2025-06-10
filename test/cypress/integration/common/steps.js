import { Given } from "cypress-cucumber-preprocessor/steps";
import homePage from "../pages/HomePage.cy";
import scoreBoardPage from "../pages/ScoreBoardPage.cy";


Given("Haxxor goes to the Juice Shop", () => {
    homePage.navigate();
});

Then("she sees she has solved the {string} challenge", challengeName => {
    cy.expectChallengeSolved({ challenge: challengeName});
});