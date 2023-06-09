import { Entity } from "../protocols/Entity"

interface PlayerProps {
  name: string
}

export class Player extends Entity<PlayerProps> {
  constructor(props: PlayerProps, id?: string){
    super(props, id)
  }
  get name(): string{
    return this.props.name
  }
}
