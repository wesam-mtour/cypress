class HomePage {
    constructor() {

        this.newArticleLink = 'a[ui-sref=\'app.editor\']'
        this.settingsLink = 'a[ui-sref=\'app.settings\']'
        this.profileLink = 'a[ui-sref=\'app.profile.main({ username: $ctrl.currentUser.username })\']'
        this.signInLink = 'a[ui-sref=\'app.login\']'
        this.globalFeedLink = 'a[ng-click="$ctrl.changeList({ type: \'all\' })"]'
    }
}
export default HomePage