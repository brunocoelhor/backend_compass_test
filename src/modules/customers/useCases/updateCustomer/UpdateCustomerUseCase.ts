import { prisma } from '../../../../database/prismaClient';

interface IUpdateCustomer{
    id: number;
    name: string;
}

export class UpdateCustomerUseCase {
    async execute({ id, name }: IUpdateCustomer) {
        
        let result: object = {};

        try {
            result = await prisma.customers.update({
                where: {
                    id
                },
                data: {
                    name
                }
            });
        } catch (e) {
            throw new Error('Cannot update customer');
        }

        return result;
    }
}