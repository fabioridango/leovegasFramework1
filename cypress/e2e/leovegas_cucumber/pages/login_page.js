 // Web Elements present in the page - store the locators in a variable   
 const UserNameField = "input[name='username']"
 const PasswordField = "input[name='password']"
 const LoginButton = '.CJN3M > .wNEmG > canvas'
 const WarningMessageLogin = ".iSwIH.RYweV"
 const MyOffersLabel = ".vzTxE[data-test-id='bottombar-link-my-offers']"


class loginPage
{

// Action Methods - all the methods that are related to the Loginpage of the website.
  static typeUsername(username)
  {
    // Comment
    cy.get(UserNameField).type(username)
  }

  static typePassword(password)
  {
    // Comment
    cy.get(PasswordField).type(password)
  }

  static submitLogin()
   {
    // Comment
    cy.get(LoginButton).eq(0).click()
   }

   static checksLogged()
   {
    // Comment
    cy.get(MyOffersLabel).contains('My Offers')
   }

   static loginWarning(loginWarningMessage)
   {
    // Comment
    cy.get(WarningMessageLogin).contains(loginWarningMessage).should('be.visible')
   }

   static clearUsername()
   {
     // Comment
     cy.get(UserNameField).clear() // Clear email text input
   }

   static clearPassword()
   {
     // Comment
     cy.get(PasswordField).clear() // Clear password text input
   }



 }

// export the class that can be imported in another file
export default loginPage