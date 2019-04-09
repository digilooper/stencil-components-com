import { TestWindow } from '@stencil/core/testing';
import { AppSubmit } from './app-submit';

describe('app-submit', () => {
  it('should build', () => {
    expect(new AppSubmit()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppSubmitElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppSubmit],
        html: '<app-submit></app-submit>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
