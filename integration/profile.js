import { Profile } from "./Pages/Profile";
const profile = new Profile();

describe("Check Profile Section", () => {
  beforeEach(() => {
    cy.beforeNav();
  });

  it("Edit name on profile section", () => {
    profile.visit();
    profile.edit("Test", "Test2");
  });

  it("Navigation to Login &security", () => {
    profile.visit();
    profile.nav(
      "Login & security",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/my-account/security"
    );
  });

  it("Navigation to Messages", () => {
    profile.visit();
    profile.nav(
      "Messages",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/my-account/messages"
    );
  });

  it("Navigation to Notifications", () => {
    profile.visit();
    profile.nav(
      "Notifications",
      "https://icy-cliff-0d86e3503.1.azurestaticapps.net/my-account/notifications"
    );
  });

  it("Navigation to Logout", () => {
    profile.visit();
    profile.nav("Logout", "https://icy-cliff-0d86e3503.1.azurestaticapps.net/");
  });
});
