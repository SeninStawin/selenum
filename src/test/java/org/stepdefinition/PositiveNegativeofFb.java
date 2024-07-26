package org.stepdefinition;

import org.bas.BaseClass;
import org.pojo.FbLoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PositiveNegativeofFb extends BaseClass{
	
	FbLoginPojo f;
	@Given("To launch the chrome browser and maximise window")
public void to_launch_the_chrome_browser_and_maximise_window() {
    launchBrowser();
    windowMaximize();
}

@When("To launch the Url of Facebook application")
public void to_launch_the_Url_of_Facebook_application() {
   launchUrl("https://en-gb.facebook.com/");
}

@When("To pass valid username in email field")
public void to_pass_valid_username_in_email_field() {
	f = new FbLoginPojo();
	passText("seninstawin@gmail.com", f.getEmail());
   
}

@When("To pass invalid password in password field")
public void to_pass_invalid_password_in_password_field() {
	f = new FbLoginPojo();
passText("", f.getPassword());
    
}


@When("To check the login button")
public void to_check_the_login_button() {
	f = new FbLoginPojo();
	clickbtn(f.getLogin());
}

@Then("To close the browser")
public void toCloseTheBrowser() {
    closeEntireBrowser();
}



   @When("To check whether navigation to the home page or not")
   public void to_check_whether_navigation_to_the_home_page_or_not() {
       
   }

  
   
   
      
      
   
   @When("User has to pass the data {string}in email field")
   public void userHasToPassTheDataInEmailField(String emaildatas) {
	   f = new FbLoginPojo();
	   passText(emaildatas,f.getEmail());
   }

   @When("User has to pass the data {string}in password field")
   public void userHasToPassTheDataInPasswordField(String passworddatas) {
	   f = new FbLoginPojo();
	   passText(passworddatas, f.getPassword());
      
   }
   
   }

   



