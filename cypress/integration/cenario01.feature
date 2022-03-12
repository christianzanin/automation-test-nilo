Feature: Procurar Produto Existente

    Eu quero conseguir encontrar um produto existente no site

    Scenario: Procurar por um Produto existente no site
        Given que estou acessando o site Practice Automation Testing
        And eu clique no menu na lateral direita
        And eu clique no icone de pesquisa buscando por HTML 
        When atualizar a pagina, uma lista de resposta sera exibida
        And eu vou encontrar o item HTML5 WebApp Develpment

        