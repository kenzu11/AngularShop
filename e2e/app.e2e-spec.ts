import { AngularshopPage } from './app.po';

describe('angularshop App', () => {
  let page: AngularshopPage;

  beforeEach(() => {
    page = new AngularshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
