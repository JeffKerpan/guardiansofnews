import { GuardiansofnewsPage } from './app.po';

describe('guardiansofnews App', () => {
  let page: GuardiansofnewsPage;

  beforeEach(() => {
    page = new GuardiansofnewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
