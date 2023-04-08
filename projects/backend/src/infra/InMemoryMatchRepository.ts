import { MatchRepository } from "../app/repositories/MatchRepository";
import { Match } from "../domain/Match";

export class InMemoryMatchRepository implements MatchRepository {
  public matches: {[key: string]: Match} = {}
  async getById(id: string): Promise<Match> {
    const match = this.matches[id]
    
    if(!match){
      throw Error('There is no match with this id')
    }

    return match
  }
  async save(match: Match): Promise<void> {
    this.matches[match.id] = match
  }
}
