import Actions from '../../infra/Actions'
import HomePage from '../../pom/HomePage'
import LoginPage from '../../pom/LoginPage'
import SettingsPage from '../../pom/SettingsPage'
import GlobalFeedPage from '../../pom/GlobalFeedPage'
import NewArticlePage from '../../pom/NewArticlePage'
import ProfilePage from '../../pom/ProfilePage'
import ArticlePreviewPage from '../../pom/ArticlePreviewPage'
import { setegid } from 'process'
const data = require('../../../fixtures/ChangePassToInValidPass.json')

const actions = new Actions()
const loginPage = new LoginPage()
const homePage = new HomePage()
const settingsPage = new SettingsPage()
const globalFeedPage = new GlobalFeedPage()
const newArticlePage = new NewArticlePage()
const profilePage = new ProfilePage()
const articlePreviewPage = new ArticlePreviewPage()

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
            actions.click(homePage.settingsLink)
            actions.type(settingsPage.password, '123456789')
            actions.click(settingsPage.updateSettingsButton)
            actions.click(profilePage.settingsLink)
            actions.click(settingsPage.clickHereToLogoutButton)
            actions.click(homePage.signInLink)
        })

        it('ChangePassToInValidPass test ', function () {
            actions.type(settingsPage.password, JsonObject.newPassword)
            actions.click(settingsPage.updateSettingsButton)
            actions.assertTitleEqual('Settings — Conduit')
            /*
             test verification
             */
            actions.click(settingsPage.clickHereToLogoutButton)
            actions.click(homePage.clickSignInLink)
            loginPage.logInn(JsonObject.email, JsonObject.newPassword)
            actions.assertTitleEqual('Sign in — Conduit')
            /*
            To be able to login again with the old password in the event of an error in one of the previous tests
             */
            loginPage.logIn();
        })
    })
})
