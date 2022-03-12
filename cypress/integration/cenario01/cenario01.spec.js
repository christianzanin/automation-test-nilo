
Given('que estou acessando o site Practice Automation Testing', () => {
    cy.visit('http://practice.automationtesting.in/')
})

And('eu clique no menu na lateral direita', () => {
    cy.get('#menu-icon').click()
})

And('eu clique no icone de pesquisa buscando por HTML', () => {
    cy.get('#s').click().type('HTML').type('{enter}')   
})

When('atualizar a pagina, uma lista de resposta sera exibida', () => {
    cy.contains('Search Results for').should('be.visible')
})

And('eu vou encontrar o item HTML5 WebApp Develpment', () => {
    cy.get('a[href="http://practice.automationtesting.in/product/html5-webapp-develpment/"]').should('be.visible')
})