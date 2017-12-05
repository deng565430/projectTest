var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;
var driver = new webdriver.Builder()
  .forBrowser('chrome')

  .build();

driver.get("http://localhost:3000");
driver.wait(until.titleIs('前端集成'), 1000);
driver.quit();