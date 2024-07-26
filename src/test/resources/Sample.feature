@Feature1
Feature: To validate the login functionality of facebook application 


@Regression
Scenario: To validate login with valid username and invalid password


Given To launch the chrome browser and maximise window

When To launch the Url of Facebook application

And To pass valid username in email field
And To pass invalid password in password field
And To check the login button
And To check whether navigation to the home page or not

Then To close the browser 

@Smoke
Scenario Outline: To validate the positive and negative combination of login functionality
Given User has to launch the browser and maximize the window
When User has to hit the facebook url
And User has to pass the data "<emaildatas>"in email field 
And User has to pass the data "<passworddatas>"in password field
And User has to click login button
Then User has to close the browser

Examples:
|emaildatas               |passworddatas|
|seliniuminmakes@gmail.com|Inmakes      |
|adcdefgh@gmail.com       |26625565     |
|ijklmnopjyhj@gmail.com   |56544555     |
|nbgjhiuhkj@gmail.com     |54555554     |
|biuyiuyin@gmail.com      |65654654     |
|jhjhoonjoi@gmail.com     |54545445     |

