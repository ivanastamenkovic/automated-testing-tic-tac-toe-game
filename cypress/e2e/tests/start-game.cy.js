import PlayerOne from "../pages/player-one";
import PlayerTwo from "../pages/player-two";

const playerOne = new PlayerOne();
const playerTwo = new PlayerTwo();

describe("Tic-Tac-Toe Game", () => {
  beforeEach(() => {
    cy.visit("https://maximilian-tic-tac-toe-days-40-44.netlify.app/");
  });

  it("should display correct player names after entering them", () => {
    playerOne.enterPlayerName("Ivana");
    playerTwo.enterPlayerName("Jovana");
  });
});
