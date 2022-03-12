/// <reference types="cypress" />


Given('que estou acessando o site Practice Automation Testing', () => {
    cy.visit('http://practice.automationtesting.in/')
})

And('eu clique no menu na lateral direita', () => {
    cy.get('#menu-icon').click()
})

And('eu clique no icone de pesquisa buscando por itemNãoExistente', () => {
    cy.get('#s').click().type('itemNãoExistente').type('{enter}')    
})

When('atualizar a pagina, uma resposta negativa sera exibida', () => {
    cy.contains('itemNãoExistente')
})

And('eu não vou encontrar o item itemNãoExistente', () => {
    cy.contains('Sorry, nothing found')
})


