exports.command = function(product) {
    const page = this.page.pageProductStore();

    this.waitForElementVisible(page.elements.table_cart_products)
        .click(page.elements.placeOrder_button)
        .waitForElementVisible(page.elements.name_form);

    this.setValue(page.elements.name_form, 'Luis J. Salón')
        .setValue(page.elements.country_form, 'Spain')
        .setValue(page.elements.city_form, 'Zaragoza')
        .setValue(page.elements.card_form, '123456789')
        .setValue(page.elements.month_form, '09')
        .setValue(page.elements.year_form, '2023')
        .click(page.elements.purchase_button);

    return this;
};
