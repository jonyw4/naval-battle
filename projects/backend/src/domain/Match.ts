import { Entity } from "../protocols/Entity"
import { Player } from "./Player"

interface MatchProps {
  player1: Player
  player2?: Player
  startedAt?: Date
}

export class Match extends Entity<MatchProps> {
  constructor(props: MatchProps, id?: string){
    super(props, id)
  }

  assignPlayer2(player2: Player): void {
    this.props.player2 = player2
  }

  get isReadyToStart(): boolean {
    const isNotReady = !this.props.player2 || this.props.startedAt
    return !isNotReady
  }
}
