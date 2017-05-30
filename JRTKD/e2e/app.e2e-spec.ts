import { JRTKDPage } from './app.po';

describe('jrtkd App', () => {
  let page: JRTKDPage;

  beforeEach(() => {
    page = new JRTKDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
