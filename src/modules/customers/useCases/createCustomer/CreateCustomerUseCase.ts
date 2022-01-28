import { prisma } from '../../../../database/prismaClient';

interface ICreateCustomer{
    name: string;
    gender: string;
    birth_date: Date;
    age: number;
    city_id: number
}

export class CreateCustomerUseCase {
    async execute({ name, gender, birth_date, age, city_id }: ICreateCustomer) {
        
        const customerExist = await prisma.customers.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                }
            }
        });

        if (customerExist) {
            throw new Error('Customer already exists');
        }

        const cityExist = await prisma.cities.findFirst({
            where: {
                id : city_id
            }
        });

        if (!cityExist) {
            throw new Error('City id not exists');
        }

        if (!name) {
            throw new Error('Name is required');
        }
        
        const customer = await prisma.customers.create({
            data: {
                name,
                gender,
                birth_date,
                age,
                city_id
            }
        });
        
        return customer;
    }
}