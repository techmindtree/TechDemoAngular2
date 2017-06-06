import { TechAngular2Page } from './app.po';

describe('tech-angular2 App', function() {
  let page: TechAngular2Page;

  beforeEach(() => {
    page = new TechAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
