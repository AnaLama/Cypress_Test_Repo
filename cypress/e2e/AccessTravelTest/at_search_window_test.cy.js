describe('Access Travel Search Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.accesstravel.com/en-US/Hotel/List');
    });

    it('Destination field test', ()=> {
        cy.get('#Filter_DestinationId').select('Paris');
        cy.get('#Filter_DestinationId').invoke('text').should('contains', 'Paris');     
});

it('Empty field negative test', ()=> {
    cy.get('.form-centered > .btn').click();
    cy.get('[data-valmsg-for="Filter.DestinationId"]').invoke('text').should('equal','Destination Required');
});

  it('CheckIn Field test', () => {
     cy.get('#Filter_DestinationId').select('Paris');
     cy.get('[name="Filter.CheckIn"]').clear().type('2023-09-30');
     cy.get('[name="Filter.CheckOut"]').clear().type('2023-10-15');
     cy.get('[id="Filter_AdultNum"]').clear().type(3);
     cy.get('[id="Filter_ChildrenNum"]').clear().type(1).click();
     cy.get('.form-centered > .btn').click();
     cy.get('[name="Filter.ChildrensAge[0]"]').clear().type(2);
     cy.get('.form-centered > .btn').click();
     cy.contains('View Hotel').should('be.be.visible');
 });
});