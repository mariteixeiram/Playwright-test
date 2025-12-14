import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { config } from "../utils/config";

test("Full Purchase Flow", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto(config.baseURL);
  await loginPage.login(config.users.standard.username, config.users.standard.password);

  await inventoryPage.addProductToCart("Sauce Labs Backpack");
  await inventoryPage.openCart();

  const product = page.locator(".cart_item:has-text('Sauce Labs Backpack')");
  await expect(product).toBeVisible();

  await page.locator("[data-test='checkout']").click();
  await page.locator("[data-test='firstName']").fill("Mariana");
  await page.locator("[data-test='lastName']").fill("QA");
  await page.locator("[data-test='postalCode']").fill("12345");
  await page.locator("[data-test='continue']").click();

  await expect(page.locator(".inventory_item_name")).toHaveText("Sauce Labs Backpack");

  await page.locator("[data-test='finish']").click();
 await expect(page.locator('.complete-header')).toHaveText(
  "Thank you for your order!",
  { timeout: 10000 } // aumenta para 10s
);});