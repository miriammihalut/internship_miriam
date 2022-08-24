export class Login {
  login_email(userName) {
    cy.get("#email").type(userName);
    return this;
  }

  login_password(password) {
    cy.get("#password").type(password);
    return this;
  }

  validate(expectedText) {
    cy.get(".Button_primary__9MLUH").click();
    cy.get(".Alert_container__EtiG1").should("have.text", expectedText);
    return this;
  }

  validateWrongText(expectedText) {
    cy.get(".Button_primary__9MLUH").click();
    cy.get(".Authenticate_authError__rUhhl").should("have.text", expectedText);
    return this;
  }

  validateWrongBox(expectedText) {
    cy.get(".Button_primary__9MLUH").click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "have.text",
      expectedText
    );
    return this;
  }
}
