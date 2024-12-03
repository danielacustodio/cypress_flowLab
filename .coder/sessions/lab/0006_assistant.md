### cypress/integration/login.feature [coder:save]
```
Feature: Validação de Login no Sistema OrangeHRM

  Scenario: Login bem-sucedido no OrangeHRM
    Given que eu estou na página de login do OrangeHRM
    When eu inserir o username "Admin" no campo correspondente
    And eu inserir a password "admin123" no campo de senha
    And eu clicar no botão de Login
    Then eu devo ser redirecionado para a página do Dashboard
    And eu devo ser capaz de visualizar a página do Dashboard com sucesso

  Scenario: Login mal-sucedido no OrangeHRM
    Given que eu estou na página de login do OrangeHRM
    When eu inserir o username "Admin" no campo correspondente
    And eu inserir a password "senha_incorreta" no campo de senha
    And eu clicar no botão de Login
    Then eu devo ver uma mensagem de erro de credenciais inválidas
```
[coder:end]

### cypress/integration/login.spec.js [coder:save]
```javascript
/// <reference types="cypress" />

describe('Validação de Login no Sistema OrangeHRM', () => {
  afterEach(() => {
    // Fechar o browser após cada teste
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });

  it('Login bem-sucedido no OrangeHRM', () => {
    // Dado que eu estou na página de login do OrangeHRM
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Quando eu inserir o username "Admin" no campo correspondente
    cy.xpath("//input[@name='username' and @placeholder='username']").type('Admin');

    // E eu inserir a password "admin123" no campo de senha
    cy.xpath("//input[@type='password' and @name='password']").type('admin123');

    // E eu clicar no botão de Login
    cy.get('button[type="submit"]').click();

    // Então eu devo ser redirecionado para a página do Dashboard
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // E eu devo ser capaz de visualizar a página do Dashboard com sucesso
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard');
  });

  it('Login mal-sucedido no OrangeHRM', () => {
    // Dado que eu estou na página de login do OrangeHRM
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Quando eu inserir o username "Admin" no campo correspondente
    cy.xpath("//input[@name='username' and @placeholder='username']").type('Admin');

    // E eu inserir a password "senha_incorreta" no campo de senha
    cy.xpath("//input[@type='password' and @name='password']").type('senha_incorreta');

    // E eu clicar no botão de Login
    cy.get('button[type="submit"]').click();

    // Então eu devo ver uma mensagem de erro de credenciais inválidas
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });
});
```
[coder:end]