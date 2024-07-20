import { $ } from '@wdio/globals';
import { mainPageUrl } from '../../data/urls';
import Page from './page';

class MainPage extends Page {
    
    public get searchInput () {
        return $("//input[contains(@class, 'search-catalog__input')]");
    }
    

    public get searchButton () {
        return $("(//button[contains(@class, 'search-catalog__btn')])[1]");
    }


    public async search (query: string) {
        await this.searchInput.setValue(query);
        await this.searchButton.waitForClickable();
        await this.searchButton.click();
    }

    public get btnCookies () {
        return $("//button[contains(@class, 'cookies__btn')]");
    }

    public async clickToBtnCookies() {
        await this.btnCookies.waitForClickable();
        await this.btnCookies.click();
    }
   
}


export default new MainPage(mainPageUrl);