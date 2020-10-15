class GlobalFeedPage {
    constructor() {
        /*
         top navigation bar
         */
        this.newArticleLink = 'a[ui-sref=\'app.editor\']'
        this.settingsLink = 'a[ui-sref=\'app.settings\']'
        this.profileLink = 'a[ui-sref=\'app.profile.main({ username: $ctrl.currentUser.username })\']'
        /*
         end top navigation bar
        */
        this.articleTitle = 'h1[ng-bind=\'$ctrl.article.title\']'
        this.likeButton = 'favorite-btn[article=\'$ctrl.article\']'
        this.numberOfLikes = 'span[class=\'ng-binding ng-scope\']'
        
    }
}
export default GlobalFeedPage