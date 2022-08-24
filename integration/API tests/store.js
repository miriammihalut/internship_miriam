describe("API Tests-STORE", () => {
  it("GET-Return pet inventories by status-200", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/store/inventory").then(
      (response) => {
        expect(response).to.have.property("status", 200);
        expect(response.body).not.to.be.null;
        expect(response.body).to.have.property("available");
        expect(response.body).to.have.property("sold");
        expect(response.body).to.have.property("string");
      }
    );
  });

  it("POST-Place an order for a pet-200", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/store/order",
      body: {
        id: 5,
        petId: 0,
        quantity: 3,
        shipDate: "2022-08-24T14:55:42.253Z",
        status: "placed",
        complete: true,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("status", "placed");
      expect(response.body).to.have.property("id", 5);
      expect(response.body).to.have.property("quantity", 3);
    });
  });

  it("POST-Place an invalid order for a pet-400", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/store/order",
      body: {
        id: "aa",
        petId: 0,
        quantity: 3,
        shipDate: "2022-08-24T14:55:42.253Z",
        status: "placed",
        complete: true,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });

  it("GET-Find purchase order by ID-200", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/store/order/5").then(
      (response) => {
        expect(response).to.have.property("status", 200);
        expect(response.body).not.to.be.null;
        expect(response.body).to.have.property("status", "placed");
        expect(response.body).to.have.property("id", 5);
        expect(response.body).to.have.property("quantity", 3);
      }
    );
  });

  it("GET-Search for purchase order by invalid ID-405", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/store/order",
      failOnStatusCode: false,
      body: {
        orderId: "aa",
      },
    }).then((response) => {
      expect(response).to.have.property("status", 405);
      expect(response.body).not.to.be.null;
    });
  });

  it("GET-Search for purchase order by invalid ID-404", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/store/order2",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 404);
      expect(response.body).not.to.be.null;
    });
  });

  it("DELETE-Delete purchase by ID-200", () => {
    cy.request("DELETE", "https://petstore.swagger.io/v2/store/order/5").then(
      (response) => {
        expect(response.status).to.equal(200);
      }
    );
  });

  it("DELETE-Delete purchase by invalid ID-404", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/store/order/aa",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
