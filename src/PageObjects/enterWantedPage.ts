import {
  By,
  until,
  WebDriver
} from "selenium-webdriver";

export class EnterWantedPage {
  driver: WebDriver;
  url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  headerLogo: By = By.className("cake");
  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.headerLogo));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.headerLogo))
    );
  }
}

