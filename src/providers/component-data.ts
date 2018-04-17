class ComponentDataController {

  data: any = {};

  constructor() { }

  async load( endpoint ) {
    if (this.data && this.data[endpoint]) {
      return this.data[endpoint];
    } else {
      const rsp = await fetch( endpoint );
      const json = await rsp.json();
      this.data[endpoint] = json;
      return json;
    }
  }

  async getComponents( filter ) {
    const data = await this.load( filter );
    return data;
  }

  async getComponent( endpoint ) {
    const data = await this.load( endpoint );
    return data;
  }

}

export const ComponentData = new ComponentDataController();
