describe('Booking flow - error path', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('cannot reserve directly from startpage', () => {
    // ensure reserve button is not visible without selecting an offer
    cy.contains('a', /reserve/i, { matchCase: false }).should('not.exist');
  });
});
