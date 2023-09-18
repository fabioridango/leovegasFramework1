import {After, Before, Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';

//export var fullResponse;

var fullResponse

When('I send a HTTP DELETE request to API endpoint {string}', function (baseURI) {

        cy.request ({
                        method: 'DELETE', 
                        url: baseURI, 
                    })       
        
                   .then((response) =>{

                    fullResponse = response // save the full response object

                   })
})



Then('I get a {string} response code', function (statusCode) {

 expect(fullResponse.status).to.eq(parseInt(statusCode));  // validation status code

})

