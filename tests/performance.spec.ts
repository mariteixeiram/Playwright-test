import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { config } from "../utils/config";

test("Performance test with performance_glitch_user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);


  // Login with performance_glitch_user
  await loginPage.goto(config.baseURL);
  await loginPage.login(
    config.users.performance.username,
    config.users.performance.password
  );

   // Start timer
  const startTime = Date.now();

  // Wait until inventory page is visible
  await expect(page.locator(".inventory_list")).toBeVisible();

  // End timer
  const duration = Date.now() - startTime;
  console.log(`Login + load time: ${duration} ms`);

  // Expect duration < 3000ms
  expect(duration).toBeLessThan(3000); // intentional fail (it usually takes longer)
});
