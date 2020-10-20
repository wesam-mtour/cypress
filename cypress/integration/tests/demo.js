

describe('excel parser ', () => {


    it('valid credential test ', function () {

        cy.visit('https://demo.productionready.io/#/login')

        cy.parseXlsx("C:/Users/WesamM/Desktop/cypress/cypress/fixtures/Book1.xlsx").then(jsonData => {
            console.log(jsonData)
            console.log(jsonData[0].name)
            console.log(jsonData[0].data[1][0])
            console.log(jsonData[0].data[1][1])
            console.log(jsonData[0].data[2])
        }
        );
    })
})