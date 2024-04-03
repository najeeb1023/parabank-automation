import { Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class LandingPage {

    constructor(public page: Page){
        pageFixture.page = page;
    }

    public async loginUser(username: string, password:string):Promise<void> {
        
    }

}