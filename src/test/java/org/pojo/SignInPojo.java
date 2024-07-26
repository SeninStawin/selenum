package org.pojo;

import org.bas.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPojo extends BaseClass {
	public SignInPojo() {
		PageFactory.initElements(driver, this);
	}
    @FindBy(xpath = "//a[text()='Create new account']")
    private WebElement creatnewaccount;
    
    @FindBy(name = "firstname")
    private WebElement firstname;
    
    @FindBy(name = "lastname")
    private WebElement lastname;
    
    @FindBy(id = "u_a_g_Ht")
    private WebElement phno;
    
    @FindBy(id = "password_step_input")
    private WebElement crtpassword;

	public WebElement getCreatnewaccount() {
		return creatnewaccount;
	}

	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLastname() {
		return lastname;
	}

	public WebElement getPhno() {
		return phno;
	}

	public WebElement getCrtpassword() {
		return crtpassword;
	}
    
    
    
    
    
}
