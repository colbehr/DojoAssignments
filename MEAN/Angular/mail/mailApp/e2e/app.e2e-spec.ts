import { MailAppPage } from './app.po';

describe('mail-app App', () => {
  let page: MailAppPage;

  beforeEach(() => {
    page = new MailAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
