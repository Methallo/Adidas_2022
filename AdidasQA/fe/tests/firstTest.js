module.exports = {
    'DEMO ONLINE SHOP': function(browser) {
        browser
            .url('https://www.demoblaze.com/index.html')
            .waitForElementVisible('#narvbarx')
            .assert.containsText('#nava', "PRODUCT STORE");
    }
};
