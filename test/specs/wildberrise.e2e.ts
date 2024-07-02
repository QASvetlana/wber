import { expect } from '@wdio/globals';
import MainPage from '../pageobjects/main.page';



describe('My Login application', () => {
    beforeEach(async () => {
        await browser.url("/");
    });

    

    it('should search for a product', async () => {
       // await HomePage.open();
        await MainPage.search('Ноутбук');
        //код ждет, пока WebdriverIO найдет первый элемент <h1> на текущей странице,
        // и затем сохраняет этот элемент в переменную resultsTitle
        const resultsTitle = await $('h1');
        await expect(resultsTitle).toBeExisting();
        await expect(resultsTitle).toHaveText('Ноутбук');
    });

});



