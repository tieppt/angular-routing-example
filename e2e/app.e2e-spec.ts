import { RouteAppPage } from './app.po';

describe('route-app App', () => {
  let page: RouteAppPage;

  beforeEach(() => {
    page = new RouteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
