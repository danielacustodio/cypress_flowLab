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

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npx cypress run
        env:
          CYPRESS_BASE_URL: 'https://opensource-demo.orangehrmlive.com'
```
[coder:end]