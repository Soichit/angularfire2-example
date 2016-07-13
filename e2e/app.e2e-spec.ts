import { AngularfireProjPage } from './app.po';

describe('angularfire-proj App', function() {
  let page: AngularfireProjPage;

  beforeEach(() => {
    page = new AngularfireProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
