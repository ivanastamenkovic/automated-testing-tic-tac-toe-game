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
    const moves = [
      [1, 1, "disabled-x", "X"],
      [2, 1, "disabled-o", "O"],
      [3, 1, "disabled-x", "X"],
      [1, 2, "disabled-o", "O"],
      [3, 2, "disabled-x", "X"],
      [2, 2, "disabled-o", "O"],
      [2, 3, "disabled-x", "X"],
      [3, 3, "disabled-o", "O"],
      [1, 3, "disabled-x", "X"],
    ];
    gameBoard.playGameDraw(moves);
  });

  it("player one should win", () => {
    const moves = [
      [1, 1, "disabled-x", "X"],
      [2, 1, "disabled-o", "O"],
      [3, 1, "disabled-x", "X"],
      [1, 2, "disabled-o", "O"],
      [2, 2, "disabled-x", "X"],
      [3, 2, "disabled-o", "O"],
      [1, 3, "disabled-x", "X"],
    ];
    gameBoard.playGameWin(moves);
  });

  it("player two should win", () => {
    const moves = [
      [1, 1, "disabled-x", "X"],
      [1, 2, "disabled-o", "O"],
      [2, 1, "disabled-x", "X"],
      [2, 2, "disabled-o", "O"],
      [3, 3, "disabled-x", "X"],
      [3, 2, "disabled-o", "O"],
    ];
    gameBoard.playGameWin(moves);
  });
});
