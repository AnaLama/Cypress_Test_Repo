///<reference types = "Cypress"/>

describe('API Employees Test', () => {
Cypress.config('baseUrl', 'https://dummy.restapiexample.com/api/v1');

    it ('Get All Employees', () => {
   cy.request('GET', '/employees')
   .its('status')
   .should('equal', 200);
    });

    it ('Get Employe, test personal data', () => {
        cy.request('GET', '/employee/1')
        .its('body')
        .its('data')
        .should('include', {employee_name:"Tiger Nixon"})
        .and('include', {employee_salary: 320800})
        . and('include', { employee_age: 61});     
         });

         it ('Create Employe, test personal data', () => {
            const employee = {"name": "John Smith", "salary": 100000, "age": 32};
            cy.request('POST', '/create', employee)
            .its('body')
            .its('data')
            .should('include', {name: "John Smith"})
            .and('include', {salary: 100000})
            .and('include', {age: 32});     
             });
});