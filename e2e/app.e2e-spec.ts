import { ClientAppFrontPage } from './app.po';

describe('client-app-front App', function() {
  let page: ClientAppFrontPage;

  beforeEach(() => {
    page = new ClientAppFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
