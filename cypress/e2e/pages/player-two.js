import Page from "./page";

class PlayerTwo extends Page {
  playerTwoCard() {
    return cy
      .get("#player-2-data")
      .should("be.visible")
      .should("contain.text", "Player 2");
  }

  editPlayerTwoNameButton() {
    return cy
      .get("#edit-player-2-btn")
      .should("be.visible")
      .should("contain.text", "Enter player name");
  }

  playerTwoName() {
    return cy.get("#player-2-data h3");
  }

  enterPlayerName(playerName) {
    this.editPlayerTwoNameButton().click();
    this.playerNameInputField().clear().type(playerName);
    this.submitPlayerNameButton().click();
    this.playerNameOverlay().should("not.be.visible");
    this.playerTwoName().should("contain.text", playerName);
  }
}

export default PlayerTwo;
