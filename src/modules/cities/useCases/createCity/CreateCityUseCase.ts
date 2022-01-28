import { prisma } from '../../../../database/prismaClient';

interface ICreateCity{
    name: string;
    state: string;
}

export class CreateCityUseCase {
    async execute({name, state}:ICreateCity) {
        const cityExist = await prisma.cities.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                },
                state: {
                    equals: state,
                    mode: 'insensitive'
                }
            }
        });

        if (cityExist) {
            throw new Error('City already exists');
        }
        
        const city = await prisma.cities.create({
            data: {
                name,
                state
            }
        });
        
        return city;
    }
}