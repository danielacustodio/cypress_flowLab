Funcionalidade: Validação de Login no Sistema OrangeHRM

  Cenário: Login bem-sucedido no OrangeHRM
    Dado que eu estou na página de login do OrangeHRM
    Quando eu inserir o username "Admin" no campo correspondente
    E eu inserir a password "admin123" no campo de senha
    E eu clicar no botão de Login
    Então eu devo ser redirecionado para a página do Dashboard
    E eu devo ser capaz de visualizar a página do Dashboard com sucesso

  Cenário: Login mal-sucedido no OrangeHRM
    Dado que eu estou na página de login do OrangeHRM
    Quando eu inserir o username "Admin" no campo correspondente
    E eu inserir a password "senha_incorreta" no campo de senha
    E eu clicar no botão de Login
    Então eu devo ver uma mensagem de erro de credenciais inválidas