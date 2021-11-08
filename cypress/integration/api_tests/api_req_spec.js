/// <reference types="cypress" />

describe('API Requests', () => {

    it('GET Users - verify response using BDD syntax', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
        .then((response) => {
          expect(response).property('status').to.equal(200)
          expect(response).to.include.keys('headers', 'duration')
            const body = response.body  
            console.log(body) 
            cy.log(JSON.stringify(response.body))     
        })
    })
    
    it('POST to Users - verify response using BDD syntax', () => {
        cy.request('POST', 'https://reqres.in/api/users', {
            name: "emma",
            job: "savior"
        
        })
        .then((response) => {
          expect(response).property('status').to.equal(201)
          expect(response).to.include.keys('headers', 'duration')
            const body = response.body  
            console.log(body) 
            cy.log(JSON.stringify(response.body))     
        })
    })

    it('PUT to Users - verify response using BDD syntax', () => {
        cy.request('PUT', 'https://reqres.in/api/users', {
            name: "rumple",
            job: "crocodile"
        
        })
        .then((response) => {
          expect(response).property('status').to.equal(200)
          expect(response).to.include.keys('headers', 'duration')
            const body = response.body  
            console.log(body) 
            cy.log(JSON.stringify(response.body))     
        })
    })         
          
})