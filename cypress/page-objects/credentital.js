import LoginPage from "./LoginPage";


const loginPage = new LoginPage();
class Credentital {
    
    get Email() {
        return cy.get(loginPage.emailAddersInput()).type('mshahed@rocketdocs.com');
    }
    get Password() {
        return cy.get(loginPage.passwordInput()).type('FXsr1987*');
    }
    get SignIn() {
        return cy.get(loginPage.signInbutton()).click();
    }
}

const credentital = new Credentital()

export default credentital