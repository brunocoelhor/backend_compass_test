import { Request, Response } from 'express';
import { FindCityByStateUseCase } from './FindCityByStateUseCase';

export class FindCityByStateController {
    async handle(request: Request, response: Response) {
        const { state } = request.query;

        const findCityByStateUseCase = new FindCityByStateUseCase();

        const cities = await findCityByStateUseCase.execute(state);

        return response.json(cities);
    }
}