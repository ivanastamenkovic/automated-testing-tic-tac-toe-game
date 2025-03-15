class GameBoard {
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
}

export default GameBoard;
