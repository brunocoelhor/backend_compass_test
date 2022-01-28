import { prisma } from '../../../../database/prismaClient';

export class FindCustomerByIdUseCase {
    async execute(id) {

        const customers = await prisma.customers.findFirst({
            where: {
                id
            },
            select: {
                id:true,
                name: true,
                gender: true,
                birth_date: true,
                city: {
                    select: {
                        id: true,
                        name: true,
                        state: true
                    }
                },
                created_at: true,
            }
        });

        return customers;
    }
}