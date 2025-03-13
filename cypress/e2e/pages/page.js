class Page {
  gameTitle() {
    return cy.get("h1").should("have.text", "Tic-Tac-Toe");
  }

  playerNameOverlay() {
    return cy.get("#config-overlay");
  }

  playerNameInputField() {
    return cy.get("#playername");
  }

  submitPlayerNameButton() {
    return cy
      .get("#config-overlay button[type='submit']")
      .should("contain.text", "Confirm");
  }

  enterPlayerName() {}
}

export default Page;
