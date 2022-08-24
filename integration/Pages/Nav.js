export class Nav {
  check(name, urlOrMessage) {
    cy.get(".Header_profile__rt0Qw").click({ force: true });
    cy.get(".Header_dropMenu__FrtWt").contains(name).click({ force: true });
    cy.url().should("contains", urlOrMessage);
  }
}
