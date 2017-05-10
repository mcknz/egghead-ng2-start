import { EggheadNg2StartPage } from './app.po';

describe('egghead-ng2-start App', () => {
  let page: EggheadNg2StartPage;

  beforeEach(() => {
    page = new EggheadNg2StartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
