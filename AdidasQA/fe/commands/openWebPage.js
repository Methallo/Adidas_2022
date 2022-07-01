exports.command = function() {
    const page = this.page.pageProductStore();

	this.url(page.url)
        .waitForElementVisible('body', 1000)
        .assert.containsText('#nava', "PRODUCT STORE");
    return this;
};
