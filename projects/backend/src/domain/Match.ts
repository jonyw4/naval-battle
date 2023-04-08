import { Entity } from "../protocols/Entity"
import { Board } from "./Board"
import { Player } from "./Player"

interface MatchProps {
  player1: Player
  player1Board?: Board
  player2?: Player
  player2Board?: Board
  startedAt?: Date
}

export class Match extends Entity<MatchProps> {
  constructor(props: MatchProps, id?: string){
    super(props, id)
  }

  assignBoardForPlayer(board: Board, playerId: string): void {
    if(this.props.player1.id === playerId){
      this.props.player1Board = board
      return
    }
    if(this.props.player2.id === playerId){
      this.props.player2Board = board
    }
    
    throw new Error('There is no player with this ID in this board')
  }

  get player1(): Player {
    return this.props.player1
  }
  
  get player2(): Player | undefined {
    return this.props.player2
  }

  set player2(player2: Player) {
    this.props.player2 = player2
  }

  get player1Board(): Board | undefined {
    return this.props.player1Board
  }

  get player2Board(): Board | undefined {
    return this.props.player2Board
  }
}
