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

  enterPlayerName(player, playerName) {
    cy.get(`#edit-${player}-btn`).click();
    this.playerNameInputField().clear().type(playerName);
    this.submitPlayerNameButton().click();
    this.playerNameOverlay().should("not.be.visible");
    cy.get(`#${player}-data h3`).should("contain.text", playerName);
  }

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

  verifyActivePlayer(expectedPlayerSelector) {
    cy.get(expectedPlayerSelector)
      .invoke("text")
      .then((expectedName) => {
        this.activePlayerName().should("have.text", expectedName.trim());
      });
  }

  gameBoard() {
    return cy.get("#game-board");
  }
}

export default Page;
