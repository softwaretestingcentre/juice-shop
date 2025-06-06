import { Given } from "cypress-cucumber-preprocessor/steps";
import homePage from "../pages/HomePage.cy";


Given("Haxxor goes to the Juice Shop", () => {
    homePage.navigate();
});