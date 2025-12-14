# SauceDemo Automated Tests

## Overview
This project contains automated UI tests for [SauceDemo](https://www.saucedemo.com/) using Playwright and TypeScript.

It includes:
- Login test
- Full purchase flow test
- Performance / latency test (bonus)

## Project Structure

```
saucedemo-tests/
│
├── tests/ # Test scripts
│ ├── login.spec.ts
│ ├── purchase.spec.ts
│ └── performance.spec.ts
│
├── pages/ # Page Object Models
│ ├── loginPage.ts
│ └── inventoryPage.ts
│
├── utils/ # Configuration and helpers
│ └── config.ts
│
├── package.json
├── playwright.config.ts
└── node_modules/
```
## Test Details

### Login Test
- Logs in with `standard_user`
- Verifies redirect to inventory page
- Checks header "Products" is visible

### Full Purchase Flow
- Logs in with `standard_user`
- Adds "Sauce Labs Backpack" to cart
- Verifies cart updates
- Completes checkout
- Confirms order completion message

### Performance / Latency Test
- Logs in with `performance_glitch_user`
- Measures login + page load time
- Fails if loading takes longer than 3s (bonus test)


## How to Run

1. Install dependencies:

```npm install```

2. Install Playwright

```npx playwright install```

3. Run all tests (headless):

```npm test```


4. Run tests in headed mode (browser visible):

```npm run:testheaded```


5. View HTML report:

```npx playwright show-report```


- This opens a local server (`localhost`) showing:
  - Test status (pass/fail)
  - Execution time
  - Screenshot and videos of any failures

## Framework and Language

This project uses **Playwright** as the automation framework and **TypeScript** as the programming language.  

- **Playwright**: a modern UI testing framework that supports multiple browsers and provides built-in support for screenshots, videos, and HTML reports.  
- **TypeScript**: a typed superset of JavaScript, which improves code reliability and maintainability.  

Page Object Model (POM) is used to structure the code and keep locators and test logic organized.

Playwright + TypeScript were chosen for their speed, stability, and ease of writing maintainable automated UI tests.


## Author
Mariana Teixeira Magalhaes
