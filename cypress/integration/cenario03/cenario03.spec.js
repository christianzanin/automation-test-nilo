Given('que estou acessando o site Practice Automation Testing', () => {
    cy.visit('http://practice.automationtesting.in/')
})

And('eu clique no menu na lateral direita', () => {
    cy.get('#menu-icon').click()
})

And('eu clique no item shop', () => {
    cy.get('#menu-item-40').click()   
})

When('atualizar a pagina', () => {
    cy.contains('Product Categories')
})

Then('eu vou clicar na categoria HTML', () => {
    cy.get('a[href="http://practice.automationtesting.in/product-category/html/"]').click()
})

And('eu vou conferir se o produto Thinking in HTML vai estar visivel', () => {
    cy.contains('Thinking in HTML').should('be.visible')
})
