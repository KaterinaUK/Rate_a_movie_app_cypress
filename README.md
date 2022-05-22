# Movie App Cypress Tests

How to run and develop the Cypress tests on your local machine.

## Prerequisites

You will need:

- Movie app running locally (see README.md) for setup instructions
- Docker
- The following repos cloned side-by-side with qa-code-challenge-0.1.0:
  - https://github.com/KaterinaUK/Rate_a_movie_app_cypress

## Overview

A plugin for Cypress called [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) is used to transform `.feature` files into runnable tests. The plugin is configured to look for step defintions in a sibling TypeScript file of the same name. Any files added to the `integration/common` folder will be included with every feature test.

## Testing locally

When running Cypress locally it's recommended to run web app and Cypress separately, this allows you to restart the Cypress test runner without affecting the other processes.

Open the Cypress test runner:

   `npm run cypress:open`

   Click any feature file to run the test.

## Debugging failed CI tests

There are a few tools available to help you debug failed tests on CI:

- The `cypress-failed-log` plugin will display the Cypress commands of any failed test in the CI log. This can help provide context of what hapenned leading up to the test failure.
- The result of the Cypress run is saved as an artifact in GitHub, you can find it on the summary page of the Action workflow. Inside the zip file you will find screenshots, videos, and logs of any failed tests.
- If you suspect a test failure might be caused by a graphql api issue you can log every request & response by adding the command `cy.logApiRequests()` to a `Before()` block in your test. Note: this will make the logs very verbose.
