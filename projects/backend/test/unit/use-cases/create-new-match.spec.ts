import { CreateNewMatchUseCase } from '../../../src/app/use-cases/CreateNewMatchUseCase'
import { InMemoryMatchRepository } from '../../../src/infra/InMemoryMatchRepository';

const matchRepository = new InMemoryMatchRepository()

beforeEach(() => {
  matchRepository.matches = {}
})

describe('Create New Match', () => {
  it('should create a new match with success', async () => {
    const useCase = new CreateNewMatchUseCase({matchRepository})
    const output = await useCase.execute({
      playerName: 'Jony'
    })

    expect(output.matchId).toBeDefined()
    expect(matchRepository.matches[output.matchId].id).toBeDefined()
  })
});
