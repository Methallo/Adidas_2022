const { client } = require('nightwatch-api');
const { Given, Then, When } = require('@cucumber/cucumber');

Given(/^I open Demo online shop's home page$/, () => {
    return client.openWebPage();
});

Then(/^navigation through product categories$/, () => {
    return client.navigateCategories();
});

Then('navigate to {string} and {string} a {string}', (option, action, product) => {
    client.navigateTo(option);
    
    if(action === "Add") {
        return client.addToCart(product);
    } else if (action === "Delete") {
        return client.deleteToCart(product);
    } else {
        client.completePurchase(product);
        return client.confirmPurchase();
    }   
});
