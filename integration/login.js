import { Login } from "./Pages/Login";

const login = new Login();

describe("Check the Login functionality", () => {
  beforeEach(() => {
    cy.SelectVisit();
  });

  it("TC01-Log in with valid email and password", () => {
    login.login_email("test.11@gmail.com");
    login.login_password("testareaa2");
    login.validate("Login successfully");
  });

  it("TC02-Log in with valid email and blank password", () => {
    login.login_email("test.11@gmail.com");
    login.validateWrongBox("Fill all the required fields correctly.");
    login.validateWrongText("Password must be at least 8 chars long");
  });

  it("TC03-Log in with blank email and valid password", () => {
    login.login_password("testareaa2");
    login.validateWrongBox("Fill all the required fields correctly.");
    login.validateWrongText("Invalid e-mail address!");
  });

  it("TC04-Log in with valid email and invalid password", () => {
    login.login_email("test.11@gmail.com");
    login.login_password("fail.fail11");
    login.validateWrongBox("Something went wrong! Check your credentials");
  });

  it("TC05-Log in with invalid email and invalid password", () => {
    login.login_email("fail.11@gmail.com");
    login.login_password("fail.fail11");
    login.validateWrongBox("Something went wrong! Check your credentials");
  });

  it("TC06-Log in with blank email and blank password", () => {
    login.validateWrongText(
      "Invalid e-mail address!Password must be at least 8 chars long"
    );
    login.validateWrongBox("Fill all the required fields correctly.");
  });

  it("TC06(+1)-Log in with valid email and invalid password(<8)", () => {
    login.login_email("test.11@gmail.com");
    login.login_password("tes");
    login.validateWrongText("Password must be at least 8 chars long");
    login.validateWrongBox("Fill all the required fields correctly.");
  });
});

/*describe("Check the Login functionality", () => {
  beforeEach(() => {
    cy.visit("https://icy-cliff-0d86e3503.1.azurestaticapps.net");
    cy.get(".navbar-toggler-icon").click();
    cy.get(".Header_profile__rt0Qw").click();
    cy.get(".Header_dropMenu__FrtWt").contains("Profile").click();
  });
  it("TC01-Log in with valid email and password", () => {
    cy.get("#email").type("test.11@gmail.com");
    cy.get("#password").type("testareaa2");
    cy.get(".Button_primary__9MLUH").click();
    login.visit();
    cy.get(".Alert_container__EtiG1").should("contain", "Login successfully");
    cy.get(".navbar-toggler-icon").click();
    cy.get(".Header_profile__rt0Qw").click();
    cy.get(".Header_dropMenu__FrtWt > :nth-child(2)").click();
    cy.url().should(
      "contain",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/my-account/profile"
    );
  });

  it("TC02-Log in with valid email and blank password", () => {
    cy.get("#email").type("test.11@gmail.com");
    cy.get(".Button_primary__9MLUH").click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Fill all the required fields correctly."
    );
    cy.get(".Authenticate_authError__rUhhl").should(
      "contain",
      "Password must be at least 8 chars long"
    );
  });

  it("TC03-Log in with blank email and valid password", () => {
    cy.get("#password").type("testareaa2");
    cy.get(".Button_primary__9MLUH").click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Fill all the required fields correctly."
    );
    cy.get(".Authenticate_authError__rUhhl").should(
      "contain",
      "Invalid e-mail address!"
    );
  });
  it("TC04-Log in with valid email and invalid password", () => {
    cy.get("#email").type("test.11@gmail.com");
    cy.get("#password").type("fail.fail11");
    cy.get(".Button_primary__9MLUH").click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Something went wrong! Check your credentials"
    );
  });

  it("TC05-Log in with invalid email and invalid password", () => {
    cy.get("#email").type("fail.11@gmail.com");
    cy.get("#password").type("fail.fail11");
    cy.get(".Button_primary__9MLUH").click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Something went wrong! Check your credentials"
    );
  });

  it("TC06-Log in with blank email and blank password", () => {
    cy.get(".Button_primary__9MLUH").click();
    cy.get(".Authenticate_authError__rUhhl").should(
      "contain",
      "Invalid e-mail address!"
    );
    cy.get(".Authenticate_authError__rUhhl").should(
      "contain",
      "Password must be at least 8 chars long"
    );
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Fill all the required fields correctly."
    );
  });

  it("TC06(+1)-Log in with valid email and invalid password(<8)", () => {
    cy.get("#email").type("test.11@gmail.com");
    cy.get("#password").type("tes");
    cy.get(".Button_primary__9MLUH").click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Fill all the required fields correctly."
    );
    cy.get(".Authenticate_authError__rUhhl").should(
      "contain",
      "Password must be at least 8 chars long"
    );
  });
});*/
