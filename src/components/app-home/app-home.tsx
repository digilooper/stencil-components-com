import { Component, State } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @State() data: any = [];

  async componentWillLoad() {
    const response = await fetch("/data/components.json");
    const data = await response.json();
    this.data = data;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="clear">
          <ion-title>Stencil Components</ion-title>
          <ion-buttons slot="end">
            <ion-button href="/submit">Submit</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          {Object.keys(this.data[0]).map(item => {
            const comp = this.data[0][item];
            return (
              <ion-item href={"/component/" + item} detail>
                <ion-label text-wrap>
                  {comp.title}
                  <p>{comp.description}</p>
                </ion-label>
              </ion-item>
            );
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
