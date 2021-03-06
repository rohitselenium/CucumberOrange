$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successfull login with valid credentials",
  "description": "",
  "id": "login-action;successfull-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Login Screen Should be launch",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#When User Enter Username as \"Admin\" and password as \"admin123\""
    }
  ],
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "OrangeHRM Home Screen Should Be Launched",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-action;successfull-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "login-action;successfull-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 11,
      "id": "login-action;successfull-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 12,
      "id": "login-action;successfull-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Successfull login with valid credentials",
  "description": "",
  "id": "login-action;successfull-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Login Screen Should be launch",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#When User Enter Username as \"Admin\" and password as \"admin123\""
    }
  ],
  "line": 7,
  "name": "User enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "OrangeHRM Home Screen Should Be Launched",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.Login_Screen_Should_be_launch()"
});
formatter.result({
  "duration": 17746070900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "LoginStep.user_Enter_Username_and_password(String,String)"
});
formatter.result({
  "duration": 3526338200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.orangehrm_Home_Screen_Should_Be_Launched()"
});
formatter.result({
  "duration": 1976889400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successfull login with valid credentials",
  "description": "",
  "id": "login-action;successfull-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Login Screen Should be launch",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#When User Enter Username as \"Admin\" and password as \"admin123\""
    }
  ],
  "line": 7,
  "name": "User enters \"admin\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "OrangeHRM Home Screen Should Be Launched",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.Login_Screen_Should_be_launch()"
});
formatter.result({
  "duration": 14304729100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin",
      "offset": 25
    }
  ],
  "location": "LoginStep.user_Enter_Username_and_password(String,String)"
});
formatter.result({
  "duration": 2220520300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.orangehrm_Home_Screen_Should_Be_Launched()"
});
formatter.result({
  "duration": 45979900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Welcome Admin\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WKWIN1700222\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\rohranja\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61715}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0852ab8df0a771db4106885e0ad74754\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Welcome Admin\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDescription.LoginStep.orangehrm_Home_Screen_Should_Be_Launched(LoginStep.java:54)\r\n\tat ✽.Then OrangeHRM Home Screen Should Be Launched(Feature.feature:8)\r\n",
  "status": "failed"
});
});