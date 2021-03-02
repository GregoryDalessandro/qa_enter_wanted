import { EnterWantedPage } from "../pageObjects/enterWantedPage";
import { WebDriver, Builder, until, Capabilities, By } from "selenium-webdriver";

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
  it("can load the main page", async () => {
    // wait for the page to load, making sure we can see the header logo
    await driver.wait(until.elementLocated(page.headerLogo));
    // make sure the header's inner text is Enter Wanted
    expect(await (await driver.findElement(page.headerLogo)).getText()).toEqual("Enter Wanted")
  });
  /* Jira Test Case for the following test:
    https://dmutah.atlassian.net/browse/GDDL-43
  */
  it("will give the user an error message if the Header input is out of range", async () => {
    await driver.wait(until.elementLocated(page.headerLogo));
  // test min - 1 value (bad)
    // select the Header's input field
    // enter text "a23$5678"
    await page.enterText("a23$5678");
    // click submit
    await page.driver.findElement(page.submit).click();
    // verify there is an error message
    let error = await (await page.driver.findElement(By.xpath('(//li[@class="errorMessage"])[1]'))).getText();
    expect(error).toEqual('The "Header" field should be between 9 and 19 characters long.');
    /*TODO: create seperate expects for lines 42 - 45 to be housed within the single it test on line 29
     need to make lines 30, 34, and 36 modular so that they don't affect the other expects for lines 42-45
    // test min value (good)
    // test max value (good)
    // test max -1 value (good)
    // test max + 1 value (bad)
    */
  });
});

