// Web Elements present in the page - store the locators in a variable
const NavbarButton = ".Ij7al"
const logOutButton = ".KCYCn.E-rD-"

class clientHomePage
{

// Action Methods - all the methods that are related to the Loginpage of the website.
   static clickOnNavbarBtn()
   {
    // Comment
    cy.get(NavbarButton).should('be.visible').click()
   }

   static clickOnLogoutBtn()
   {
    // Comment
    cy.get(logOutButton).should('be.visible').click()
   }

 }

// export the class that can be imported in another file
export default clientHomePage