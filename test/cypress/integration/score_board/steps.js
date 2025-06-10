import { When } from "cypress-cucumber-preprocessor/steps";
import scoreBoardPage from "../pages/ScoreBoardPage.cy";

When("she opens the Score Board", () => {
    scoreBoardPage.navigate();
});

