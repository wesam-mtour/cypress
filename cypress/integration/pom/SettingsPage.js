class SettingPage {
    constructor() {

        this.homeLink = 'a[ui-sref=\'app.home\']'
        this.newArticleLink = 'a[ui-sref=\'app.editor\']'
        this.profileLink = 'a[ui-sref=\'app.profile.main({ username: $ctrl.currentUser.username })\']'

        this.password = 'input[type=\'password\']'
        this.updateSettingsButton = 'button[type=\'submit\']'
        this.clickHereToLogoutButton = 'button[ng-click=\'$ctrl.logout()\']'
    }
}
export default SettingPage