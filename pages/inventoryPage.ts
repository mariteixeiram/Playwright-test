import { Page, expect } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  header = () => this.page.locator(".title");
  addToCartButton = (productName: string) =>
    this.page.locator(`text=${productName} >> xpath=../.. >> button`);

  cartIcon = () => this.page.locator(".shopping_cart_badge");

  async verifyHeader(expected: string) {
    await expect(this.header()).toHaveText(expected);
  }

  async addProductToCart(productName: string) {
  const product = this.page
    .locator(".inventory_item")
    .filter({ hasText: productName });

  await product.locator("button").click();
}


  async openCart() {
    await this.page.locator(".shopping_cart_link").click();
  }
}
