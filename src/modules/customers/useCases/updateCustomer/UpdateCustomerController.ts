import { Request, Response } from 'express';
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

export class UpdateCustomerController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        const { id } = request.params;

        const customerId: number = +id;

        const updateCustomerUseCase = new UpdateCustomerUseCase();

        const customer = await updateCustomerUseCase.execute({
            name,
            id : customerId
        });

        return response.json(customer);
    }
}