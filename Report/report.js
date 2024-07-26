$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Sample.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.scenario({
  "name": "To validate login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "PositiveNegativeofFb.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the Url of Facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveNegativeofFb.to_launch_the_Url_of_Facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass valid username in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.to_pass_valid_username_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.to_pass_invalid_password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check the login button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.to_check_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check whether navigation to the home page or not",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.to_check_whether_navigation_to_the_home_page_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveNegativeofFb.toCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass the data \"\u003cemaildatas\u003e\"in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to pass the data \"\u003cpassworddatas\u003e\"in password field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "seliniuminmakes@gmail.com",
        "Inmakes"
      ]
    },
    {
      "cells": [
        "adcdefgh@gmail.com",
        "26625565"
      ]
    },
    {
      "cells": [
        "ijklmnopjyhj@gmail.com",
        "56544555"
      ]
    },
    {
      "cells": [
        "nbgjhiuhkj@gmail.com",
        "54555554"
      ]
    },
    {
      "cells": [
        "biuyiuyin@gmail.com",
        "65654654"
      ]
    },
    {
      "cells": [
        "jhjhoonjoi@gmail.com",
        "54545445"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.user_has_to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FbLogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"seliniuminmakes@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInEmailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"Inmakes\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInPasswordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.user_has_to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FbLogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"adcdefgh@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInEmailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"26625565\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInPasswordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.user_has_to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FbLogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"ijklmnopjyhj@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInEmailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"56544555\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInPasswordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.user_has_to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FbLogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"nbgjhiuhkj@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInEmailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"54555554\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInPasswordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.user_has_to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FbLogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"biuyiuyin@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInEmailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"65654654\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInPasswordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.user_has_to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FbLogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"jhjhoonjoi@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInEmailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"54545445\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveNegativeofFb.userHasToPassTheDataInPasswordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});