import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addBtn: Locator;
  readonly cart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBtn = page.locator('.inventory_item button').first();
    this.cart = page.locator('.shopping_cart_link');
  }

  async addProduct() {
    await this.addBtn.click();
  }

  async goToCart() {
    await this.cart.click();
  }
}