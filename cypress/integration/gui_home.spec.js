/// <reference types="cypress" />

describe('Home page', () => {
    it('Application must be online', () => {
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        //page home eh o elemento avo (div id=page-home), main eh o pai e o h1 o filho
    });   
});

