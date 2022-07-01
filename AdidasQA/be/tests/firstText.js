module.exports = {
    before: function (browser) {
        browser.globals.waitForConditionTimeout = 7000
    },

    'API Testing - GET': function (browser) {
        var apiUrl = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
        browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.statusCode, '200')
            //browser.assert.equal(data, responseGET);
        });
    },

    'API Testing - POST': function (browser) {
        var apiUrl = 'https://petstore.swagger.io/v2/pet'
        var postData = { "id": 125, "category": { "id": 0, "name": "string" }, "name": "Pikachu", "photoUrls": ["string"], 
            "tags": [{"id": 0, "name": "Pika"}],"status": "available"}
        
        browser.apiPost(apiUrl, postData, null, null, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.name, 'Pikachu')
        });
    },

    'API Testing - UPDATE': function (browser) {
        var apiUrl = 'https://petstore.swagger.io/v2/pet'
        var updateData = { "id": 125, "category": { "id": 0, "name": "string" }, "name": "Pikachu", "photoUrls": ["string"], 
        "tags": [{"id": 0, "name": "Pika"}],"status": "sold"}

        browser.apiPut(apiUrl, updateData, null, null, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.status, 'sold')
        });
    },

    'API Testing - DELETE': function (browser) {
        var apiUrl = 'https://petstore.swagger.io/v2/pet/125'
        browser.apiDelete(apiUrl, null, null, function (response) {
            browser.assert.equal(response.statusCode, '200')
        });
    },

    after: function (browser) {
        browser.end()
    }
}
