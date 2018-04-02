import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-tools',
  styleUrl: 'app-tools.css'
})
export class AppTools {

  @Prop() match: MatchResults;
  @State() gridfilter: string = "plugins";

  componentWillLoad() {
    if ( "filter" in this.match.params ) {
      this.gridfilter = this.match.params.filter;
    }
  }

  componentWillUpdate() {
    if ( "filter" in this.match.params ) {
      this.gridfilter = this.match.params.filter;
    }
  }

  render() {
    return (
        <div class="app-home">
            <h2 class="text-center">Tools to help you build stenciljs projects.</h2>
            <div class="app-segment">
                <stencil-route-link url='/tools/plugins/' exact={true}>Plugins</stencil-route-link>

                <stencil-route-link url='/tools/ui/' exact={true}>UI</stencil-route-link>

                <stencil-route-link url='/tools/starters/' exact={true}>Starters</stencil-route-link>
            </div>
            <app-component-grid filter={this.gridfilter}></app-component-grid>
        </div>
    );
  }
}
