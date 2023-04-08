import { CreateNewMatchUseCase } from '../../../src/app/use-cases/CreateNewMatchUseCase'

describe('Create New Match', () => {
  it('should create a new match with success', async () => {
    const useCase = new CreateNewMatchUseCase()
    const output = await useCase.execute({
      playerName: 'Jony'
    })

    expect(output.matchId).toBeDefined()
  })
});
