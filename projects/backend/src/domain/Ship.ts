export enum ShipType {
  CARRIER = 'CARRIER',
  BATTLESHIP = 'BATTLESHIP',
  CRUISER = 'CRUISER',
  SUBMARINE = 'SUBMARINE',
  DESTROIYER = 'DESTROIYER'
}

interface ShipProps {
  type: string
  size: number 
}

export class Ship {
  constructor(protected props: ShipProps) {
  }
  get type(): string {
    return this.props.type
  }
  get size(): number{
    return this.props.size
  }
}

export const shipByType: {[key in ShipType]: Ship} = {
  [ShipType.CARRIER]: new Ship({type: ShipType.CARRIER, size: 5 }),
  [ShipType.BATTLESHIP]: new Ship({type: ShipType.BATTLESHIP, size: 4 }),
  [ShipType.CRUISER]: new Ship({type: ShipType.CRUISER, size: 3 }),
  [ShipType.SUBMARINE]: new Ship({type: ShipType.SUBMARINE, size: 3 }),
  [ShipType.DESTROIYER]: new Ship({type: ShipType.DESTROIYER, size: 3 })
}
