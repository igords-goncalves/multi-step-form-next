describe("When testing the Home page", () => {
  it("should verify if elements in page exists", () => {
    cy.visit("/");

    cy.get('[data-testid="cypress-title"]')
      .should("exist")
      .should("have.text", "Formulário Multi Etapas Exercício");
  });
});
