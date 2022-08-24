export class Hide {
  show() {
    cy.get("#password").type("parola");
    cy.get('input[type="password"]#password').should("exist");
    cy.get(".Input_icon__U7UwM > svg").click();
    cy.get('input[type="text"]#password').should("exist");
  }
  hide() {
    cy.get(".Input_icon__U7UwM > svg").click();
    cy.get('input[type="password"]#password').should("exist");
  }
}
