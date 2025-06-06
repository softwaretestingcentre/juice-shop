import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../pages/HomePage.cy";

When('she selects {string}', juiceName => {
    homePage.openProduct(juiceName);
});

Then('she can see the details include {string}', juiceDetails => {
    expect(homePage.productStrapLine().contains(juiceDetails));
});