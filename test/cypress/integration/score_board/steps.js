import { When, Then } from "cypress-cucumber-preprocessor/steps";
import scoreBoardPage from "../pages/ScoreBoardPage.cy";

When("she opens the Score Board", () => {
    scoreBoardPage.navigate();
});

Then("she sees she has solved {int} challenge/challenges", solvedCount => {
    expect(scoreBoardPage.getSolvedCount().contains(" " + solvedCount + "/"));
});