import { Component } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/component/:tag" component="app-component" />
          <ion-route url="/submit" component="app-submit" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
