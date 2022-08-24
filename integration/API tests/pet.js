describe("API Tests-PET", () => {
  it("POST-Add a new pet to the store-200", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/pet", {
      id: 1233,
      category: {
        id: 0,
        name: "jhonny",
      },
      name: "laura",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    }).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.have.property("name", "laura");
    });
  });

  it("POST-Add a new pet to the store-405", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      failOnStatusCode: false,
      body: {
        id: / /,
        category: {
          id: 0,
          name: "%%%",
        },
        name: "dsad",
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: "available",
      },
    }).then((response) => {
      expect(response).to.have.property("status", 405);
      expect(response.body).to.not.be.null;
      cy.log("BUG-Invalid input status should be 405");
    });
  });

  it("POST-Updates a pet in the store with form data-200", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet/1233",
      failOnStatusCode: false,
      body: {
        name: "laura",
        status: "available",
      },
    }).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.have.property("name", "laura");
    });
  });
  it("GET-Find pet by ID-Pet found-200", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/pet/1233",
    }).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.have.property("name", "laura");
    });
  });

  it("GET-Find pet by ID-Pet not found-404", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/pet/432",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 404);
    });
  });

  it("GET-Find pet by ID-Invalid ID supplied-400", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/pet/%%%",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 400);
    });
  });

  it("GET-Finds Pets by valid status-200", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/pet/findByStatus?status=available",
    }).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
    });
  });

  it("GET-Finds Pets by invalid status-400", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/pet/findByStatus/null",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 400);
      expect(response.body).to.not.be.null;
    });
    console.log("BUG-Invalid status value should be 400");
  });

  it("PUT-Update an existing pet-200", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/pet/",
      failOnStatusCode: false,
      body: {
        id: 1233,
        category: {
          id: 0,
          name: "pets",
        },
        name: "pet",
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: "available",
      },
    }).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
      expect(response.body).to.have.property("id", 1233);
      expect(response.body).to.have.property("name", "pet");
      expect(response.body).to.have.property("status", "available");
    });
  });

  it("PUT-Update by an invalid id-404", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/pet",
      failOnStatusCode: false,
      body: {
        id: / */,
        category: {
          id: 10000,
          name: "name",
        },
        name: "name",
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: "available",
      },
    }).then((response) => {
      expect(response).to.have.property("status", 404);
      expect(response.body).to.not.be.null;
    });
  });

  it("DELETE-Deletes a pet-200", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/pet/1233",
      failOnStatusCode: false,
      body: {
        id: 1233,
        category: {
          id: 0,
          name: "pets",
        },
        name: "pet",
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: "available",
      },
    }).then((response) => {
      expect(response).to.have.property("status", 200);
    });
  });

  it("DELETE-Deletes a pet by an invalid id-404", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/pet/hjd",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 404);
    });
  });
});
