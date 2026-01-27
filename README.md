# Deva-Test-PlayWright

Playwright E2E test automation suite for DemoQA using Cucumber BDD framework.

## Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **npm** (comes with Node.js)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/deva1605-spec/Deva-Test-PlayWright.git
cd playwright_e2e_suite
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- Playwright
- Cucumber
- @playwright/test

### 3. Install Playwright Browsers
```bash
npx playwright install
```

## Running Tests

### Run All E2E Tests
```bash
npm run test:e2e
```

### Run Specific Feature File
```bash
npx cucumber-js packages/demoqa/src/features/Elements.feature
```

### Run Tests in Headed Mode (see browser)
```bash
npx cucumber-js packages/demoqa/src/features/Elements.feature --publish
```

### Run with Specific Browser
```bash
BROWSER=chromium npm run test:e2e
```

## Project Structure

```
playwright_e2e_suite/
├── packages/demoqa/
│   └── src/
│       ├── features/          # Cucumber feature files
│       ├── pages/             # Page Object Model files
│       ├── steps/             # Step definitions
│       ├── locators/          # Element locators
│       └── support/           # Hooks and world configuration
├── playwright.config.js       # Playwright configuration
├── cucumber.js                # Cucumber configuration
└── package.json
```

## Available NPM Scripts

- `npm run test:e2e` - Run all E2E tests
- `npm install` - Install dependencies
- `npm test` - Run all tests

## Test Features

### Elements Test Suite
- **Text Box Validation** - Fill and submit text box form
- **Radio Button Selection** - Select radio button options
- **Checkbox Selection** - Select and validate checkboxes

## Troubleshooting

### Git Not Recognized
**Problem**: `git: command not found` or `git is not recognized`
- **Solution**: 
  1. Download Git from https://git-scm.com/
  2. Run the installer and follow the setup wizard
  3. Restart your PowerShell/Terminal after installation
  4. Verify installation: `git --version`

### npm Command Not Found
**Problem**: `npm: command not found`
- **Solution**:
  1. Install Node.js from https://nodejs.org/
  2. Choose the LTS version
  3. Restart your terminal
  4. Verify installation: `node --version` and `npm --version`

### Playwright Installation Issues
**Problem**: Playwright browsers not downloading
- **Solution**:
  ```bash
  npx playwright install
  npx playwright install-deps
  ```

### Tests Not Finding Elements
**Problem**: Elements not found during test execution
- **Solution**:
  1. Verify the element locators in `packages/demoqa/src/locators/`
  2. Check if the page has loaded completely
  3. Use `--headed` mode to visually inspect what's happening
  4. Increase timeout values in `playwright.config.js`

### Port or Connection Issues
**Problem**: Connection timeout to demoqa.com
- **Solution**:
  1. Check your internet connection
  2. Verify the URL is accessible: https://demoqa.com/
  3. Increase timeout values in the test configuration
  4. Try running tests in headed mode to see actual browser behavior

### Cucumber Feature Not Found
**Problem**: Feature files not being recognized
- **Solution**:
  1. Ensure feature files are in `.feature` format
  2. Check the path in cucumber.js configuration
  3. Verify files are in `packages/demoqa/src/features/` directory

## Browser Compatibility

Tests are configured to run on:
- Chromium (default)
- Firefox
- WebKit (Safari)

## Configuration Files

### playwright.config.js
Contains Playwright configuration including:
- Browser settings
- Timeout values
- Base URL
- Screenshot and video capture options

### cucumber.js
Contains Cucumber configuration including:
- Feature file paths
- Step definition paths
- Report generation options

## Contributing

1. Create a new branch for your changes
2. Commit your changes with clear messages
3. Push to GitHub
4. Create a Pull Request

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
