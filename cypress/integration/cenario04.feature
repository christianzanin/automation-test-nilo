Feature: Logar no Site

    Eu quero Logar no site com minha conta

    Scenario: Logar no site e verificar se continua logado.
        Given que estou acessando o site Practice Automation Testing
        And eu clique no menu na lateral direita
        And eu clique no item My account
        When atualizar a pagina
        Then eu vou digitar meu login no campo Username
        And eu vou digitar minha senha no campo Password
        Then eu vou verificar se existe o menu Dashboard
        And eu vou conferir se meu usuario é testenilo1