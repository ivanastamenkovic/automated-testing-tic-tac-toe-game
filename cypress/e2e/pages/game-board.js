import Page from "./page";

class GameBoard extends Page {
  fieldTopLeft() {
    return cy.get('li[data-col="1"][data-row="1"]');
  }

  fieldTopMiddle() {
    return cy.get('li[data-col="2"][data-row="1"]');
  }

  fieldTopRight() {
    return cy.get('li[data-col="3"][data-row="1"]');
  }

  fieldMiddleLeft() {
    return cy.get('li[data-col="1"][data-row="2"]');
  }

  fieldMiddle() {
    return cy.get('li[data-col="2"][data-row="2"]');
  }

  fieldMiddleRight() {
    return cy.get('li[data-col="3"][data-row="2"]');
  }

  fieldBottomLeft() {
    return cy.get('li[data-col="1"][data-row="3"]');
  }

  fieldBottomMiddle() {
    return cy.get('li[data-col="2"][data-row="3"]');
  }

  fieldBottomRight() {
    return cy.get('li[data-col="3"][data-row="3"]');
  }

  gameEndMessage() {
    return cy.get("#game-over").should("be.visible");
  }

  playGameDraw() {
    this.fieldTopLeft()
      .click()
      .should("have.class", "disabled-x")
      .and("have.text", "X");
    this.fieldTopMiddle()
      .click()
      .should("have.class", "disabled-o")
      .and("have.text", "O");
    this.fieldTopRight()
      .click()
      .should("have.class", "disabled-x")
      .and("have.text", "X");
    this.fieldMiddleLeft()
      .click()
      .should("have.class", "disabled-o")
      .and("have.text", "O");
    this.fieldMiddleRight()
      .click()
      .should("have.class", "disabled-x")
      .and("have.text", "X");
    this.fieldMiddle()
      .click()
      .should("have.class", "disabled-o")
      .and("have.text", "O");
    this.fieldBottomMiddle()
      .click()
      .should("have.class", "disabled-x")
      .and("have.text", "X");
    this.fieldBottomRight()
      .click()
      .should("have.class", "disabled-o")
      .and("have.text", "O");
    this.fieldBottomLeft()
      .click()
      .should("have.class", "disabled-x")
      .and("have.text", "X");
    this.gameEndMessage().should("contain.text", "It's a draw!");
  }

  playGamePlayerOneWin() {
    this.fieldTopLeft()
      .click()
      .should("have.class", "disabled-x")
      .and("have.text", "X");
    this.fieldTopMiddle()
      .click()
      .should("have.class", "disabled-o")
      .and("have.text", "O");
    this.fieldTopRight()
      .click()
      .should("have.class", "disabled-x")
      .and("have.text", "X");
    this.fieldMiddleLeft()
      .click()
      .should("have.class", "disabled-o")
      .and("have.text", "O");
    this.fieldMiddle()
      .click()
      .should("have.class", "disabled-x")
      .and("have.text", "X");
    this.fieldMiddleRight()
      .click()
      .should("have.class", "disabled-o")
      .and("have.text", "O");
    this.fieldBottomLeft()
      .click()
      .should("have.class", "disabled-x")
      .and("have.text", "X");
    cy.get("#winner-player-name")
      .invoke("text")
      .then((playerName) => {
        this.gameEndMessage().should("contain.text", `You won, ${playerName}!`);
      });
  }
}

export default GameBoard;
