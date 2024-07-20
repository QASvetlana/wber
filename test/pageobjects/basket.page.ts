import { mainPageUrl } from '../../data/urls';
import Page from './page';

class BasketPage extends Page {
    public get cartItems() { return $$('.cart-item'); }

    async getItemCount() {
        const items = await this.cartItems;
        return items.length;
    }

    public get firstProduct() {
        return $('div.product-card__main > a');
      }
    
      public get addToCartButton() {
        return $('button.add-to-basket');
      }
    
      public get cartCounter() {
        return $('span.nav-element__badge');
      }
    
      public async addToCart() {
        await this.firstProduct.click();
        await this.addToCartButton.click();
      }
    
      public async getCartCount() {
        const countText = await this.cartCounter.getText();
        return parseInt(countText, 10);
      }
}

export default new BasketPage(mainPageUrl);
