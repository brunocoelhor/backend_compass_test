import { prisma } from '../../../../database/prismaClient';

export class DeleteCustomerUseCase {
    async execute({id}) {

        let result: object = {};

        try {
            result = await prisma.customers.delete({
                where: {
                    id
                }
            });
        } catch (e) {
            throw new Error('Cannot delete customer');
        }

        return result;
    }
}