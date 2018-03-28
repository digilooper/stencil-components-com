import { Component, Prop, State } from '@stencil/core';

import { ComponentData } from '../../providers/component-data';

@Component({
  tag: 'app-component-grid',
  styleUrl: 'app-component-grid.css'
})
export class AppComponentGrid {

  @State() items: any[] = [];
  @Prop() filter: string;

  async componentWillLoad() {
    this.items = await ComponentData.getComponents(this.filter);
  }

  async componentWillUpdate() {
    this.items = await ComponentData.getComponents(this.filter);
  }

  render() {
    return (
        <div class="content-grid">
          {this.items.map(item => (
              <a target="_blank" href={item.url}>
            <div class="item">
                <div class="item-image">
                    <img alt={item.title} src={item.image ? item.image : '/assets/images/blank.jpg' }/>
                </div>
                <h4>{item.title}</h4>
                <div class="item-description block-with-text">
                    <p>{item.description}</p>
                </div>
                <div class="item-footer">
                  <div class="item-button">
                      <a target="_blank" href={item.url}>view</a>
                  </div>

              </div>

            </div>
             </a>
          ))}
      </div>
    );
  }
}
