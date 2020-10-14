class ProfilePage {
    constructor() {

        this.homeLink = 'a[ui-sref=\'app.home\']'
        this.newArticleLink = 'a[ui-sref=\'app.editor\']'
        this.settingsLink = 'a[ui-sref=\'app.settings\']'

        this.articlePreview = 'a[ui-sref=\'app.article({ slug: $ctrl.article.slug })\']'
        this.articleTitle = 'h1[ng-bind=\'$ctrl.article.title\']'
    }
}
export default ProfilePage