describe('Facebook sign in sign up tests', () =>{

    beforeEach(() => {
        cy.visit('http://www.facebook.com');
    });

    it('FB title page', () =>{ 
        
        cy.get('title').invoke('text').should('equal', 'Facebook - log in or sign up');
    });

    it('FB Email and Password fields check', () =>{ 
        cy.get('[id="email"]').type('Ana@gmail.com');
        cy.get('[id="pass"]').type('12345');

        cy.get('[id="email"]').invoke("val").should('equal', 'Ana@gmail.com');
        cy.get('[id="pass"]').invoke("val").should('equal', '12345');
    });

    it('FB Create New Account Button test', () =>{ 
        cy.get('[data-testid="open-registration-form-button"]').click();
        cy.get('div').contains('Sign Up').invoke('text').should('equal', 'Sign Up');
    });
});



