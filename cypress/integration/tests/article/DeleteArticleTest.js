import Actions from '../../infra/Actions'
import constant from '../../infra/Constant'
import HomePage from '../../pom/HomePage'
import LoginPage from '../../pom/LoginPage'
import GlobalFeedPage from '../../pom/GlobalFeedPage'
import NewArticlePage from '../../pom/NewArticlePage'
import ProfilePage from '../../pom/ProfilePage'
import ArticlePreviewPage from '../../pom/ArticlePreviewPage'
const data = require('../../../fixtures/article/DeleteArticleTest.json')

const actions = new Actions()
const loginPage = new LoginPage()
const homePage = new HomePage()
const globalFeedPage = new GlobalFeedPage()
const newArticlePage = new NewArticlePage()
const profilePage = new ProfilePage()
const articlePreviewPage = new ArticlePreviewPage()

describe('article test ', () => {
    before(() => {
        cy.visit('https://demo.productionready.io/#/login')
        loginPage.logIn()
        data.forEach((JsonObject) => {
            actions.click(homePage.newArticleLink)
            actions.type(newArticlePage.title, JsonObject.title)
            actions.type(newArticlePage.articleAbout, JsonObject.articleAbout)
            actions.type(newArticlePage.body, JsonObject.body)
            actions.type(newArticlePage.tag, JsonObject.tag)
            actions.click(newArticlePage.publishArticleButton)
        })
    })
    after(() => {
        actions.click(homePage.profileLink)
        actions.click(profilePage.articleTitle)
        actions.click(articlePreviewPage.deleteArticleButton)
    })

    it('delete article test  ', function () {
        actions.click(articlePreviewPage.deleteArticleButton)
        /*
        test verification
        */
        actions.assertTitleEqual(constant.HOME_PAGE)
        actions.click(homePage.profileLink)
        actions.get(profilePage.profileLink).then(($value) => {
            const normalizeText = ($value) => $value.trim()
            var userName = normalizeText($value.text())
            actions.assertTitleEqual('@' + userName + ' — Conduit')
        })
        /*
        to insure that the element not exist in the profile Page DOM
        */
        actions.isNotContain(profilePage.articleTitle,data[1].title)
        actions.click(profilePage.homeLink)
        actions.click(homePage.globalFeedLink)
        /*
        to insure that the element not exist in the global Feed Page DOM
        */
        actions.get(globalFeedPage.articleTitle).should('not.contain', data[1].title)
    })

})
