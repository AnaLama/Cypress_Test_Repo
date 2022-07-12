describe('Access Travel Tests', () => {
    it('AT loading test', ()=> {
    cy.visit('https://www.accesstravel.com').screenshot();
    cy.get('title').invoke('text')
    .should('equal', 'Inclusive Tours & Activities - Official Site - AccessTravels');
});

it('Logo button test', () => {
    cy.get('.logo').click();
    cy.get('h1').invoke('text').should('equal', 'Inclusive travel community');
});

it('AT Hotels Button test', () => {
    cy.get('.hotels').click();
    cy.get('.sub-heading').invoke('text').should('equal','Find Your Inclusive Hotel!')
});
});