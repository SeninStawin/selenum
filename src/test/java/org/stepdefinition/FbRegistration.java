package org.stepdefinition;

import org.bas.BaseClass;
import org.pojo.SignInPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbRegistration extends BaseClass{
	SignInPojo s ;
	@Given("To launch the browser and maximize the window")
	public void to_launch_the_browser_and_maximize_the_window() {
		launchBrowser();
	    windowMaximize();
	}

	@When("To lauch url of fb application")
	public void to_lauch_url_of_fb_application() {
		 launchUrl("https://www.facebook.com/");
	}

	@When("To click the creat account buttton")
	public void to_click_the_creat_account_buttton() {
		 s = new SignInPojo();
		   clickbtn(s.getCreatnewaccount());
	}

	@When("To pass firstname in firstname text box")
	public void to_pass_firstname_in_firstname_text_box() throws InterruptedException {
		Thread.sleep(3000);
		s = new SignInPojo();
		 passText("senin", s.getFirstname());
	}

	@When("to pass secondname in secondname text box")
	public void to_pass_secondname_in_secondname_text_box() {
		s = new SignInPojo();
		 passText("stawin", s.getLastname());
	}

	@When("To pass mobileno or email in email text box")
	public void to_pass_mobileno_or_email_in_email_text_box() {
		s = new SignInPojo();
		passText("seninstawin@gmail.com", s.getPhno());
	}

	@When("To creat new passsword using new password text box")
	public void to_creat_new_passsword_using_new_password_text_box() {
		s = new SignInPojo();
		passText("4854dfdf", s.getCrtpassword());
	}

	@Then("To close the chrome browser")
	public void to_close_the_chrome_browser() {
		closeEntireBrowser();
	}		
		
	}

	


