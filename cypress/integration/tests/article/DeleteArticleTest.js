import Actions from '../../infra/Actions'
import HomePage from '../../pom/HomePage'
import LoginPage from '../../pom/LoginPage'
import SettingPage from '../../pom/SettingsPage'
import NewArticlePage from '../../pom/NewArticlePage'
import ProfilePage from '../../pom/ProfilePage'
import ArticlePreviewPage from '../../pom/ArticlePreviewPage'
const data = require('../../../fixtures/DeleteArticleTest.json')

const actions = new Actions()
const loginPage = new LoginPage()
const homePage = new HomePage()
const settignPage = new SettingPage()
const newArticlePage = new NewArticlePage()
const profilePage = new ProfilePage()
const articlePreviewPage = new ArticlePreviewPage()


describe('delte test ', () => {
    data.forEach((JsonObject) => {
        before(() => {
            cy.visit('https://demo.productionready.io/#/login')
            actions.type(loginPage.email, 'wiasm.mtour@gmail.com')
            actions.type(loginPage.password, '123456789')
            actions.click(loginPage.signInButton)
            actions.click(homePage.newArticleLink)
            actions.type(newArticlePage.title, JsonObject.title)
            actions.type(newArticlePage.articleAbout, JsonObject.articleAbout)
            actions.type(newArticlePage.body, JsonObject.body)
            actions.type(newArticlePage.tag, JsonObject.tag)
            actions.click(newArticlePage.publishArticleButton)
        })

        it('valid credential test  ', function () {
            actions.click(articlePreviewPage.deleteArticleButton)
            actions.assertTitleEqual('Home — Conduit')
            // actions.click(loginPage.signInButton)
            // actions.assertTitleEqual('Sign in — Conduit')
            // actions.click(homePage.settingsLink)
            // actions.click(settignPage.clickHereToLogout)
            // actions.click(homePage.signInLink)
        })
    })
})