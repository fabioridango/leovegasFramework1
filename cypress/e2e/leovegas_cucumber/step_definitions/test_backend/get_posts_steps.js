import {After, Before, Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
//export var fullResponse;

var fullResponse

When('I send a HTTP GET request to API endpoint {string}', function (baseURI) {

        cy.request ({
                        method: 'GET', 
                        url: baseURI, 
                    })       
        
                   .then((response) =>{

                    fullResponse = response // save the full response object

                   })
})



Then('I get a {string} response codes', function (statusCode) {

    expect(fullResponse.status).to.eq(parseInt(statusCode));  // validation status code

})



Then("the posts resource has details:", function (table) {


     table.hashes().forEach(row =>{

        // Validation values
        expect(fullResponse.body.userId).to.eq(parseInt(row.userId))
        expect(fullResponse.body.title).to.eq(row.title)
        expect(fullResponse.body.body).to.eq(row.body)

        // Validation properties
        expect(fullResponse.body).have.property('userId',(parseInt(row.userId)))                
        expect(fullResponse.body).have.property('title',row.title)
        expect(fullResponse.body).have.property('body',row.body)

     })

})