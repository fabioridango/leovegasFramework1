import {After, Before, Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
//export var fullResponse;

var fullResponse
let requestBody

When('I send a HTTP POST request to API endpoint {string}', function (baseURI) {

     cy.fixture('post_tourist').then( (data)=>{

       requestBody = data

        cy.request ({
                        method: 'POST', 
                        url: baseURI, 
                        body: requestBody
                    })       
                   .then((response) =>{

                    fullResponse = response // save the full response object

                   })
    })
})


Then('I get a {string} response codess', function (statusCode) {

   expect(fullResponse.status).to.eq(parseInt(statusCode));  // validation status code

})



Then("I get a success JSON response", function () {

        // Validation values
        expect(fullResponse.body.tourist_name).to.eq(requestBody.tourist_name)
        expect(fullResponse.body.tourist_email).to.eq(requestBody.tourist_email)
        expect(fullResponse.body.tourist_location).to.eq(requestBody.tourist_location)

        // Validation properties
        expect(fullResponse.body).have.property('tourist_name',requestBody.tourist_name)                
        expect(fullResponse.body).have.property('tourist_email',requestBody.tourist_email)
        expect(fullResponse.body).have.property('tourist_location',requestBody.tourist_location)

})