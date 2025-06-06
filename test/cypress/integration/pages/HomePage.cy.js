class HomePage {
    navigate() {
        cy.visit('/#/');
    }
    openProduct(productName) {
        cy.get("mat-grid-tile").contains(productName).click();
    }
    productStrapLine() {
        return cy.get("app-product-details");
    }
}

const homePage = new HomePage();
export default homePage;