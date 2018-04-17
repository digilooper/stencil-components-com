import { Component, Element, Prop, State } from '@stencil/core';

import { ComponentData } from '../../providers/component-data';

@Component({
  tag: 'app-apps-grid',
  styleUrl: 'app-apps-grid.css'
})
export class AppAppsGrid {

  @Element() el: any;

  @Prop({ mutable: true }) filter: string;

  @State() items: any[];
  @State() message: any = 'loading..';
  @State() isLoading: boolean = true;


  api: string = 'https://api.stencilcomponents.com/1.0/';

  componentWillLoad() {
    this.fetchData();
  }

  componentWillUpdate() {
    this.fetchData();

  }

  async fetchData() {
      await ComponentData.getComponents( this.switchEndpoint( this.filter ) ).then( (res) => {
        this.items = res;
        if ( res.length <= 0 ) {
            this.message = 'No Items.';
        } else {
            this.isLoading = false;
        }
        //this.el.forceUpdate();
      });
  }

  switchEndpoint( filter ) {

      let endpoint = this.api + 'component/items?category_name=components';

      switch( filter ) {
          case 'plugins': endpoint = this.api + 'component/items?category_name=tools&tag=plugin'; break;
          case 'ui': endpoint = this.api + 'component/items?category_name=tools&tag=ui'; break;
          case 'starters': endpoint = this.api + 'component/items?category_name=tools&tag=starter'; break;
          case 'learn': endpoint = this.api + 'component/items?category_name=learn'; break;
          case 'apps': endpoint = this.api + 'component/items?category_name=apps'; break;
          default: endpoint = this.api + 'component/items?category_name=components';
      }

      return endpoint;

  }

  renderHTML() {

      if (this.isLoading) {
        return ( <div class="message">{this.message}</div> );
      } else {

        return (
          <div class="content-grid">

            {this.items.map(item => (

              <div class="item">
                <a target="_blank" class="grid-link" href={item.url}>
                  <div class="item-image">
                      <img alt={item.title} src={item.image ? item.image : '/assets/images/blank.jpg' }/>
                  </div>
                  <h4>{item.title}</h4>
                  <div class="item-description block-with-text">
                      <p>{item.content}</p>
                  </div>
                </a>
              </div>

            ))}
          </div>
        );
      }

  }

  render() {
    return(
      <div>
        { this.renderHTML() }
      </div>
    );
  }
}
