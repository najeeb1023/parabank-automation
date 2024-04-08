# About this project:
This project is based on [Parabank website.](https://parabank-automation.com) It is developed with BDD framework Cucumber and Playwright framework using native Typescript.
__________________________________
__________________________________
## How to run this project:
1. Clone this project.
2. Run ````npm i````.
3. Use npm run parabank to rull all feature files with @Regression.
   * To run a specific scenario go to package.json ---> edit the tag with your desired scenario.
4. To run in headed/headless mode edit tsconfig.json file with parameter headed:true/false.
__________________________________
__________________________________

## Bug hunting?
If you encounter any bug or you think any improvements can be made, please submit an issue tab above. If you are interested to submit a PR with a fix kindly reference the issue you created.
__________________________________
__________________________________
<br>

[![v1.2.0](https://github.com/najeeb1023/parabank-automation/actions/workflows/release.yaml/badge.svg)](https://github.com/najeeb1023/parabank-automation/actions)
## v1.2.0 includes:
* Added json parsion in each class to get locators seperately using PageElement. PageElement interface added to parse xpath of locators.

<br>

*This is still a work in progress project.*