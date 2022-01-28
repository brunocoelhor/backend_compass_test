import { prisma } from '../../../../database/prismaClient';

export class FindCityByStateUseCase {
    async execute(state) {

        const cities = await prisma.cities.findMany({
            where: {
                state: {
                    equals: state, mode: 'insensitive'
                }
            }
        });

        return cities;
    }
}