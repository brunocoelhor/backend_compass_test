import { prisma } from '../../../../database/prismaClient';

export class FindCityByNameUseCase {
    async execute(name) {

        const cities = await prisma.cities.findMany({
            where: {
                name: {
                    equals: name, mode: 'insensitive'
                }
            }
        });

        return cities;
    }
}