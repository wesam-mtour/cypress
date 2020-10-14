class NewArticlePage {
    constructor() {
        /*
        top navigation bar
        */
        this.homeLink = 'a[ui-sref=\'app.home\']'
        this.settingsLink = 'a[ui-sref=\'app.settings\']'
        this.profileLink = 'a[ui-sref=\'app.profile.main({ username: $ctrl.currentUser.username })\']'
        /*
         end top navigation bar
         */

        this.title = 'input[ng-model=\'$ctrl.article.title\']'
        this.articleAbout = 'input[ng-model=\'$ctrl.article.description\']'
        this.body = 'textarea[ng-model=\'$ctrl.article.body\']'
        this.tag = 'input[ng-model=\'$ctrl.tagField\']'
        this.publishArticleButton = 'button[type=\'button\']'

    }
}
export default NewArticlePage