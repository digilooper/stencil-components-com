import { Component } from "@stencil/core";

@Component({
  tag: "app-submit",
  styleUrl: "app-submit.css"
})
export class AppSubmit {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="clear">
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Submit</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <p>
          Visit the Stencil Components repository and do a pull request. Add
          your Stencil component to the yaml file located at
          <a href="https://github.com/modemlooper/stencil-components-com/blob/master/src/content/components.yml">
            /src/content/components.yml
          </a>{" "}
          The component must be hosted on github and have a readme file.
        </p>
      </ion-content>
    ];
  }
}
