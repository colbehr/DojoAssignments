import { QuotesAppPage } from './app.po';

describe('quotes-app App', () => {
  let page: QuotesAppPage;

  beforeEach(() => {
    page = new QuotesAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
