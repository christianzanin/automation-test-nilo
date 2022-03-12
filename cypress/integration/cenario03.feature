Feature: Listar Produtos

    Eu quero listar os produtos da categoria HTML e verificar se contem o produto Thinking in HTML 

    Scenario: Listar produtos existentes na categoria HTML e Verificar se contem o produto Thinking in HTML
        Given que estou acessando o site Practice Automation Testing
        And eu clique no menu na lateral direita
        And eu clique no item shop
        When atualizar a pagina
        Then eu vou clicar na categoria HTML 
        And eu vou conferir se o produto Thinking in HTML vai estar visivel