import { Component } from '@stencil/core';

@Component({
  tag: 'app-ui',
  styleUrl: 'app-ui.css'
})
export class AppUI {

  render() {
    return (
        <div class="app-home">
            <h2 class="text-center">UI Kits to use in your stenciljs projects.</h2>
            <app-component-grid filter="ui"></app-component-grid>
        </div>
    );
  }
}
