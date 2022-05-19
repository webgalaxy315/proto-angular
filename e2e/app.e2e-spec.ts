import { ProtoPage } from './app.po';

describe('proto App', () => {
  let page: ProtoPage;

  beforeEach(() => {
    page = new ProtoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
