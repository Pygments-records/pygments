/// <reference types="cypress" />

describe("Nextjs works!", () => {
  it("Visit the homepage", () => {
    cy.visit("http:///localhost:3000");
  });
});
