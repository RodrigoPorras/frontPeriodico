import { FrontPeriodicoPage } from './app.po';

describe('front-periodico App', () => {
  let page: FrontPeriodicoPage;

  beforeEach(() => {
    page = new FrontPeriodicoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
