export default class Actions {

    constructor() {
        /*
        wait for 1.5 second
        */
        this.wait = 1500
    }
    get(element) {
        cy.wait(this.wait)
        return cy.get(element)
    }

    click(element) {
        cy.wait(this.wait)
        cy.get(element).first().click()
        return this
    }
    clear(element) {
        cy.wait(this.wait)
        cy.get(element).clear()
        return this
    }
    type(element, value) {
        cy.wait(this.wait)
        cy.get(element).clear().type(value)
        return this
    }

    assertTitleEqual(expectedValue) {
        cy.title().should('eq', expectedValue)
        return this
    }

    assertEqual(actualValue, expectedValue) {
        expect(actualValue).to.equal(expectedValue)
        return this
    }
    assertNotEqual(actualValue, expectedValue) {
        expect(actualValue).to.not.equal(expectedValue)
        return this
    }
}

