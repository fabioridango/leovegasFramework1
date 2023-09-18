import {After, Before, Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
//export var fullResponse;

var fullResponse
let requestBody

When('I send a HTTP PUT request to API endpoint {string}', function (baseURI) {

     cy.fixture('put_posts').then( (data)=>{

       requestBody = data

        cy.request ({
                        method: 'PUT', 
                        url: baseURI, 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: requestBody
                    })       
                   .then((response) =>{

                    fullResponse = response // save the full response object

                   })
    })
})



Then('I get a {string} response codesss', function (statusCode) {

    expect(fullResponse.status).to.eq(parseInt(statusCode));  // validation status code

})



Then("I get a success JSON responses", function () {

        // Validation values
        expect(fullResponse.body.title).to.eq(requestBody.title)
        expect(fullResponse.body.body).to.eq(requestBody.body)
        expect(fullResponse.body.userId).to.eq(requestBody.userId)

        // Validation properties
        expect(fullResponse.body).have.property('title',requestBody.title)                
        expect(fullResponse.body).have.property('body',requestBody.body)
        expect(fullResponse.body).have.property('userId',requestBody.userId)

})