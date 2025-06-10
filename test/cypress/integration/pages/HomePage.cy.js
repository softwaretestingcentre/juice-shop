class HomePage {
  navigate() {
    cy.visit("/#/");
  }
  openProduct(productName) {
    cy.get("mat-grid-tile").contains(productName).click();
  }
  productStrapLine() {
    return cy.get("app-product-details");
  }
  enterSearchTerm(searchTerm) {
    cy.get("#searchQuery").click();
    cy.get("app-mat-search-bar input")
      .type(searchTerm)
      .type("{enter}");
  }
}

const homePage = new HomePage();
export default homePage;
