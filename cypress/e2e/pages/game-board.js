import Page from "./page";

class GameBoard extends Page {
  field(col, row) {
    return cy.get(`li[data-col="${col}"][data-row="${row}"]`);
  }

  playMoves(moves) {
    moves.forEach(([col, row, expectedClass, expectedText]) => {
      this.field(col, row)
        .click()
        .should("have.class", expectedClass)
        .and("have.text", expectedText);
    });
  }

  gameEndMessage() {
    return cy.get("#game-over").should("be.visible");
  }

  playGameDraw(moves) {
    this.playMoves(moves);
    this.gameEndMessage().should("contain.text", "It's a draw!");
  }

  playGameWin(moves) {
    this.playMoves(moves);
    cy.get("#winner-player-name")
      .invoke("text")
      .then((playerName) => {
        this.gameEndMessage().should("contain.text", `You won, ${playerName}!`);
      });
  }
}

export default GameBoard;
