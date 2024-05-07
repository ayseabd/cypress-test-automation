/// <reference types="cypress"/>

import baseLib from "../base/baseLib";
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import mainPage from "../pages/mainPage";

describe('User Tests', () => {

    const login_page = new loginPage();
    const main_page = new mainPage();
    const home_page = new homePage();
    const base_lib = new baseLib();

    var url = "https://parabank.parasoft.com/parabank/index.htm";
    var internalErrorMessage = "An internal error has occurred and has been logged.";
    var emptyFieldErrorMessage = "Please enter a username and password.";

    it('Failed User Login Control', () => {

        main_page
            .goToUrl(url)

        login_page
            .fillUsername("Hello")
            .fillPassword("123456789")
            .clickLoginButton();

        main_page
            .errorMessage(internalErrorMessage);
    })

    it('Success User Login Control', () => {

        main_page
            .goToUrl(url)

        login_page
            .fillUsername("ayseabd")
            .fillPassword("12345")
            .clickLoginButton();

        home_page
            .textValidation("Accounts Overview");
    })

    it('Maximum Character for User', () => {

        main_page
            .goToUrl(url)

        login_page
            .fillUsername(base_lib.getRandomText(500))
            .fillPassword("12345")
            .clickLoginButton();

        main_page
            .errorMessage(internalErrorMessage);

    })

    it('Maximum Character for Password', () => {

        main_page
            .goToUrl(url)

        login_page
            .fillUsername("ayseabd")
            .fillPassword(base_lib.getRandomText(500))
            .clickLoginButton();

        main_page
            .errorMessage(internalErrorMessage);

    })

    it('Minimum Character for User', () => {

        main_page
            .goToUrl(url)

        login_page
            .fillUsername("1")
            .fillPassword("12345")
            .clickLoginButton();

        main_page
            .errorMessage(internalErrorMessage);

    })

    it('Minimum Character for Password', () => {

        main_page
            .goToUrl(url)

        login_page
            .fillUsername("ayseabd")
            .fillPassword("1")
            .clickLoginButton();

        main_page
            .errorMessage(internalErrorMessage);

    })

    it('Mandatory Fields Validation', () => {

        main_page
            .goToUrl(url)

        login_page
            .clearUsername()
            .clearPassword()
            .clickLoginButton();

        main_page
            .errorMessage(emptyFieldErrorMessage);

    })

    it('Username Mandatory Field Validation', () => {
        main_page
            .goToUrl(url)

        login_page
            .clearUsername()
            .fillPassword("12345")
            .clickLoginButton();

        main_page
            .errorMessage(emptyFieldErrorMessage);

    })

    it('Password Mandatory Field Validation', () => {

        main_page
            .goToUrl(url)

        login_page
            .fillUsername("ayseabd")
            .clearPassword()
            .clickLoginButton();

        main_page
            .errorMessage(emptyFieldErrorMessage);

    })

    it('Invalid Username', () => {

        main_page
            .goToUrl(url)

        login_page
            .fillUsername("ayseabdabd")
            .fillPassword("12345")
            .clickLoginButton();

        main_page
            .errorMessage(internalErrorMessage);
    })

    it('Invalid Password', () => {

        main_page
            .goToUrl(url)

        login_page
            .fillUsername("ayseabd")
            .fillPassword("123456789")
            .clickLoginButton();

        main_page
            .errorMessage(internalErrorMessage);

    })
})
