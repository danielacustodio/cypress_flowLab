### story.txt [coder:save]
```
Story: Validação de Login no Sistema OrangeHRM
Como um usuário do sistema OrangeHRM,
Quero acessar o site de login,
Para que eu possa verificar se o login é bem-sucedido com as credenciais fornecidas.

Cenário: Login bem-sucedido no OrangeHRM
Dado que eu estou na página de login do OrangeHRM em https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Quando eu inserir o username "Admin" no campo correspondente, utilizando o XPath //input[@name='username' and @placeholder='Username'
E eu inserir a password "admin123" no campo de senha, utilizando o XPath //input[@name='password' and @placeholder='Password'
E eu clicar no botão de Login
Então eu devo ser redirecionado para https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index
E eu devo ser capaz de visualizar a página do Dashboard com sucesso.

Cenário: Login mal-sucedido no OrangeHRM
Dado que eu estou na página de login do OrangeHRM em https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Quando eu inserir o username "Admin" no campo correspondente, utilizando o XPath //input[@name='username' and @placeholder='Username'
E eu inserir a password "senha_incorreta" no campo de senha, utilizando o XPath //input[@name='password' and @placeholder='Password'
E eu clicar no botão de Login
Então eu devo ver uma mensagem de erro de credenciais inválidas.

Notas Técnicas:
XPaths utilizados:
Username: //input[@name='username' and @placeholder='Username'
Password: //input[@name='password' and @placeholder='Password'
Objetivo: Garantir que o fluxo de login funcione corretamente e que o usuário seja capaz de acessar o Dashboard após um login bem-sucedido e que uma mensagem de erro seja exibida em caso de falha no login.
```
[coder:end]