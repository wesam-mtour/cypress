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
    data.forEach((JsonObject) => {
        before(() => {
            cy.visit('https://demo.productionready.io/#/login')
            loginPage.logIn()
            actions.click(homePage.newArticleLink)
            actions.type(newArticlePage.title, JsonObject.title)
            actions.type(newArticlePage.articleAbout, JsonObject.articleAbout)
            actions.type(newArticlePage.body, JsonObject.body)
            actions.type(newArticlePage.tag, JsonObject.tag)
            actions.click(newArticlePage.publishArticleButton)
        })

        it('delete article test  ', function () {
            actions.click(articlePreviewPage.deleteArticleButton)
            /*
            test verification
            */
            actions.assertTitleEqual(constant.HOME_PAGE)
            actions.click(homePage.profileLink)
            actions.get(profilePage.profileLink).then(($value) => {
                const normalizeText = ($value) => $value.replace(/\s/g, '')
                var userName = normalizeText($value.text())
                actions.assertTitleEqual('@' + userName + ' — Conduit')
            })
            /*
            to insure that the element not exist in the DOM
            */
            cy.get(profilePage.articleTitle).should('not.contain', JsonObject.title)

            //cy.get(profilePage.articleTitle).contains(JsonObject.title)
            //cy.get(profilePage.articleTitle).should('not.exist');
            /*
            to insure that the first article not have the same title of deleted article
            */
            actions.get(profilePage.articleTitle).first().then(($value) => {
                const text = $value.text()
                actions.assertNotEqual(text, JsonObject.title)
            })
            actions.click(profilePage.homeLink)
            actions.click(homePage.globalFeedLink)

            cy.get(profilePage.articleTitle).should('not.contain', JsonObject.title)
            actions.get(globalFeedPage.articleTitle).first().then(($value) => {
                const text = $value.text()
                actions.assertNotEqual(text, JsonObject.title)
            })
        })
    })
})
