import { Player } from "../../domain/Player"
import { UseCase } from "../../protocols/UseCase"
import { MatchRepository } from "../repositories/MatchRepository"

export module JoinMatchUseCaseIO {
  export interface Input {
    playerName: string
    matchId: string
  }
  export interface Output {}
}

interface Deps {
  matchRepository: MatchRepository
}

export class JoinMatchUseCase implements UseCase<JoinMatchUseCaseIO.Input, JoinMatchUseCaseIO.Output> {
  constructor(private deps: Deps){}
  async execute(input: JoinMatchUseCaseIO.Input): Promise<JoinMatchUseCaseIO.Output>{
    const match = await this.deps.matchRepository.getById(input.matchId)

    const player2 = new Player({name: input.playerName})

    match.assignPlayer2(player2)
    
    await this.deps.matchRepository.save(match)

    return
  }
}
