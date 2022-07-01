module.exports = {
    
    url: 'https://www.demoblaze.com/index.html',

    elements: {
        list_options: '#cat',
        phone_option: `a[onclick="byCat('phone')"]`,
        laptop_option: `a[onclick="byCat('notebook')"]`,
        monitors_option: `a[onclick="byCat('monitor')"]`,

        div_products: '#tbodyid',
        product_sony: 'a[href="prod.html?idp_=8"]',
        product_dell: 'a[href="prod.html?idp_=12"]',

        addToCart_button: 'a[class="btn btn-success btn-lg"]',
        cart_option_list: "#navbarExample>ul>li:nth-child(4)>a",
        table_cart_products: 'table[class="table table-bordered table-hover table-striped"]',
        delete_product: "tbody[id='tbodyid']>tr:last-child[class='success']>td:last-child>a",

        placeOrder_button: "button[class='btn btn-success']",

        name_form: 'form>div>input[id="name"]',
        country_form: 'form>div>input[id="country"]',
        city_form: 'form>div>input[id="city"]',
        card_form: 'form>div>input[id="card"]',
        month_form: 'form>div>input[id="month"]',
        year_form: 'form>div>input[id="year"]',

        purchase_button: 'button[onclick="purchaseOrder()"]',

        confirm_popup: 'div[class="sweet-alert  showSweetAlert visible"]',
        amount_popup: 'body>div.sweet-alert.showSweetAlert.visible>p',
        popup_button: 'div[class="sa-button-container"]>div>button[class="confirm btn btn-lg btn-primary"]'
    }     
};
