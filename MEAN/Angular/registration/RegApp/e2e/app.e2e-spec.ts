import { RegAppPage } from './app.po';

describe('reg-app App', () => {
  let page: RegAppPage;

  beforeEach(() => {
    page = new RegAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
