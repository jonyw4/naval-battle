import { Entity } from "../protocols/Entity"
import { Player } from "./Player"

interface MatchProps {
  player1: Player
}

export class Match extends Entity {
  constructor(props: MatchProps, id?: string){
    super(props, id)
  }
}
