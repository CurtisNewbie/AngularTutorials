//export the class so that it can be reused
export class Hero {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, descrip: string) {
    this.id = id;
    this.name = name;
    this.description = descrip;
  }
}
