import Page from "../pages/page";
import PlayerOne from "../pages/player-one";
import PlayerTwo from "../pages/player-two";

const page = new Page();
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

  it("should start new game after clicking the Start New Game button", () => {
    playerOne.enterPlayerName("Ivana");
    playerTwo.enterPlayerName("Jovana");
    page.clickStartNewGameButton();
    playerOne
    .playerOneName()
    .invoke("text")
    .then((expectedName) => {
      page.activePlayerName().should("have.text", expectedName.trim());
    });
  });
});
