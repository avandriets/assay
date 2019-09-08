import { getGreeting } from '../support/app.po';

describe('assay-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to assay-ui!');
  });
});
