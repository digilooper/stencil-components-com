import { Component, Element, Prop, State } from '@stencil/core';

import { ComponentData } from '../../providers/component-data';

@Component({
  tag: 'app-learn-list',
  styleUrl: 'app-learn-list.css'
})
export class AppLearnList {

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
      await ComponentData.getComponents( this.api + 'component/items?category_name=learn' ).then( (res) => {
        this.items = res;
        if ( res.length <= 0 ) {
            this.message = 'No Items.';
        } else {
            this.isLoading = false;
        }
        //this.el.forceUpdate();
      });
  }

  renderHTML() {

      if (this.isLoading) {
        return ( <div class="message">{this.message}</div> );
      } else {

        return (
          <div class="content-list">

            {this.items.map(item => (

              <div class="item">
                <a target="_blank" class="grid-link" href={item.url}>
                  <div class="item-image">
                      <img alt={item.title} src={item.image ? item.image : '/assets/images/blank.jpg' }/>
                  </div>
                  <div class="item-content">
                    <h4>{item.title}</h4>
                    <div class="item-description block-with-text">
                      <p>{item.content}</p>
                    </div>
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
