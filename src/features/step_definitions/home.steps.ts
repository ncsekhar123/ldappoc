import { Ensure, equals } from '@serenity-js/assertions';
import { browser, element, by, protractor } from 'protractor';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/protractor';
import { Browser } from '@serenity-js/protractor';
import { Given, When, Then } from '@cucumber/cucumber';
var expect = require('chai').expect;

import { homepage } from '../..';
import { homepageobj } from '../../pages/support/homepageobj';

let EC = protractor.ExpectedConditions;

Given(/User open the Ldap home page/, {timeout: 3 * 5000}, async() => {
    await browser.waitForAngularEnabled(false);
    homepage.openApp();
});

Then(/the page should have a title/, {timeout: 3 * 5000}, async() => {
    await browser.waitForAngularEnabled(false); 
    await homepage.getTitle();
    console.log("Actual Page Title:"+homepageobj.title_Text);
    console.log("Expected Page Title:"+homepage.homepage_title_ExpectedText);
    
    await expect(homepageobj.title_Text).to.equal(homepage.homepage_title_ExpectedText);
    
});

Then(/the page should have a page header/, {timeout: 3 * 5000}, async() => {
    await browser.waitForAngularEnabled(false);  
    await homepage.headerTextCapture();
    console.log("Actual Page Header:"+homepageobj.header_Text);
    console.log("Expected Page Header:"+homepage.homepage_header_ExpectedText);

    await expect(homepageobj.header_Text).to.equal(homepage.homepage_header_ExpectedText);
    //await expect(homepage.headerTextCapture).to.equal(pageheaderText);
});

When(/^User click on the menulist eye icon$/, {timeout: 2 * 5000}, async() => {
    await browser.waitForAngularEnabled(false);  
  
    console.log("Click on menulist eye icon:");

    await homepage.menueyeiconClick();
});
  
Then(/^the menulist should have the options$/, {timeout: 3 * 5000}, async() => {

    await browser.waitForAngularEnabled(false);  
  
    console.log("Menulist Options...");
    
    await homepage.menueyeiconOptions();
     
});

Then('the ID option by default is not selected', {timeout: 3 * 5000}, async() => {
          // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });

function And(arg0: RegExp, arg1: (actorName: string) => Promise<void>) {
    throw new Error('Function not implemented.');
}

