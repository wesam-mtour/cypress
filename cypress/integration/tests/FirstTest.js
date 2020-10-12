describe('My First Test', () => {


    it('Does do much!', () => {
    
        cy.visit('https://demo.productionready.io/#/login')
        cy.get('input[type=email]').type('wiasm.mtour@gmail.com')
        cy.get('input[type=password]').type('123456789')
        cy.get('button[type=submit]').click   
    })



    it('Does do mucsadsdh!', () => {
        cy.visit('https://demo.productionready.io/#/login')
        cy.title().should('eq', 'Sign in — Conduit')
    })
})

