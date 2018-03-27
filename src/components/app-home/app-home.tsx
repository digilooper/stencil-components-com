import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
        <div class="app-home">
            <h2 class="text-center">Web Components to drop into your stenciljs projects.</h2>
            <app-component-grid filter="components"></app-component-grid>
        </div>
    );
  }
}
