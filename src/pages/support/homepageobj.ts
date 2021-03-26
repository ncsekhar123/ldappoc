import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/protractor';
import { Target } from '@serenity-js/protractor';
import { browser, element, by } from 'protractor';

export class homepageobj {

    //let menueyeicon =element(by.xpath("svg[@class='MuiSvgIcon-root MuiSvgIcon-colorPrimary']");
    //let txtname=element(by.name("name"));
    static appURL = 'http://localhost:3000/';
    static txtname = Target.the('Text element').located(by.name("name"));
    static menueyeicon = element(by.xpath("//button[@aria-label='menu list']"));
    //static menulist = Target.the('Menu list').located(by.name("name"));
    static menulist = element.all(by.xpath("//div[contains(@class, 'modal')]/div"));
    static menuoptionsCount;
    static homepage_headerText = element(by.xpath("//span[@class='Column']"));
    static title_Text;
    static header_Text;

    //let list = element.all(by.css('.items li'));
    //expect(list.count()).toBe(3);
  }

export const headerCapture= async function () {
    //export const headerCapture = async () => {
    console.log("Home Page - headerCapture()");
    homepageobj.header_Text = await element(by.xpath("//span[@class='Column']")).getText();
    console.log("Page Header Capture :: " + homepageobj.header_Text);
    return homepageobj.header_Text;
    //await browser.wait(EC.titleIs(homepageobj.homepageTitle));
}

