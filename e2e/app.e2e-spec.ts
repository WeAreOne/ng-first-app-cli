import { NgFirstAppCliPage } from './app.po';

describe('ng-first-app-cli App', () => {
  let page: NgFirstAppCliPage;

  beforeEach(() => {
    page = new NgFirstAppCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
