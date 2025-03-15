import Page from "../pages/page";
import PlayerOne from "../pages/player-one";
import PlayerTwo from "../pages/player-two";
import GameBoard from "../pages/game-board";

const page = new Page();
const playerOne = new PlayerOne();
const playerTwo = new PlayerTwo();
const gameBoard = new GameBoard();

describe("Tic-Tac-Toe - Draw Game", () => {
  beforeEach(() => {
    cy.visit("https://maximilian-tic-tac-toe-days-40-44.netlify.app/");
    playerOne.enterPlayerName("Ivana");
    playerTwo.enterPlayerName("Jovana");
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
