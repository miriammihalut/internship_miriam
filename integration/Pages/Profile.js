import { fullName } from "../functions";
export class Profile {
  visit() {
    cy.get(".Header_profile__rt0Qw").click({ force: true });
    cy.get(".Header_dropMenu__FrtWt")
      .contains("Profile")
      .click({ force: true });
    cy.get(".navbar-toggler-icon").click({ force: true });
  }

  edit(FirstName, LastName) {
    cy.get(":nth-child(2) > .RowItem_action__DG697").click({ force: true });
    cy.get("#firstName").click({ force: true }).clear().type(fullName());
    cy.get("#lastName").click({ force: true }).clear().type(fullName());
    cy.get(".Button_button__JBBzO").click({ force: true });
    return this;
  }

  nav(nameMenu, urlName) {
    cy.get(".MyAccount_navigation__RMK-P").contains(nameMenu).click({ force: true });
    cy.url().should("contains", urlName);
    return this;
  }
}
