import { Component } from '@stencil/core';

@Component({
  tag: 'app-plugins',
  styleUrl: 'app-plugins.css'
})
export class AppPlugins {

  render() {
    return (
        <div class="app-home">
            <h2 class="text-center">Plugins to use in your stenciljs projects.</h2>
            <app-component-grid filter="plugins"></app-component-grid>
        </div>
    );
  }
}
