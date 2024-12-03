# Context

All files complete source code.

## Project Structure

/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── login.feature
│   ├── plugins/
│   │   └── index.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
└── cypress.config.js

## File Contents

### cypress/e2e/login.cy.js
```
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

### cypress/e2e/login.feature
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

### cypress/plugins/index.js
```
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

### cypress/support/commands.js
```
// Importando o cypress-xpath para usar seletores XPath
import 'cypress-xpath';
```

### cypress/support/e2e.js
```
// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
```

### cypress.config.js
```
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Certifique-se de que o require retorna uma função
      const plugin = require('./cypress/plugins/index.js');
      return plugin(on, config); // Chame a função retornada
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
  },
});
```

# Instructions

No need to analyze anything right now. 
Just wait for questions.
