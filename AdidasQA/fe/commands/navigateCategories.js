exports.command = function() {
    const page = this.page.pageProductStore();

    this.waitForElementVisible(page.elements.list_options)
        .assert.containsText(page.elements.list_options, "CATEGORIES")
        .pause(2000);

    this.click(page.elements.phone_option)
        .assert.containsText(page.elements.phone_option, "Phones")    
        .waitForElementVisible(page.elements.div_products)    
        .pause(2000);

    this.click(page.elements.laptop_option)
        .assert.containsText(page.elements.laptop_option, "Laptops")
        .waitForElementVisible(page.elements.div_products)
        .pause(2000);
        
    this.click(page.elements.monitors_option)
        .assert.containsText(page.elements.monitors_option, "Monitors")
        .waitForElementVisible(page.elements.div_products)
        .pause(2000);
    return this;
};
