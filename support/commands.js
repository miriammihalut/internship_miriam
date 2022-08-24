Cypress.Commands.add("SelectVisit", () => {
  cy.visit(Cypress.env("Internship"));
  cy.get(".navbar-toggler-icon").click();
  cy.get(".Header_profile__rt0Qw").click();
  cy.get(".Header_dropMenu__FrtWt").contains("Profile").click();
});

Cypress.Commands.add("VisitUrl", () => {
  cy.visit(Cypress.env("Internship"));
});

Cypress.Commands.add("VisitHide", () => {
  cy.visit("https://icy-cliff-0d86e3503.1.azurestaticapps.net");
  cy.get(".navbar-toggler-icon").click();
  cy.get(".Header_profile__rt0Qw").click();
  cy.get(".Header_dropMenu__FrtWt").contains("Profile").click();
});

Cypress.Commands.add("beforeNav", () => {
  cy.visit("https://icy-cliff-0d86e3503.1.azurestaticapps.net");
  cy.get(".Header_profile__rt0Qw").click({ force: true });
  cy.get(".Header_dropMenu__FrtWt").contains("Profile").click({ force: true });
  cy.get("#email").type("test.11@gmail.com");
  cy.get("#password").type("testareaa2");
  cy.get(".Button_primary__9MLUH").click({ force: true });
  cy.get(".navbar-toggler-icon").click({ force: true });
});


Cypress.Commands.add("logTest", () => {
  cy.request({
    method: "GET",
    url: "https://petstore.swagger.io/v2/user/login?username=test&password=string2002",
    failOnStatusCode: false,
  }).then((response) => {
    expect(response).to.have.property("status", 200);
  });
});

