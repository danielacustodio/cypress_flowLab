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
    cy.screenshot('01-pagina-de-login');

    // Quando eu inserir o username "Admin" no campo correspondente
    cy.xpath("//input[@name='username' and @placeholder='Username']").type('Admin');
    cy.screenshot('02-username-inserido');

    // E eu inserir a password "admin123" no campo de senha
    cy.xpath("//input[@type='password' and @name='password']").type('admin123');
    cy.screenshot('03-password-inserido');

    // E eu clicar no botão de Login
    cy.get('button[type="submit"]').click();
    cy.screenshot('04-botao-login-clicado');

    // Então eu devo ser redirecionado para a página do Dashboard
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    cy.screenshot('05-redirecionado-para-dashboard');

    // E eu devo ser capaz de visualizar a página do Dashboard com sucesso
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard');
    cy.screenshot('06-dashboard-visualizado');
  });

  it('Login mal-sucedido no OrangeHRM', () => {
    // Dado que eu estou na página de login do OrangeHRM
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.screenshot('01-pagina-de-login');

    // Quando eu inserir o username "Admin" no campo correspondente
    cy.xpath("//input[@name='username' and @placeholder='Username']").type('Admin');
    cy.screenshot('02-username-inserido');

    // E eu inserir a password "senha_incorreta" no campo de senha
    cy.xpath("//input[@type='password' and @name='password']").type('senha_incorreta');
    cy.screenshot('03-password-inserido');

    // E eu clicar no botão de Login
    cy.get('button[type="submit"]').click();
    cy.screenshot('04-botao-login-clicado');

    // Então eu devo ver uma mensagem de erro de credenciais inválidas
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    cy.screenshot('05-mensagem-erro-credenciais-invalidas');
  });
});