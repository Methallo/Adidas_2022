# AdidasQA

This is the QA challenge of Adidas

I did the two exercises with JavaScript and i use the nightwatch.js like a framework, after that implement the test cases with cucumber
with the module nightwatch-api, i use the webDriver's directly not a selenium server, you must be installed the binary files of Chrome or Firefox to run this tests.

This repository has 2 divisions BE and FE, in this folders you have to install a npm modules to run the two projects

BE -> I run only with nightwatch.js, my idea was implement cucumber.io after the implementation of nightwatch, but i didn't have a time to implement it.

FE -> I run a previous test in nightwatch.js to test de connection webPage and the exercise run with cucumber.

# Nightwatch API
Nightwatch API: https://nightwatchjs.org

# NPM Install Depencies
npm install --save-dev nightwatch

npm install --save-dev chromedriver

npm install --save nightwatch-api

npm install --save @cucumber/cucumber

# Run a begin test with Nightwatch.js
npm nightwatch

# Run test features (cucumber) 
npm run e2e-test
