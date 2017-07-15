import { BarCodeAppPage } from './app.po';

describe('bar-code-app App', () => {
  let page: BarCodeAppPage;

  beforeEach(() => {
    page = new BarCodeAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
