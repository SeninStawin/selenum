package org.stepdefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class SampleDropdown {
	
	public static void main(String[] args)  {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\user\\eclipse-workspace\\SeleniumdropDown\\driver\\chromedriver.exe");
		
		WebDriver driver =new ChromeDriver();
		
		driver.get("https://demo.guru99.com/test/newtours/register.php");
		
		driver.manage().window().maximize();
		

		
		WebElement cnty = driver.findElement(By.name("country"));
		
		Select s = new Select(cnty);
		
		List<WebElement> options = s.getOptions();
		JavascriptExecutor js = (JavascriptExecutor)driver;
		
		for (int i = 0; i < options.size(); i++) {
			WebElement opt = options.get(i);
			
			String text = opt.getText();
			System.out.println(text);
			
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	

}
