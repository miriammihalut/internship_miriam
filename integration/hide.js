import { Hide } from "./Pages/Hide";

const hide = new Hide();
describe("Hide functionality", () => {
  beforeEach(() => {
    cy.VisitHide();
  });

  it("TC59-Check hide password functionality", () => {
    hide.show();
  });

  it("TC59-Check shown to hide password functionality", () => {
    hide.show();
    hide.hide();
  });
});
