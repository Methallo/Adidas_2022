exports.command = function(product) {
    const page = this.page.pageProductStore();

    this.waitForElementVisible(page.elements.product_sony)
        .waitForElementVisible(page.elements.product_dell);

    if(product === 'Sony vaio i5') {
        this.click(page.elements.product_sony)
            .waitForElementVisible(page.elements.addToCart_button)
            .click(page.elements.addToCart_button)
            .pause(2000)
            .acceptAlert();
    } else if(product === 'Dell i7 8gb') {
        this.click(page.elements.product_dell)
            .waitForElementVisible(page.elements.addToCart_button)
            .click(page.elements.addToCart_button)
            .pause(2000)
            .acceptAlert();
    }
    return this;
};
