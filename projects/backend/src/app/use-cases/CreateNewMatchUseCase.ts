import { Match } from "../../domain/Match"
import { Player } from "../../domain/Player"
import { UseCase } from "../../protocols/UseCase"
import { MatchRepository } from "../repositories/MatchRepository"

export module CreateNewMatchIO {
  export interface Input {
    playerName: string
  }
  export interface Output {
    matchId: string
  }
}

interface Deps {
  matchRepository: MatchRepository
}

export class CreateNewMatchUseCase implements UseCase<CreateNewMatchIO.Input, CreateNewMatchIO.Output> {
  constructor(private deps: Deps){}
  async execute(input: CreateNewMatchIO.Input): Promise<CreateNewMatchIO.Output>{
    const player = new Player({ name: input.playerName })
    const match = new Match({ player1: player })

    await this.deps.matchRepository.save(match)
  
    return { matchId: match.id }
  }
}
