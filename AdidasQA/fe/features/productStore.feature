Feature: Adidas Web FE Automation

@TestingFrontEnd
Scenario: Navigate and buy some products into DEMO ONLINE SHOP

  Given I open Demo online shop's home page
  Then navigation through product categories
  And navigate to "<option>" and "<action>" a "<product>"

  Examples:
    | option | action   | product      |
    | Laptop |  Add     | Sony vaio i5 |
    | Laptop |  Add     | Dell i7 8gb  |
    | Cart   | Delete   | Dell i7 8gb  |
    | Cart   | Complete | Sony vaio i5 |

#Introduction
#You have to implement the following Web automated checks over our DEMO ONLINE 
#SHOP: https://www.demoblaze.com/index.html
#• Customer navigation through product categories: Phones, Laptops and Monitors
#• Navigate to "Laptop" → "Sony vaio i5" and click on "Add to cart". Accept pop up confirmation.
#• Navigate to "Laptop" → "Dell i7 8gb" and click on "Add to cart". Accept pop up confirmation.
#• Navigate to "Cart" → Delete "Dell i7 8gb" from cart.
#• Click on "Place order".
#• Fill in all web form fields.
#• Click on "Purchase"
#• Capture and log purchase Id and Amount.
#• Assert purchase amount equals expected.
#• Click on "Ok"
