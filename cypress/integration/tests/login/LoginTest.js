import Actions from '../../infra/Actions'
import HomePage from '../../pom/HomePage'
import LoginPage from '../../pom/LoginPage'
import SettingPage from '../../pom/SettingsPage'
const data = require('../../../fixtures/LoginTest.json')
const actions = new Actions()
const loginPage = new LoginPage()
const homePage = new HomePage()
const settignPage = new SettingPage()

describe('Log in Test', () => {
  before(() => {
    cy.visit('https://demo.productionready.io/#/login')
  })

  data.forEach((JsonObject) => {
    it('valid credential test ', function () {
      actions.type(loginPage.email, JsonObject.email)
      actions.type(loginPage.password, JsonObject.password)
      actions.click(loginPage.signInButton)
      /*
      test verification
      */
      actions.assertTitleEqual('Home — Conduit')
      actions.click(homePage.settingsLink)
      actions.click(settignPage.clickHereToLogoutButton)
      actions.click(homePage.signInLink)
    })
  })
})