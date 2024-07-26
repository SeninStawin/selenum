package org.stepdefinition;


import org.bas.BaseClass;

import com.google.common.base.Preconditions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends BaseClass{
	
	@Before(order = 1)
	private void Preconditions3() {
		launchBrowser();
		System.out.println("Launch The Browser");
	
		
	}
	@Before(order = 2)
	private void Preconditions1() {
		windowMaximize();
		System.out.println("maximize The Window");
	}
	@Before(order = 3,value = "@Smoke")
	private void Preconditions2() {
		launchBrowser();
		windowMaximize();
	}
	
	
	@After(order = 10,value = "@Smoke")
   private void postCondition5() {
		System.out.println("Take Screenshot Of Scenaries");
	
	}
	@After(order = 2)
	   private void postCondition6() {
			closeEntireBrowser();
		}
}
