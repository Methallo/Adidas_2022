exports.command = function() {

    const page = this.page.pageProductStore();

    this.waitForElementVisible(page.elements.confirm_popup)
        .assert.containsText(page.elements.amount_popup, /790USD/gi)
        .saveScreenshot('tests_output/screenshots/featureSHOP.png')
        .click(page.elements.popup_button)
        .pause(2000);
}

