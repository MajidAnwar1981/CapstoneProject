![project Logo](/git_project_logo.jpg)

# Rocketdocs 2.0 Test Environment Smoke Test

This is a project which you can use to start your E2E testing with mochawesome report

- Generating seperate json report for each test
- Merging all json reports into single report
- Generating HTML report from the merged json file

# Pre-requisite
### Node js should instaled
- Stable version Link https://nodejs.org/en/download/releases/ and Chose 12.0.0 Release
### npm should be installed
- npm version 6.14.10
### Dependencies
- Cypress version : 7.3.0
- mocha : 7.1.2
- mochawesome : 6.1.1
- mochawesome-merge : 4.0.3

### HMTL Report Sample:
![mochawesome report](/mochawesome_report.png)

# Installation  

1. Create a project directory and Clone the project: 
```https://mshahedRC@bitbucket.org/rocketdocs/test-environment-smoke-test.git``` 

1. Under the project directory install the followings: 
```npm install```

# How to start

In order to start using this project. You will have to do the following steps:

 Provide `baseUrl` in cypress.json and put other required test data like credentials.

For upload of results in cypress dashboard :

 Enter <project_ID> in the cypress.json
 
 Enter <record_key> in the package.json under scripts sections.

## **Mulitple ways to execute the tests**:

### Using Cyperss GUI:
* Under the project directory run the following npm command: `npm run cy:open`
### Using CLI - Headless mode:
* Under the project directory run the following npm command: `npm run cy:headless`
### Using CLI - Record mode:
* Under the project directory run the following npm command: `npm run cy:record`
### Using CLI - Chrome browser:
* Under the project directory run the following npm command: `npm run cy:chrome`
### Using CLI - generate HMTL mochawesome report:
* Under the project directory run the following npm command: `npm run cy:report`

# Test debugging/Reports:

* During test execution locally if any test fails, screenshot with execution log will be taken for that. Screenshots will be available under the path: ```cypress-mochawesome-report/cypress/reports/mochawesome-report/assets``` 

* json reports are created under the path: ```cypress-mochawesome-report/cypress/reports/mochawesome-report``` 

* By default capturing test videos is turned off by the ```cypress.json```. If needed, can be possible to turn it on there.if enabled the you can find videos under the path:```cypress-mochawesome-report/cypress/videos``` 

* HTML reports are created under the path: ```cypress-mochawesome-report/cypress/reports/```

* If you record the execution then all reports would be saved on your cypress dashboard account:

![cypress dashboard](/cypress_dashboard-in-cypress.png)

## References

- [mochawesome](https://github.com/adamgruber/mochawesome)
- [mochawesome merge](https://github.com/Antontelesh/mochawesome-merge)
- [mochawesome report generator](https://github.com/adamgruber/mochawesome-report-generator)

## Allure report
### STEP 1 INSTALLATION

* npm i allure-commandline
* npm i @shelex/cypress-allure-plugin
### STEP 2 CONFIGURATION
#### a. In cypress/plugin/index.js

`/// <reference types="@shelex/cypress-allure-plugin" />`

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};

#### b. In cypress/support/index.js

* import '@shelex/cypress-allure-plugin';

### STEP 3 Add Terminal Commands inside scripts object available into package.json file

"scripts": {
    "cy:version": "cypress version",
    "cy:open": "cypress open",
    "cy:record": "cypress run --record <record_key>",
    "cy:headless": "cypress run",
    "teamcity_e2e": "npm run cy:headless",
    "cleanup": "rm -fr cypress/reports/mochawesome-html-report",
    "merge_reports": "mochawesome-merge cypress/reports/mochawesome-report/*.json > output.json",
    "mochawesome_report": "marge --reportDir cypress/reports/mochawesome-html-report -t Cypress_Test_Report -p Cypress_HMTL_Report -f Cypress_HMTL_Report --timestamp mmddyyyy_HHMMss --charts true output.json",
    "mochawesome_test": "npm run cleanup && npm run cy:headless && npm run merge_reports && npm run mochawesome_report",
    "cy:run": "cypress run --env allure=true",
    "allure:report": "allure generate allure-results --clean -o allure-report",
    "allure:clear": "if exist allure-results rmdir /q /s allure-results && if exist allure-report rmdir /q /s allure-report && if exist cypress\\screenshots rmdir /q /s cypress\\screenshots && if exist cypress\\videos rmdir /q /s cypress\\videos",
    "pretest": "npm run allure:clear",
    "test": "npm run cy:run || npm run posttest",
    "posttest": "npm run allure:report",
    "chromeheadless": "npm run cy:chrome || npm run generate-report",
    "e2e:chrome": "cypress run --browser chrome",
    "e2e:firefox": "cypress run --browser firefox",
    "cy:chrome": "cypress run --browser chrome --headless",
    "cy:firefox": "cypress run --browser firefox --headless",
    "e2e:record:chrome": "cypress run --record --browser chrome",
    "e2e:record:edge": "cypress run --record --browser edge",
    "e2e:record:firefox": "cypress run --record --browser firefox",
    "e2e:record:parallel": "cypress run --record --parallel"
  }

#### STEP 4 Open Allure Report (index.html) using Live Server
- https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
