import { JoinMatchUseCase } from '../../../src/app/use-cases/JoinMatchUseCase'
import { Match } from '../../../src/domain/Match'
import { Player } from '../../../src/domain/Player'
import { InMemoryMatchRepository } from '../../../src/infra/InMemoryMatchRepository'

const matchRepository = new InMemoryMatchRepository()

beforeEach(() => {
  matchRepository.matches = {}
})

describe('Join Match', () => {
  describe('Given an existing match', () => {
    describe('When there is no player two', () => {
      it('should join a match with success', async () => {
        const fakeMatch = new Match({player1: new Player({name: 'Jony'})})
        matchRepository.matches = {[fakeMatch.id]: fakeMatch}

        const useCase = new JoinMatchUseCase({
          matchRepository
        })
        await useCase.execute({
          playerName: 'Jony',
          matchId: fakeMatch.id
        })

        expect(fakeMatch.isReadyToStart).toBe(true)
      })
    })
  })
})
