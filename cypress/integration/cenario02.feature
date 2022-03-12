Feature: Pesquisar produto não existente

    Eu quero tentar encontrar um produto porem ele nao existe

    Scenario: Pesquisar por um Produto nao existente no site
        Given que estou acessando o site Practice Automation Testing
        And eu clique no menu na lateral direita
        And eu clique no icone de pesquisa buscando por itemNãoExistente 
        When atualizar a pagina, uma resposta negativa sera exibida
        And eu não vou encontrar o item itemNãoExistente

        