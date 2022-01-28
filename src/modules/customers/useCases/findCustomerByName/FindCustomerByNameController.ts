import { Request, Response } from 'express';
import { FindCustomerByNameUseCase } from './FindCustomerByNameUseCase';

export class FindCustomerByNameController {
    async handle(request: Request, response: Response) {
        const { name } = request.query;

        const findCustomerByNameUseCase = new FindCustomerByNameUseCase();

        const customers = await findCustomerByNameUseCase.execute(name);

        return response.json(customers);
    }
}