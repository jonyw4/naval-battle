import { v4 as uuidv4 } from 'uuid';

export class Entity {
  public id: string
  constructor(protected props: any, id?: string){
    if(id){
      this.id = id
    }
    this.id = uuidv4()
  }
}
