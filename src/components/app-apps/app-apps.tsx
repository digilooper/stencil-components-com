import { Component } from '@stencil/core';

@Component({
  tag: 'app-apps',
  styleUrl: 'app-apps.css'
})
export class AppApps {

  render() {
    return (
        <div class="app-home">
            <h2 class="text-center">Apps built with stenciljs.</h2>
            <app-apps-grid filter="apps"></app-apps-grid>
        </div>
    );
  }
}
