import { Request, Response } from 'express';
import { FindCustomerByIdUseCase } from './FindCustomerByIdUseCase';

export class FindCustomerByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        
        const customerId: number = +id;

        const findCustomerByIdUseCase = new FindCustomerByIdUseCase();

        const customers = await findCustomerByIdUseCase.execute(customerId);

        return response.json(customers);
    }
}