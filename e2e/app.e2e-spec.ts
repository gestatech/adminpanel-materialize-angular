import { AdminPanelAngularPage } from './app.po';

describe('admin-panel-angular App', () => {
  let page: AdminPanelAngularPage;

  beforeEach(() => {
    page = new AdminPanelAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
