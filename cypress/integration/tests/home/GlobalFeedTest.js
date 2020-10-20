import Actions from '../../infra/Actions'
import constant from '../../infra/Constant'
import HomePage from '../../pom/HomePage'
import LoginPage from '../../pom/LoginPage'
import GlobalFeedPage from '../../pom/GlobalFeedPage'

const actions = new Actions()
const loginPage = new LoginPage()
const homePage = new HomePage()
const globalFeedPage = new GlobalFeedPage()

describe('article test ', () => {
    before(() => {
        cy.visit('https://demo.productionready.io/#/login')
        loginPage.logIn()
        actions.click(homePage.globalFeedLink)
    })

    it('like article test  ', function () {
        actions.get(globalFeedPage.likeButton).each(($item, index) => {
            actions.get($item).then(($value) => {
                var normalizeText = ($value) => $value.trim()
                var oldValue = normalizeText($value.text())
                console.log("oldValue")
                console.log(oldValue)

                actions.click($item)

                actions.get($item).then(($value) => {
                    var normalizeText = ($value) => $value.trim()
                    const newValue = normalizeText($value.text())
                    console.log("new after")
                    console.log(newValue)
                    actions.assertEqual((newValue - 0), ((oldValue - 0) + 1))
                })
            })
        })
    })
})
