import { EnterWantedPage } from "../pageObjects/enterWantedPage";
import { WebDriver, Builder, until, Capabilities } from "selenium-webdriver";

const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new EnterWantedPage(driver);

describe("EnterWanted.com", () => {
  //set a timeout limit for testing
  jest.setTimeout(15000);
  beforeEach(async () => {
    await page.navigate();
  });
  afterAll(async () => {
    await driver.quit();
  });
  test("the page loads", async () => {
    // wait for the page to load, making sure we can see the header logo
    await driver.wait(until.elementLocated(page.headerLogo));
    // make sure the header's inner text is Enter Wanted
    expect(await (await driver.findElement(page.headerLogo)).getText()).toEqual("Enter Wanted") });
});