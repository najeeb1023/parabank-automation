import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../resources/interfaces/iPageElement";
import * as loginLocators from "../resources/loginLocators.json";

    function getResource(resourceName: string){
        return loginLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }
export class LandingPage {

    constructor(public page: Page){
        pageFixture.page = page;
    };

    firstName_array = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan",
    "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem",
    "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel",
    "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola",
    "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad",
    "Ahmed", "Ahmed-Aziz", "Ahoua", "Austen", "Austin", "Avani", "Averon", "Avi", "Avinash", "Avraham", "Awais", "Awwal",
    "Axel", "Ayaan", "Ayan", "Aydan", "Ayden", "Aydin", "Aydon", "Ayman", "Ayomide", "Ayren", "Ayrton", "Aytug", "Ayub", "Ayyub", "Azaan", "Azedine", "Azeem",
    "Azim", "Aziz", "Azlan", "Azzam", "Azzedine", "Babatunmise", "Babur", "Bader", "Badr", "Badsha", "Bailee", "Bailey", "Bailie", "Bailley", "Baillie", "Baley"];

    lastName_array = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock",
    "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser",
    "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling",
    "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt",
    "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster",
    "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan",
    "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones",
    "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson",
    "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt",
    "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler" ];

    cityName_array = ["Lodon", "New York", "Karachi", "Delhi", "Berlin", "Toronto"];

    landingPageLocators = {
        fistName:()=> pageFixture.page.locator(getResource('firstName').selectorValue),
        lastName:()=> pageFixture.page.locator(getResource('lastName').selectorValue),
        addressField:()=> pageFixture.page.locator(getResource('addressField').selectorValue),
        cityField:()=> pageFixture.page.locator(getResource('cityField').selectorValue),
        stateField:()=> pageFixture.page.locator(getResource('stateField').selectorValue),
        zipcodeField:()=> pageFixture.page.locator(getResource('zipcodeField').selectorValue),
        ssnField:()=> pageFixture.page.locator(getResource('ssnField').selectorValue),
        userNameField:()=> pageFixture.page.locator(getResource('userNameField').selectorValue),
        passwordField:()=> pageFixture.page.locator(getResource('passwordField').selectorValue),
        confirmPassField:()=> pageFixture.page.locator(getResource('confirmPassField').selectorValue),
        registerBtn:()=> pageFixture.page.locator(getResource('registerBtn').selectorValue),
        loginPara:()=> pageFixture.page.locator(getResource('loginPara').selectorValue)
    };

    public async registerUser():Promise<void> {
        await this.landingPageLocators.fistName().fill(this.firstName_array[Math.floor(Math.random() * this.firstName_array.length)]);
        await this.landingPageLocators.lastName().fill(this.lastName_array[Math.floor(Math.random() * this.lastName_array.length)]);
        await this.landingPageLocators.addressField().fill('11th Street, Uptown');
        await this.landingPageLocators.cityField().fill(this.cityName_array[Math.floor(Math.random() * this.cityName_array.length)]);
        await this.landingPageLocators.stateField().fill('Arizona');
        await this.landingPageLocators.zipcodeField().fill('749837');
        await this.landingPageLocators.ssnField().fill('934875');
        const userNameStored = this.firstName_array[Math.floor(Math.random() * this.firstName_array.length)]+
                               this.lastName_array[Math.floor(Math.random() * this.lastName_array.length)];
        await this.landingPageLocators.userNameField().fill(userNameStored)
        await this.landingPageLocators.passwordField().fill('password123');
        await this.landingPageLocators.confirmPassField().fill('password123');
        await this.landingPageLocators.registerBtn().click();
    };

    public async isUserLoggedIn():Promise<void>{
        const assertLogin = await this.landingPageLocators.loginPara();
        expect(assertLogin).toContainText('Welcome');
        console.log("\n" + ("    ") +await this.landingPageLocators.loginPara().textContent() + "\n");
    };
};