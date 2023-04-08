import { Match } from "../../../src/domain/Match"
import { Player } from "../../../src/domain/Player"
import { InMemoryMatchRepository } from "../../../src/infra/InMemoryMatchRepository"
import { AssignPlayerBoardToMatchUseCase } from '../../../src/app/use-cases/AssignPlayerBoardToMatch'

const matchRepository = new InMemoryMatchRepository()

beforeEach(() => {
  matchRepository.matches = {}
})

describe('Assign Player Board To Match', () => {
  describe('Given existing player in a match', () => {
    describe('When is in preparation step', () => {
      it('should be able to assign they board in the match', async () => {
        const fakePlayer = new Player({name: 'Jony'})
        const fakeMatch = new Match({player1: fakePlayer})
        matchRepository.matches = {[fakeMatch.id]: fakeMatch}

        const useCase = new AssignPlayerBoardToMatchUseCase({
          matchRepository
        })
        await useCase.execute({
          playerId: fakePlayer.id,
          matchId: fakeMatch.id,
          shipsPositions: [
            {
              type: "CARRIER",
              position: {
                x: 1,
                y: 1
              },
            }
          ],
        })

        expect(fakeMatch.player1Board.id).toBeDefined()
      })
    })
  })
})
