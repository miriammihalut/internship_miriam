describe("API Tests-STORE", () => {
  it("POST-Create user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      failOnStatusCode: false,
      body: {
        id: 22,
        username: "test",
        firstName: "testfirst",
        lastName: "testlast",
        email: "string@gmail.com",
        password: "string2002",
        phone: "000000000",
        userStatus: 0,
      },
    }).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).not.to.be.null;
      expect(response.body).to.have.property("message", "22");
      expect(response.body).to.have.property("code", 200);
    });
  });

  it("GET-get user by user name-200", () => {
    cy.logTest();
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/test",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 200);
    });
  });

  it("GET-logs users into the system-200", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/login?username=test&password=string2002",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 200);
    });
  });

  it("GET-Logs out current logged in user session", () => {
    cy.logTest();
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/logout",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 200);
    });
  });

  it("GET-logs users into the system with invalid username/password-400", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/login?username=use&password=st",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 400);
    });
    cy.log("Bug");
  });

  it("GET-Logs out current logged in user session", () => {
    cy.logTest();
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/logout",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 200);
    });
  });

  it("DELETE-delete invalid username-400", () => {
    cy.logTest();
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/%%%",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 400);
    });
  });

  it("DELETE-delete user(user not found-404)", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/787",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 404);
    });
  });

  it("DELETE-delete username-200", () => {
    cy.logTest();
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/test",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 200);
    });
  });

  it("POST-Creates list of users with given input array", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithArray",
      failOnStatusCode: false,
      body: [
        {
          id: 23,
          username: "users",
          firstName: "usersfirst",
          lastName: "userslast",
          email: "users@gmail.com",
          password: "string23",
          phone: "00000000",
          userStatus: 0,
        },
      ],
    }).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).not.to.be.null;
      expect(response.body).to.have.property("message", "ok");
      expect(response.body).to.have.property("code", 200);
    });
  });

  it("PUT-Updated user-200", () => {
    cy.logTest();
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/users",
      failOnStatusCode: false,
      body: [
        {
          id: 2,
          username: "update",
          firstName: "updatefirst",
          lastName: "updatelast",
          email: "update@gmail.com",
          password: "update23",
          phone: "00000000",
          userStatus: 0,
        },
      ],
    }).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).not.to.be.null;
    });
  });

  it("PUT-Updated user-400", () => {
    cy.logTest();
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/%%%",
      failOnStatusCode: false,
      body: [
        {
          id: 2,
          username: "update",
          firstName: "updatefirst",
          lastName: "updatelast",
          email: "update@gmail.com",
          password: "update23",
          phone: "00000000",
          userStatus: 0,
        },
      ],
    }).then((response) => {
      expect(response).to.have.property("status", 400);
      expect(response.body).not.to.be.null;
    });
  });

  it("PUT-Updated user(User not found-404)", () => {
    cy.logTest();
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/usus",
      failOnStatusCode: false,
      body: [
        {
          id: 2,
          username: "update",
          firstName: "updatefirst",
          lastName: "updatelast",
          email: "update@gmail.com",
          password: "update23",
          phone: "00000000",
          userStatus: 0,
        },
      ],
    }).then((response) => {
      expect(response).to.have.property("status", 404);
      expect(response.body).not.to.be.null;
    });
  });
  
  it("DELETE-delete username-200", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/users",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property("status", 200);
    });
  });
});
