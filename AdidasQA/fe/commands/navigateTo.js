exports.command = function(option) {
    const page = this.page.pageProductStore();
	
    if(option === "Laptop") {
        this.click(page.elements.laptop_option)
            .assert.containsText(page.elements.laptop_option, "Laptops")
            .waitForElementVisible(page.elements.div_products)
            .pause(2000);
    } else if(option === "Cart") {
        this.waitForElementVisible(page.elements.cart_option_list)
            .click(page.elements.cart_option_list)
            .waitForElementVisible(page.elements.table_cart_products);
    }   
    return this;
};
