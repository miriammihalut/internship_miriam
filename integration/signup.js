import {
  userID_Alpha,
  passwordID_Alpha,
  passwordinvalidID_Alpha,
  userwithnumbersonlyID_Alpha,
  validpassword_Alpha,
  onlynumberspassword_Alpha,
  passwordwithoutnumber_Alpha,
} from "./functions";
import { Signup } from "./Pages/Signup";

const signup = new Signup();

describe("Check the Sign Up functionality", () => {
  beforeEach(() => {
    signup.visit();
  });

  it("TC07-Sign up with valid email and password", () => {
    signup.signup_email(userID_Alpha());
    signup.signup_password("testareaa2");
    signup.validate("Account created successfully");
  });

  it("TC08-Sign up with identical email and password", () => {
    var same = userID_Alpha();
    signup.signup_email(same);
    signup.signup_password(same);
    signup.validateWrongBox("Something went wrong! Check your credentials");
  });

  it("TC09-Sign up with existing account details.", () => {
    signup.signup_email("test.11@gmail.com");
    signup.signup_password("testareaa2");
    signup.validateWrongBox("Something went wrong");
  });

  it("T10-Sign up with valid email and invalid password(without number)", () => {
    signup.signup_email(userID_Alpha());
    signup.signup_password(passwordwithoutnumber_Alpha());
    signup.validateWrongBox("Something went wrong! Check your credentials");
  });

  it("T11-Sign up with valid email and invalid password ( 5 characters, one number))", () => {
    signup.signup_email(userID_Alpha());
    signup.signup_password(passwordinvalidID_Alpha());
    signup.validateWrongText("Password must be at least 8 chars long");
    signup.validateWrongBox("Fill all the required fields correctly.");
  });

  it("T12-Sign up with invalid email (with @) and valid password.)", () => {
    signup.signup_email(userwithnumbersonlyID_Alpha());
    signup.signup_password(validpassword_Alpha());
    signup.validateWrongText("Invalid e-mail address!");
    signup.validateWrongBox("Fill all the required fields correctly.");
  });

  it("T14-Sign up with valid email and blank password.)", () => {
    signup.signup_email(userwithnumbersonlyID_Alpha());
    signup.validateWrongText("Password must be at least 8 chars long");
    signup.validateWrongBox("Fill all the required fields correctly.");
  });

  it("T15-Sign up with blank email and valid password.)", () => {
    signup.signup_password(validpassword_Alpha());
    signup.validateWrongText("Invalid e-mail address!");
    signup.validateWrongBox("Fill all the required fields correctly.");
  });

  it("T16-Sign up with blank email and blank password.)", () => {
    signup.validateWrongText(
      "Invalid e-mail address!Password must be at least 8 chars long"
    );
    signup.validateWrongBox("Fill all the required fields correctly.");
  });

  it("T16(+1)-Sign up with valid email and invalid password. (only numbers))", () => {
    signup.signup_email(userID_Alpha());
    signup.signup_password(onlynumberspassword_Alpha());
    signup.validateWrongText("Password must be at least 8 chars long");
    signup.validateWrongBox("Fill all the required fields correctly.");
  });
});
/*describe("Check the Sign Up functionality", () => {
  beforeEach(() => {
    signup.visit();
    cy.visit("https://icy-cliff-0d86e3503.1.azurestaticapps.net");
    cy.get('.navbar-toggler-icon').click()
    cy.get(".Header_profile__rt0Qw").click();
    cy.get(".Header_dropMenu__FrtWt").contains("Profile").click();
    cy.get(".Authenticate_contentContainerAuthEndForm__uUUY8")
      .contains("Sign up")
      .click();
  });

  it("TC07-Sign up with valid email and password", () => {
    cy.get("#email").should("be.visible").type(userID_Alpha());
    cy.get("#password").type("testarea111");
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_success__pvk9G").should(
      "contain",
      "Account created successfully"
    );
  });

  it("TC08-Sign up with identical email and password", () => {
    var same = userID_Alpha();
    cy.get("#email").should("be.visible").type(same);
    cy.get("#password").should("be.visible").type(same);
    cy.get(".Input_icon__U7UwM > svg").click();
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Something went wrong! Check your credentials"
    );
    cy.log('bug--TC08-7');
    //Bug(TC08-7)
  });

  it("TC09-Sign up with existing account details.", () => {
    cy.get("#email").type("test.11@gmail.com");
    cy.get("#password").type("testareaa2");
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Something went wrong"
    );
  });

  it("T10-Sign up with valid email and invalid password(without number)", () => {
    cy.get("#email").should("be.visible").type(userID_Alpha());
    cy.get("#password").should("be.visible").type(passwordID_Alpha());
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Something went wrong! Check your credentials"
    );
    //Bug(TC10-1)
  });

  it("T11-Sign up with valid email and invalid password ( 5 characters, one number))", () => {
    cy.get("#email").should("be.visible").type(userID_Alpha());
    cy.get("#password").should("be.visible").type(passwordinvalidID_Alpha());
    cy.get(".Input_icon__U7UwM > svg").click();
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Fill all the required fields correctly."
    );
  });

  it("T12-Sign up with invalid email (with @) and valid password.)", () => {
    cy.get("#email").should("be.visible").type(userwithnumbersonlyID_Alpha());
    cy.get("#password").should("be.visible").type(validpassword_Alpha());
    cy.get(".Input_icon__U7UwM > svg").click();
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Fill all the required fields correctly."
    );
    //Bug(TC12);
  });

  it("T14-Sign up with valid email and blank password.)", () => {
    cy.get("#email").should("be.visible").type(userID_Alpha());
    cy.get(".Input_icon__U7UwM > svg").click();
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Fill all the required fields correctly."
    );
  });

  it("T15-Sign up with blank email and valid password.)", () => {
    cy.get("#password").should("be.visible").type(validpassword_Alpha());
    cy.get(".Input_icon__U7UwM > svg").click();
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Fill all the required fields correctly."
    );
  });

  it("T16-Sign up with blank email and blank password.)", () => {
    cy.get(".Input_icon__U7UwM > svg").click();
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Fill all the required fields correctly."
    );
  });

  it("T16(+1)-Sign up with valid email and invalid password. (only numbers))", () => {
    cy.get("#email").should("be.visible").type(userID_Alpha());
    cy.get("#password").should("be.visible").type(onlynumberspassword_Alpha());
    cy.get(".Input_icon__U7UwM > svg").click();
    cy.get(
      ".Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO"
    ).click();
    cy.get(".Alert_container__EtiG1.Alert_danger__PAkj5").should(
      "contain",
      "Fill all the required fields correctly."
    );
    //Bug(TC16(+1)-2)
  });*/
