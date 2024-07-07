import { expect } from '@wdio/globals';
import MainPage from '../pageobjects/main.page';
import CatalogPage from '../pageobjects/catalog.page';
import BasketPage from '../pageobjects/basket.page';




describe('E2E tests for wildberries', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });


    it.skip('should search for a product', async () => {
        await MainPage.search('Ноутбук');
        const resultsTitle = await $('h1');
        
        await expect(resultsTitle).toBeExisting();
        await expect(resultsTitle).toHaveText('Ноутбук');
    });

   it.only('should add a product to the cart', async () => {
        await MainPage.clickToBtnCookies();
        await browser.pause(2000);
        await MainPage.search('Карандаш');
        await browser.pause(2000); 
        await CatalogPage.addToCart();
        await browser.pause(2000); 
        const cartCount = await BasketPage.getCartCount();
        expect(cartCount).toBeGreaterThan(0);

     });
 });





