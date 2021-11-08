/// <reference types="cypress" />

const user_login = require('../../fixtures/user_login_data')


describe('Login', () => {
    before(() => {
      
   })
    it('Standard User Login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('user_login_data').as('user_login')

        cy.get('.form__group')
        .find('[type="text"]').type(user_login.standard_user)
        cy.get('.form__group')
        .find('[type="password"]').type(user_login.common_password)
        cy.get('.btn_action').find('[type="submit"]').click()

        /*cy.visit('https://courses.ultimateqa.com/users/sign_in')
        cy.fixture('user_login_data').as('user_login')

        cy.get('.form__group')
        .find('[type="email"]').type(user_login.standard_user)
        cy.get('.form__group')
        .find('[type="password"]').type(user_login.common_password)
        cy.get('.form__button-group').find('[type="submit"]').click()*/


        /*cy.get('.form__group')
        .find('[type="email"]').type('standard_user')
        cy.get('.form__group')
        .find('[type="password"]').type('secret_sauce')
        cy.get('.form__button-group').find('[type="submit"]').click()*/
        //cy.get('.title').contains('Swag Labs')
    })
}) 