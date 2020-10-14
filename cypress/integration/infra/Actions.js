export default class Actions {

    constructor() {
        /*
        wait for 1.5 second
        */
        this.wait = 1500
    }

    click(element) {
        cy.wait(this.wait)
        cy.get(element).click()
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



}
