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
```
[coder:end]

### cypress/integration/login.spec.js [coder:save]
```javascript
/// <reference types="cypress" />

describe('Validação de Login no Sistema OrangeHRM', () => {
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
});
```
[coder:end]

### cypress/plugins/index.js [coder:save]
```javascript
/// <reference types="cypress" />

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```
[coder:end]

### cypress/support/commands.js [coder:save]
```javascript
// Importando o cypress-xpath para usar seletores XPath
import 'cypress-xpath';
```
[coder:end]

### cypress/support/index.js [coder:save]
```javascript
// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
```
[coder:end]

### cypress.json [coder:save]
```json
{
  "baseUrl": "https://opensource-demo.orangehrmlive.com",
  "viewportWidth": 1280,
  "viewportHeight": 720
}
```
[coder:end]