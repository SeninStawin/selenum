@Feature2
Feature: To validate the account creation of the fb application
@Sanity
Scenario: To creat new account
Given To launch the browser and maximize the window
When To lauch url of fb application
And To click the creat account buttton
And To pass firstname in firstname text box
And to pass secondname in secondname text box
And To pass mobileno or email in email text box 
And To creat new passsword using new password text box 
Then To close the chrome browser
