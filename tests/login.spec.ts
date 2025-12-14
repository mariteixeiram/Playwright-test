import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { config } from "../utils/config";

test("Successful Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto(config.baseURL);
  await loginPage.login(config.users.standard.username, config.users.standard.password);

  await inventoryPage.verifyHeader("Products");
});
