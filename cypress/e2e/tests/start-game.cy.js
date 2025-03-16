import Page from "../pages/page";

const page = new Page();

describe("Tic-Tac-Toe Game", () => {
  beforeEach(() => {
    cy.visit("https://maximilian-tic-tac-toe-days-40-44.netlify.app/");
  });

  it("should display correct player names after entering them", () => {
    page.enterPlayerName("player-1", "Ivana");
    page.enterPlayerName("player-2", "Jovana");
  });

  it("should start new game after clicking the Start New Game button", () => {
    page.enterPlayerName("player-1", "Ivana");
    page.enterPlayerName("player-2", "Jovana");
    page.clickStartNewGameButton();
    page.verifyActivePlayer("#player-1-data h3");
  });
});
