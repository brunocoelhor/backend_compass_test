import { Request, Response } from 'express';
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

export class DeleteCustomerController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const customerId: number = +id;

        const deleteCustomerUseCase = new DeleteCustomerUseCase();

        const customer = await deleteCustomerUseCase.execute({
            id : customerId
        });

        return response.json(customer);
    }
}