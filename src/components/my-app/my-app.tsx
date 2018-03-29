import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  render() {
    return (
        <div id="main-div">
          <header>

          <div class="site-header">

            <div class="pull-left">
                <span class="logo"><img src="/assets/icon/icon.png"/></span>
                <h1><span class="bold">stencil</span>components</h1>
            </div>

            <div class="pull-right">

                    <stencil-route-link url='/' exact={true}>
                        Components
                    </stencil-route-link>

                    <stencil-route-link url='/tools/plugins/' urlMatch={['/tools/:filter/']}>
                        Tools
                    </stencil-route-link>

                    <stencil-route-link url='/learn/' exact={true}>
                        Learn
                    </stencil-route-link>

                    <stencil-route-link url='/apps/' exact={true}>
                        Apps
                    </stencil-route-link>

                    <a class="cta" target="_blank" href="https://stenciljs.com">stenciljs</a>
            </div>
        </div>

          </header>

          <main class="app">
              <div class="wrapper">
                    <stencil-router>
                      <stencil-route url='/' component='app-home' exact={true}></stencil-route>
                      <stencil-route url='/tools/:filter/' component='app-tools' exact={true}></stencil-route>
                      <stencil-route url='/learn/' component='app-learn' exact={true}></stencil-route>
                      <stencil-route url='/apps/' component='app-apps' exact={true}></stencil-route>
                    </stencil-router>
                </div>
          </main>
          <footer>
              A Wonder Bread production  | Copyright © 1950
          </footer>
        </div>
    );
  }
}
