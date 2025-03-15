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

  startNewGameButton() {
    return cy.get("#start-game-btn").should("have.text", "Start New Game");
  }

  activePlayerName() {
    return cy.get("#active-player-name");
  }

  clickStartNewGameButton() {
    this.startNewGameButton().click();
    this.gameBoard().should("be.visible");
  }

  gameBoard() {
    return cy.get("#game-board");
  }
}

export default Page;
