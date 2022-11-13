# UI Test Automation using Webdriver IO

Ready-to-use UI Test Automation Project using Selenium, Webdriver IO, Javascript.

## Languages and Frameworks

The project uses the following:
- *[Javascript ES2019](https://www.javascript.com/)* as the scripting language.
- *[Webdriver IO](https://webdriver.io/)* as the test automation framework.
- *[Mocha](https://mochajs.org/)* as the testing framework.
- *[Chai](https://www.chaijs.com/)* as the assertion library.
- *[Allure Reports](https://www.extentreports.com/)* as the test reporting strategy.
- *[IntelliJ IDEA](https://www.jetbrains.com/idea/)* as the IDE.

## Installation and Run
1. Clone the git repo — `git clone https://github.com/humayun-ashik/webdriverio-mocha-ui-automation.git`
2. Then copy the files to your project directory (all files in `/test`, `/pages`, `/util` and the `wdio.*.conf.js`)
3. Merge project dev dependencies with your projects dev dependencies in your `package.json`
4. To run entire test suite just run `npm test` on your terminal.

## Test Scenarios
Test Website: https://flights.agoda.com/

> 1. Search Economy class round-trip flights for 1 adult
> 2. Search Economy class round-trip flights for multiple travellers
> 3. Search Business class flights for one way trip
> 4. Search First class flights for one way trip
> 5. Search Business and First class flights for multicity trip with specific time
> 6. Search Economy class round-trip flights without date selection

## Report
1. To get allure report run `allure generate && allure open` from terminal
2. Then open the generated url

![alt text](https://github.com/humayun-ashik/webdriverio-mocha-ui-automation/blob/master/allure-sample-report.png?raw=true)
![alt text](https://github.com/humayun-ashik/webdriverio-mocha-ui-automation/blob/master/allure-report-suites.png?raw=true)

## Project Structure
```bash
webdriverio-mocha-ui-automation/
├─ pages/
│  ├─ abstract.page.js
│  ├─ flights.page.js
├─ reports/
│  ├─ html-reports/
├─ test/
│  ├─ searchflights.test.js
├─ testData/
│  ├─ searchData.js
├─ util/
│  ├─ config.js
│  ├─ Utilities.js
│  ├─ elementUtil.js
├─ .gitignore
├─ LICENSE
├─ README.md
├─ package-lock.json
├─ package.json
├─ wdio.conf.js
```
