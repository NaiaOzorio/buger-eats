/// <reference types="cypress" />

const faker = require('faker')

const personalInfo = {
    cpf:"31750594809",
    phone:"11972128054"
}

const addressInfo = {
    zip:"09260610",
    district: "Jardim Ana Maria",
    city: "Santo André/SP"
}

describe('Driver registration on the application', () => {
    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/')
    });

    it('Successfully registration', () => {
        const driverInfo ={
            name: faker.name.findName(),
            cpf: personalInfo.cpf,
            email: faker.internet.email(),
            phone: personalInfo.phone,
            address: {
                zip: addressInfo.zip,
                number: faker.random.number(),
                district: addressInfo.district,
                city: addressInfo.city
            },
            doc:'cnh-digital.jpg'
        }
        
        cy.get('a[href="/deliver"]').click()

        cy.gui_register(driverInfo)

        cy.contains("Moto").click()
        cy.get('input[accept="image/*"]').attachFile(driverInfo.doc)
        cy.get('.button-success').click()
        cy.get('div[class="swal2-html-container"]')
            .should('be.visible')
    }); 
    
    it('Invalid document', () => {
        const driverInfo ={
            name: faker.name.findName(),
            cpf: personalInfo.cpf+ "A",
            email: faker.internet.email(),
            phone: personalInfo.phone,
            address: {
                zip: addressInfo.zip,
                number: faker.random.number(),
                district: addressInfo.district,
                city: addressInfo.city
            },
            doc:'cnh-digital.jpg'
        }
        
        cy.get('a[href="/deliver"]').click()

        cy.gui_register(driverInfo)

        cy.contains("Moto").click()
        cy.get('input[accept="image/*"]').attachFile(driverInfo.doc)
        cy.get('.button-success').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
    });  
});

