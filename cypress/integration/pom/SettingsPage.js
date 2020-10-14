class SettingPage {
    constructor() {

        this.homeLink = 'a[ui-sref=\'app.home\']'
        this.newArticleLink = 'a[ui-sref=\'app.editor\']'
        this.profileLink = 'a[ui-sref=\'app.profile.main({ username: $ctrl.currentUser.username })\']'
        this.clickHereToLogout='button[ng-click=\'$ctrl.logout()\']'
        //need editing 
    }
}
export default SettingPage