import {
  By,
  until,
  WebDriver
} from "selenium-webdriver";

export class EnterWantedPage {
  driver: WebDriver;
  url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  constructor(driver: WebDriver) {
    this.driver = driver;
  }
}

