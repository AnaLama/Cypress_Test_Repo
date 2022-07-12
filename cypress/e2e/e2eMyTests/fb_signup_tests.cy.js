describe('Facebook sign in sign up tests', () =>{

    beforeEach(() => {
        cy.visit('http://www.facebook.com');
        cy.get('[data-testid="open-registration-form-button"]', {timeout: 1000}).click();
    });

    it('FB signup birth date test', () =>{ 
        cy.get('#month').select('8'); 
        cy.get('#month').invoke('val').should('equal', '8');
        cy.get('#day').select('20'); 
        cy.get('#day').invoke('val').should('equal', '20');
        cy.get('#year').select('1999'); 
        cy.get('#year').invoke('val').should('equal', '1999');
    });

    it('FB signup gender radiobutton test', () =>{ 
       
       cy.get('label')
       .contains('Female')
       .siblings('input')
       .check().should('be.checked');

       cy.get('label')
       .contains('Male')
       .siblings('input')
       .check().should('be.checked');

       cy.get('label')
       .contains('Custom')
       .siblings('input')
       .check().should('be.checked');
    });

    
});



