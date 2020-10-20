import Actions from '../../infra/Actions'
import constant from '../../infra/Constant'
import HomePage from '../../pom/HomePage'
import LoginPage from '../../pom/LoginPage'
import SettingsPage from '../../pom/SettingsPage'
import ProfilePage from '../../pom/ProfilePage'
const data = require('../../../fixtures/settings/ChangePassToInValidPass.json')

const actions = new Actions()
const loginPage = new LoginPage()
const homePage = new HomePage()
const settingsPage = new SettingsPage()
const profilePage = new ProfilePage()

data.forEach((JsonObject) => {
    describe('settings test ', () => {
        before(() => {
            cy.visit('https://demo.productionready.io/#/login')
        })

        beforeEach(() => {
            loginPage.logIn()
            actions.click(homePage.settingsLink)
        })

        afterEach(() => {
            actions.forceClick(homePage.settingsLink)
            actions.forceType(settingsPage.password, '123456789')
            actions.forceClick(settingsPage.updateSettingsButton)
            actions.forceClick(profilePage.settingsLink)
            actions.forceClick(settingsPage.clickHereToLogoutButton)
            actions.forceClick(homePage.signInLink)
        })

        it('ChangePassToInValidPass test ', function () {
            actions.type(settingsPage.password, JsonObject.newPassword)
            actions.click(settingsPage.updateSettingsButton)
            /*
             test verification
             */
            actions.assertTitleEqual(constant.SETTINGS_PAGE)
            actions.isVisible(settingsPage.errorMessage)
            actions.get(settingsPage.errorMessage).then(($text) => {
                
                const normalizeText = ($text) => $text.trim()
                var message = normalizeText($text.text())
                actions.assertEqual(message,JsonObject.expectedErrorMessage)
            })   
            actions.click(settingsPage.clickHereToLogoutButton)
            actions.click(homePage.signInLink)
            loginPage.logInn(JsonObject.email, JsonObject.newPassword)
            actions.assertTitleEqual(constant.SIGN_IN_PAGE)
            /*
            To be able to login again with the old password in the event of an error in one of the previous tests
             */
            loginPage.logIn();
        })
    })
})
