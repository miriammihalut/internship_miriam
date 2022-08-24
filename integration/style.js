describe("Page style", () => {
  beforeEach(() => {
    cy.VisitUrl();
  });

  it("Check the title name", () => {
    cy.title().should("include", "Internship 2022");
  });

  it("Check the page colour", () => {
    cy.get("body").should("have.css", "width", "983px");
  });
});
