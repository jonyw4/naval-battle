import { Match } from "../../domain/Match"
import { Player } from "../../domain/Player"
import { UseCase } from "../../protocols/UseCase"

export module CreateNewMatchIO {
  export interface Input {
    playerName: string
  }
  export interface Output {
    matchId: string
  }
}

export class CreateNewMatchUseCase implements UseCase<CreateNewMatchIO.Input, CreateNewMatchIO.Output> {
  async execute(input: CreateNewMatchIO.Input): Promise<CreateNewMatchIO.Output>{
    const player = new Player({ name: input.playerName })
    const match = new Match({ player1: player })
  
    return { matchId: match.id }
  }
}
