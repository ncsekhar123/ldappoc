
import { Log, Task } from '@serenity-js/core';
import { Click, Text } from '@serenity-js/protractor';

import { Target } from '@serenity-js/protractor';
import { browser, element, by, protractor } from 'protractor';

import { homepageobj } from './support/homepageobj';
//import { home } from './support/homepageobj';

let EC = protractor.ExpectedConditions;
var expect = require('chai').expect;

export class homepage { 

  static homepage_title_ExpectedText = 'React App';
  static homepage_header_ExpectedText = 'Drag a column name here to group the items by the value within that column.';

static openApp = async () => {

  console.log("Browser open - openApp():");
  await browser.get(homepageobj.appURL);
}

static getTitle = async () => {
  homepageobj.title_Text = await browser.getTitle();

  return homepageobj.title_Text;
}

static headerTextCapture = async () => {
  homepageobj.header_Text= await homepageobj.homepage_headerText.getText();

  return homepageobj.header_Text;
}

static menueyeiconClick = async () => {

  await homepageobj.menueyeicon.click();

}

static menueyeiconOptions = async () => {

  homepageobj.menuoptionsCount=await homepageobj.menulist.count();

  console.log("Menu List Count: "+homepageobj.menuoptionsCount);  

  await homepageobj.menulist.getText().then(function(menus) {
  expect(menus.length).to.equal(7); //true
  //const arr1=menus;
  //const  arr2="Name,ID,Sync Status,User's Domain,Default Status,Last Updated,Updated By Name";
  console.log(`Menu Options : ${menus}`);
  //expect(menus[0]).to.equal(arr2); 
  expect(menus[0]).to.equal("Name"); 
  expect(menus[6]).to.equal("Updated By"); 
  
  })

  }

}
  
  //for(var i=0; i < menus.length;i++)
     // {
       //   console.log(menus[i]);
       //   expect(menulist[i]).to.equal({menus});
     // }
  
  ////console.log(text[i].getText());
  //});
