import { Board } from "../../domain/Board"
import { ShipType, shipByType } from '../../domain/Ship'
import { UseCase } from "../../protocols/UseCase"
import { MatchRepository } from "../repositories/MatchRepository"

export module AssignPlayerBoardToMatchUseCaseIO {
  export interface Input {
    playerId: string,
    matchId: string,
    shipsPositions: {
      type: string,
      position: {
        x: number,
        y: number
      },
    }[]
  }
  export interface Output {}
}

interface Deps {
  matchRepository: MatchRepository
}

export class AssignPlayerBoardToMatchUseCase implements UseCase<AssignPlayerBoardToMatchUseCaseIO.Input, AssignPlayerBoardToMatchUseCaseIO.Output> {
  constructor(private deps: Deps){}
  async execute(input: AssignPlayerBoardToMatchUseCaseIO.Input): Promise<AssignPlayerBoardToMatchUseCaseIO.Output>{
    const match = await this.deps.matchRepository.getById(input.matchId)
    const board = new Board({
      shipsPositions: input.shipsPositions.map((shipPosition) => ({
        position: {
          x: shipPosition.position.x,
          y: shipPosition.position.y
        },
        ship: shipByType[shipPosition.type as ShipType]
      }))
    })

    match.assignBoardForPlayer(board, input.playerId)

    await this.deps.matchRepository.save(match)
    
    return
  }
}
