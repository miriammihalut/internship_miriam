export class Signup {
  visit() {
    cy.SelectVisit();
    cy.get(".Authenticate_contentContainerAuthEndForm__uUUY8")
      .contains("Sign up")
      .click();
  }

  signup_email(userName) {
    cy.get("#email").type(userName);
    return this;
  }

  signup_password(password) {
    cy.get("#password").type(password);
    return this;
  }

  validate(expectedText) {
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_success__pvk9G").should(
      "have.text",
      expectedText
    );
    return this;
  }

  validateWrongText(expectedText) {
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Authenticate_authError__rUhhl").should("have.text", expectedText);
    return this;
  }

  validateWrongBox(expectedText) {
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "have.text",
      expectedText
    );
    return this;
  }
}
