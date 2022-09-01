Cypress.Commands.add('gui_register', (driverInfo)=> {

        cy.get('input[name="name"]').type(driverInfo.name)
        cy.get('input[name="cpf"]').type(driverInfo.cpf)
        cy.get('input[name="email"]').type(driverInfo.email)
        cy.get('input[name="whatsapp"]').type(driverInfo.phone)
        cy.get('input[name="postalcode"]').type(driverInfo.address.zip)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(driverInfo.address.number)
        
        cy.get('input[name="address"]').should('have.value',"Rua Paulino de Lima")
        cy.get('input[name="district"]').should('have.value',driverInfo.address.district)
        cy.get('input[name="city-uf"]').should('have.value',driverInfo.address.city)
})