import { constants } from 'buffer'
import Actions from '../../infra/Actions'
import constant from '../../infra/Constant'
import HomePage from '../../pom/HomePage'
import LoginPage from '../../pom/LoginPage'
import SettingPage from '../../pom/SettingsPage'
const data = require('../../../fixtures/login/LoginTest.json')
const actions = new Actions()
const loginPage = new LoginPage()
const homePage = new HomePage()
const settignPage = new SettingPage()

describe('aaaaa', () => {
    before(() => {
      cy.visit('https://demo.productionready.io/#/login')
    })
    it('abc ', function () {
        cy.wait(2000)  
  
      })

    it.skip('ab ', function () {

        cy.wait(2000)  
    })

  })

  describe('aaaa', () => {
    before(() => {
      cy.visit('https://demo.productionready.io/#/login')
    })
    it('ab ', function () {
        cy.wait(2000)  
  
      })

    it('a ', function () {

        cy.wait(2000)  
    })

  })
  
