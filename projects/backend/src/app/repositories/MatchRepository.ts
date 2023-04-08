import { Match } from "../../domain/Match";

export interface MatchRepository {
  getById(id: string): Promise<Match>
  save(match: Match): Promise<void>
}
