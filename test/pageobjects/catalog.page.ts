import { $ } from '@wdio/globals';
import { mainPageUrl } from '../../data/urls';
import Page from './page';

class CatalogPage extends Page {

    public get addToC() {
        return $("(//a[contains(@class, 'product-card__link')])[1]"); 
        }
   
    
    public get addToCartButton() {
     return $('.add-to-cart-button'); 
     }


    public get cartIcon() {
     return $('.cart-icon'); 
    }

    addToCart(): void {
        this.addToCartButton.click();
    }

    openCart(): void {
        this.cartIcon.click();
    }

    addT(): void {
        this.addToC.click();
    }
    get fitstProduct () {
        return $("(//a[contains(@class, 'product-card')])[1]");
    }
    //метод
    public async clickToFirstProduct() {
        await this.fitstProduct.waitForClickable();
        await this.fitstProduct.click();
    }

} 



export default new CatalogPage(mainPageUrl);