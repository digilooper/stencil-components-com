import { Component, State } from '@stencil/core';

@Component({
  tag: 'app-submit',
  styleUrl: 'app-submit.css'
})
export class AppSubmit {

  @State() title: string;
  @State() description: string;
  @State() url: string;
  @State() message: string;
  @State() class: string = '';
  @State() submit: string = 'submit';
  @State() disabled: boolean = false;
  @State() role: string = '';
  @State() env: any;

  componentWillLoad() {
      this.getEnv();
  }

  getEnv() {

    fetch( '/assets/env.json' ).then( (res) => {
      return res.json();
    }).then( res => {
        this.env = res;
      //console.log(res);
    }).catch(function () {
      console.log('Promise Rejected');
    });


  }

  handleSubmit(e) {
    e.preventDefault();

    if ( '' !== this.role ) { return; }

    this.submit = 'loading..';
    this.class = '';
    this.disabled = true;
    this.message = '';
    this.role = '';

    let params = 'title=' + e.target.title.value + '&description=' + e.target.description.value + '&url=' + e.target.url.value + '&email=' + e.target.email.value;

    (async() => {
      try {
        var response = await fetch('https://api.stencilcomponents.com/1.0/component/items?' + params, {
          method: 'post',
          headers: {
              'Authorization': 'Bearer ' + this.env.token
          }
        });
        await response.json();
        this.submit = 'submit';
        this.message = 'yeehawww, success!';
        this.class = 'success';
        this.disabled = false;
        //console.log(data);
      } catch (e) {
          this.message = 'oops, submission failed!';
          this.class = 'error';
          this.disabled = false;
        //console.log(e)
      }
    })();

  }


  render() {
    return (
    <div>
      <h2>Submit your components, tools, and apps.</h2>
      <p>Fill in all fields below and share your awesome thing!</p>
      <h4>Requirements for component submission:</h4>
      <ul>
          <li>URL to resource is a public Github repository.</li>
          <li>Your repository needs an appropriate license such as MIT.</li>
          <li>Create a README.md for your repository. Include stencil component usage and examples.</li>
      </ul>
      <div id="submit-component">
          <div class={'message ' + this.class}>{this.message}</div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
              <input type="text" id="title" placeholder="title" required value={this.title} />
              <input type="text" id="description" placeholder="short description" required value={this.description} />
              <input type="text" id="url" placeholder="url to resource" required value={this.url} />
              <input type="email" id="email" placeholder="email" required value={this.url} />
              <input type="hidden" id="role" value={this.role} />
              <p>Submissions will be verified before going live. If you are submitting an app, link to a working example or download.</p>
              <input type="submit" value={this.submit} disabled={this.disabled} />
          </form>
      </div>
    </div>
    );
  }
}
