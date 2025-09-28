describe('Booking flow - happy path', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('go from startpage to offer and reserve', () => {
    // click first apartment in carousel
    cy.get('.carousel a[role="link"]').first().click();

    // check that offer page is visible
    cy.get('h2')
      .contains(/hosted in/i)
      .should('be.visible');

    // check reserve button
    cy.contains('a', /reserve/i).should('be.visible');

    // check tel: link
    cy.get('a[href^="tel:"]').should('exist');
  });
});
