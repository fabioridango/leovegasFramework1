// Web Elements present in the page - store the locators in a variable
const LoginHomeButton = "a[class='o+vBA JvIXb W1sjj']"
const BaseUrl = "https://www.leovegas.com/en-row/"

class homePage
{

// Action Methods - all the methods that are related to the Loginpage of the website.
   static clickOnLoginBtn()
   {
    // Comment
    cy.get(LoginHomeButton).should('be.visible').click()
   }

   static visitURL()
   {
    // Comment
    cy.visit(BaseUrl)
   }


 }

// export the class that can be imported in another file
export default homePage