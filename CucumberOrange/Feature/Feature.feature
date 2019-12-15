Feature: Login Action

Scenario Outline: Successfull login with valid credentials

Given Login Screen Should be launch
#When User Enter Username as "Admin" and password as "admin123"
When User enters "<username>" and "<password>"
Then OrangeHRM Home Screen Should Be Launched
Examples:
| username   | password |
| Admin      | admin123 |
| admin      | admin    |