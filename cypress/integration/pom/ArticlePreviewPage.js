class ArticlePreviewPage {
    constructor() {
        this.homeLink = 'a[ui-sref=\'app.home\']'
        this.newArticleLink = 'a[ui-sref=app.editor]'
        this.settingsLink = 'a[ui-sref=\'app.settings\']'
        this.profileLink = 'a[ui-sref=\'app.profile.main({ username: $ctrl.currentUser.username })\']'
        this.deleteArticleButton = 'button[ng-click=\'$ctrl.deleteArticle()\']'
    }
}
export default ArticlePreviewPage