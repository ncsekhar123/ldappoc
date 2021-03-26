Feature: LDAP React Application - Home Page

  Serenity/JS with Cucumber and Protractor

  @Regression @smoke
  Scenario: LDAP Home page to have title and page header

  The ["LDAP Application"](http:localhost:3000/) is a ReactJS Application developed for Automation POC
    
    Given User open the Ldap home page
    Then the page should have a title 
    Then the page should have a page header

  @Integration @smoke
  Scenario: LDAP Home page to have menu list options

    When User click on the menulist eye icon
    Then the menulist should have the options
    Then the ID option by default is not selected