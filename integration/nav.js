import { Nav } from "./Pages/Nav";

const nav = new Nav();

describe("Check navigation to all pages", () => {
  beforeEach(() => {
    cy.beforeNav();
  });

  it("Check navigation to Add new", () => {
    cy.get(".Tabs_addNewBtn__s1wNU > .Button_button__JBBzO").click({
      force: true,
    });
    cy.url().should(
      "contains",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/add"
    );
  });

  it("Check navigation to 'Profile'", () => {
    nav.check(
      "Profile",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/my-account/profile"
    );
  });

  it("Check navigation to 'Notifications'", () => {
    nav.check(
      "Notifications",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/my-account/notifications"
    );
    //Bug;
  });

  it("Check navigation to 'Messages'", () => {
    nav.check(
      "Messages",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/my-account/messages"
    );
  });

  it("Check navigation to 'Login & security'", () => {
    nav.check(
      "Login & security",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/my-account/security"
    );
  });

  it("Check navigation to 'Logout'", () => {
    cy.get(".Header_profile__rt0Qw").click({ force: true });
    cy.get(".Header_dropMenu__FrtWt").contains("Logout").click({ force: true });
    nav.check(
      "Profile",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/login"
    );
  });

  it("Check navigation to 'Favourites'", () => {
    cy.get(".navbar-nav").contains("Favourites").click({ force: true });
    cy.url().should(
      "contains",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/favorites"
    );
  });

  it("Check navigation to 'See everything'", () => {
    cy.get(".navbar-toggler-icon").click();
    cy.get(".Carousel_headerSwiper__Rh1c2")
      .contains("See everything")
      .click({ force: true });
    cy.url().should(
      "contains",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/listing"
    );
  });
});
