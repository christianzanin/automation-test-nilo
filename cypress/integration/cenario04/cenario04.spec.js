/* /Nesse teste pedia para registrar uma nova conta, porem ao registrar uma vez no site não é possivel registrar
        novamente o mesmo email, e o site nao disponibiliza que o email usado possa ser deletado para ser utilizado novamente
        ao rodar o teste de novo o cypress ia acusar erro na criação pois ja era utilizado o email, poderia utilizar alguma função
        que gerasse email aleatorio toda vez que rodasse o teste, porem optei simplismente por fazer uma conta na mão 
        e fazer o caso de teste como Login 
/ */

Given('que estou acessando o site Practice Automation Testing', () => {
    cy.visit('http://practice.automationtesting.in/')
})

And('eu clique no menu na lateral direita', () => {
    cy.get('#menu-icon').click()
})

And('eu clique no item My account', () => {
    cy.get('a[href="http://practice.automationtesting.in/my-account/"]').click()   
})

When('atualizar a pagina', () => {
    cy.contains('Login')
})

Then('eu vou digitar meu login no campo Username', () => {
    cy.get('#username').click().type('testenilo@email.com')
})

And('eu vou digitar minha senha no campo Password', () => {
    cy.get('#password').click().type('password998877665544332211').type('{enter}')
})
Then('eu vou verificar se existe o menu Dashboard', () => {
    cy.get('a[href="http://practice.automationtesting.in/my-account/"]')
})

And('eu vou conferir se meu usuario é testenilo1', () => {
    cy.contains('testenilo1').should('be.visible')
})
