
/*

Collection of reusable step definitions

*/

import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
import homePage from "../../e2e/leovegas_cucumber/pages/home_page";
//import { fullResponse } from '../../e2e/leovegas_cucumber/step_definitions/test_frontend/delete_posts_steps';


/*

Then('I get a {string} response code', (statusCode) => {

  expect(fullResponse.status).to.eq(parseInt(statusCode));  // validation status code

})

*/


Given('I am on leovegas homepage', function ()  {

    homePage.visitURL();
})