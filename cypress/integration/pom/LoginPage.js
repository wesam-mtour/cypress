import Actions from '../infra/Actions'
const actions = new Actions()
class LoginPage {
    constructor() {
        this.email = 'input[type=email]'
        this.password = 'input[type=password]'
        this.signInButton = 'button[type=submit]'
    }

    logIn() {
        actions.type(this.email, 'wiasm.mtour@gmail.com')
        actions.type(this.password, '123456789')
        actions.click(this.signInButton)
        return this
    }
    logInn(email, password) {
        actions.type(this.email, email)
        actions.type(this.password, password)
        return this
    }
}
export default LoginPage