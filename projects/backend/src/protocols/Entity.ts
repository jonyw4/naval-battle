import { v4 as uuidv4 } from 'uuid';

export class Entity<Props> {
  public id: string
  constructor(protected props: Props, id?: string){
    if(id){
      this.id = id
    }
    this.id = uuidv4()
  }
}
