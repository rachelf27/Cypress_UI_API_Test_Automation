/// <reference types="cypress" />

const create_account = require('../../fixtures/user_login_data')


describe('Create Account', () => {
    before(() => {
      
   })
    it('New User Account', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.fixture('create_user').as('create_accnt')

        cy.get('.form-group')
        .find('[name="email"]').name(create_account.email)
        cy.get('.submit').find('[type="submit"]').click()

        cy.get('.account_creation').find('[name="customer_firstname"]').type(create_account.first_name)
        cy.get('.account_creation').find('[name="customer_lastname]').type(create_account.last_name)
        cy.get('.btn btn-default button button-medium').find('[type="submit"]').click()

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