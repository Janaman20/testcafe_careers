import { ClientFunction } from 'testcafe';
import { Selector, t } from 'testcafe';

fixture `Nandos careers testcafe POC`
    .page `https://preprod.careers.nandos.co.uk`;

    class Page {
        constructor () {
            this.locationsTextbox      = Selector('div.location-search__InputWrapper-sc-3m5cwn-3.eZkAnZ > input');
            this.heroText              = Selector('div.hero__SubWrapper-sc-7mvbl5-2.cJJTMe > p');
            this.Title                 = Selector('head > title');
            };
        }

const page = new Page();

test('Type text in locations textbox', async t => {
    await t
        .typeText(page.locationsTextbox, 'Peter Parker')
});

test('Check hero text', async t => {
    await t
        .expect(page.heroText.innerText).contains('Heart and soul', 'string contains the expected substring', { timeout: 500 });
});

test('check url', async t => {

const getLocation = ClientFunction(() => document.location.href);

await t
    .expect(getLocation()).contains('https://preprod.careers.nandos.co.uk');
});

test('Check homepage title', async t => {

    const getLocation = ClientFunction(() => document.location.href);
    
    await t
        .expect(page.Title.innerText).eql('Home | Nando\'s Careers', 'string contains the expected substring', { timeout: 500 });
});
    




