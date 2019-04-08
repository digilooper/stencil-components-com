import { TestWindow } from '@stencil/core/testing';
import { AppComponent } from './app-component';

describe('app-component', () => {
  it('should build', () => {
    expect(new AppComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppComponent],
        html: '<app-component></app-component>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
