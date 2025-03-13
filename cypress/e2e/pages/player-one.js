import Page from "./page";

class PlayerOne extends Page {
  playerOneCard() {
    return cy
      .get("#player-1-data")
      .should("be.visible")
      .should("contain.text", "Player 1");
  }

  editPlayerOneNameButton() {
    return cy
      .get("#edit-player-1-btn")
      .should("be.visible")
      .should("contain.text", "Enter player name");
  }

  playerOneName() {
    return cy.get("#player-1-data h3");
  }

  enterPlayerName(playerName) {
    this.editPlayerOneNameButton().click();
    this.playerNameInputField().clear().type(playerName);
    this.submitPlayerNameButton().click();
    this.playerNameOverlay().should("not.be.visible");
    this.playerOneName().should("contain.text", playerName);
  }
}

export default PlayerOne;
