import { Component } from '@stencil/core';

@Component({
  tag: 'app-learn',
  styleUrl: 'app-learn.css'
})
export class AppLearn {

  render() {
    return (
        <div class="app-home">
            <h2 class="text-center">Learn how to build with stenciljs.</h2>
            <app-component-grid filter="learn"></app-component-grid>
        </div>
    );
  }
}
