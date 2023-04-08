import { Entity } from "../protocols/Entity"
import { Ship } from "./Ship"

export interface BoardPosition {
  x: number
  y: number
}

interface BoardProps {
  shipsPositions: {
    position: BoardPosition
    ship: Ship
  }[]
}

const BOARD_SIZE = 10

interface BoardCell {
  isHit: boolean
}


export class Board extends Entity<BoardProps> {
  constructor(props: BoardProps, id?: string){
    super(props, id)
    
    const value = this.generateEmptyBoard()
    console.log(value)
  }

  private generateEmptyBoard(): BoardCell[][] {
    return Array.from({ length: BOARD_SIZE }, () => (
      Array.from({ length: BOARD_SIZE }, () => (
        { isHit: false }
      ))
    ));
  }
}
