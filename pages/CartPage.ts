import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly items: Locator;

  constructor(page: Page) {
    this.items = page.locator('.cart_item');
  }
}