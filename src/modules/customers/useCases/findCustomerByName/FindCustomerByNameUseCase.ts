import { prisma } from '../../../../database/prismaClient';

export class FindCustomerByNameUseCase {
    async execute(name) {

        const customers = await prisma.customers.findFirst({
            where: {
                name
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