const { client } = require('nightwatch-api');
const { Given, Then, When } = require('@cucumber/cucumber');

const apiUrl = 'https://petstore.swagger.io/v2/pet'

Given(/^I set the uri of Pet shop API$/, () => {
    
});

When("Send a {string} HTTP request", (type) => {
    
});

Then("I receive a valid {string} response", (type) => {

});