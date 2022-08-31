/// <reference types="cypress" />

const faker = require('faker')

const addressInfo = {
    zip:"09260610",
    district: "Jardim Ana Maria",
    city: "Santo André/SP"
}

describe('Sign up ', () => {
    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/')
    });

    it('Sucessfully sign up new drivers', () => {
        const driverInfo ={
            name: faker.name.findName(),
            cpf: faker.datatype.uuid(),
            email: faker.internet.email(),
            phone: faker.phone.phoneFormats(),
            address: {
                zip: addressInfo.zip,
                number: faker.random.number(),
                district: addressInfo.district,
                city: addressInfo.city
            }
        }
        
        cy.get('a[href="/deliver"]').click()

        cy.gui_signUp(driverInfo)
    });   
});

