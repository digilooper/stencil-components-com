class ComponentDataController {

  data: any;

  constructor() { }

  async load() {
    if (this.data) {
      return this.data;
    } else {
      const rsp = await fetch('/assets/data/data.json');
      const json = await rsp.json();
      return json;
    }
  }

  async getComponents( filter ) {
    const data = await this.load();
    return data[filter];
  }

}

export const ComponentData = new ComponentDataController();
