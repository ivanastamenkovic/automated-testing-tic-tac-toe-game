import Page from "../pages/page";
import GameBoard from "../pages/game-board";

const page = new Page();
const gameBoard = new GameBoard();

describe("Tic-Tac-Toe - Draw Game", () => {
  beforeEach(() => {
    cy.visit("https://maximilian-tic-tac-toe-days-40-44.netlify.app/");
    page.enterPlayerName("player-1", "Ivana");
    page.enterPlayerName("player-2", "Jovana");
    page.clickStartNewGameButton();
  });

  it("should end in a draw", () => {
    gameBoard.playGameDraw();
  });

  it("player one should win", () => {
    gameBoard.playGamePlayerOneWin();
  });

  it("player two should win", () => {
    gameBoard.playGamePlayerTwoWin();
  });
});
