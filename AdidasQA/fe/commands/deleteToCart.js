exports.command = function(product) {
    const page = this.page.pageProductStore();

        this.waitForElementVisible(page.elements.delete_product)
            .click(page.elements.delete_product)
            .pause(2000);
    return this;
};
