//var sh = require('should')
export default class Actions {

    constructor() {
        this.wait = 1000
    }
    get(element) {
        // cy.wait(this.wait)
        return cy.get(element)
    }

    click(element) {
        cy.get(element).first().click()
        cy.wait(this.wait)
        return this
    }

    forceClick(element) {
        cy.get(element).first().click({ force: true })
        cy.wait(this.wait)
        return this
    }

    clear(element) {
        //cy.wait(this.wait)
        cy.get(element).clear()
        return this
    }
    type(element, value) {
        //cy.wait(this.wait)
        cy.get(element).clear().type(value)
        return this
    }
    forceType(element, value) {
        //cy.wait(this.wait)
        cy.get(element).clear().type(value, { force: true })
        return this
    }

    assertTitleEqual(expectedValue) {
        cy.wait(this.wait)
        cy.title().should('eq', expectedValue)
        return this
    }

    assertEqual(actualValue, expectedValue) {
        cy.wait(this.wait)
        expect(actualValue).to.equal(expectedValue)
        return this
    }
    assertNotEqual(actualValue, expectedValue) {
        cy.wait(this.wait)
        expect(actualValue).to.not.equal(expectedValue)
        return this
    }

    assertNotExists(expectedValue) {
        cy.wait(this.wait)
        should.not.exist(expectedValue)
        expect(expectedValue).not.to.exist
        return this
    }
}

