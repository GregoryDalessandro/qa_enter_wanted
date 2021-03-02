import {
  By,
  until,
  WebDriver
} from "selenium-webdriver";

export class EnterWantedPage {
  driver: WebDriver;
  url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  // selectors needed for testing:
  headerLogo: By = By.className("cake");
  fieldHeader: By = By.name("hdrHeader");
  headerInput: By = By.name("hdrInput");
  submit: By = By.id("saveBtn");
  // TODO Fix this hardcoded error message, move it to the test file
  headerInputError: By = By.className("errorMessage");
  /* TODO: fields to add for equivelance partitioning
  MKE
  Name
  Hair
  Offense
  Date of Warrent/Violation
  Driver License
  Driver License Expiration Date
  License Plate
  Weight
  */

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
  //this function allows user to test any input field, as there are a lot for Enter Wanted
  async enterText(s: string) {
    //await this.driver.findElement(this[`${inputFieldName}`]).sendKeys(s+`\n`);
    await this.driver.findElement(this.headerInput).sendKeys(s+`\n`);
  }
}

