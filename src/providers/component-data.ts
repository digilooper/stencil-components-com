class ComponentDataController {

  data: any = {};

  constructor() { }

  async load( endpoint ) {
    if (this.data && this.data[endpoint]) {
      return this.data[endpoint];
    } else {
      const rsp = await fetch( endpoint );
      //const rsp = await fetch('/assets/data/data.json');
      const json = await rsp.json();
      this.data[endpoint] = json;
      console.log(endpoint);
      return json;
    }
  }

  async getComponents( filter ) {
    const data = await this.load( filter );
    return data;
  }

}

export const ComponentData = new ComponentDataController();
