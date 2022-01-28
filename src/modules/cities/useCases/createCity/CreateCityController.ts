import { Request, Response } from 'express';
import { CreateCityUseCase } from './CreateCityUseCase';



export class CreateCityController {
    async handle(request: Request, response: Response) {
        const { name, state } = request.body;
    
        const createCityUseCase = new CreateCityUseCase();
        
        const result = await createCityUseCase.execute({
            name,
            state
        });

        return response.json(result);
    }
}