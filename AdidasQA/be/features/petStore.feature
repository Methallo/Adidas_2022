Feature: Adidas Web BE Automation

@TestingBackEnd
Scenario: Navigate and buy some products into DEMO PET SHOP

  Given I set the uri of Pet shop API
  Then Send a <type> HTTP request
  Then I receive a valid <type> response
  
  Examples: 
    | type   |
    | GET    |
    | POST   |
    | UPDATE |
    | DELETE |

#Introduction
#You have to implement the following API automated checks over our DEMO PET 
#STORE: https://petstore.swagger.io/

#• Get "available" pets. Assert expected result
#• Post a new available pet to the store. Assert new pet added.
#• Update this pet status to "sold". Assert status updated.
#• Delete this pet. Assert deletion.
