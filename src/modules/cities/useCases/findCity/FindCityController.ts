import { Request, Response } from 'express';
import { FindCityUseCase } from './FindCityUseCase';

export class FindCityController {
    async handle(request: Request, response: Response) {

        const findCityUseCase = new FindCityUseCase();

        const cities = await findCityUseCase.execute();

        return response.json(cities);
    }
}