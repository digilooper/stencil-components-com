import { Component, Prop, State } from "@stencil/core";
import { markdown } from "markdown";

@Component({
  tag: "app-component",
  styleUrl: "app-component.css"
})
export class AppComponent {
  @Prop() tag: string = "";
  @State() data: any;
  @State() readme: any = "";

  async componentWillLoad() {
    const response = await fetch("/data/components.json");
    const data = await response.json();

    this.data = data[0][this.tag];

    this.data.github =
      this.data.github.replace(/github.com/g, "api.github.com/repos") +
      "/readme";
  }

  async componentDidLoad() {
    const response = await fetch(this.data.github, {
      headers: new Headers({
        accept: "application/vnd.github.v3+json"
      })
    });
    const data = await response.json();
    this.readme = markdown.toHTML(atob(data.content));
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>{this.data.title}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <div innerHTML={this.readme} />
      </ion-content>
    ];
  }
}
