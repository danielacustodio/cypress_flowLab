### .github/workflows/cypress.yml [coder:save]
```yaml
name: Cypress Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Install Cypress
        run: npm install cypress --save-dev

      - name: Install cypress-xpath
        run: npm install cypress-xpath --save-dev

      - name: Run Cypress tests
        run: npx cypress run
        env:
          CYPRESS_BASE_URL: 'https://opensource-demo.orangehrmlive.com'
```
[coder:end]