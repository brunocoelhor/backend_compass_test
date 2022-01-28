import { Request, Response } from 'express';
import { FindCityByNameUseCase } from './FindCityByNameUseCase';

export class FindCityByNameController {
    async handle(request: Request, response: Response) {
        const { name } = request.query;

        const findCityByNameUseCase = new FindCityByNameUseCase();

        const cities = await findCityByNameUseCase.execute(name);

        return response.json(cities);
    }
}