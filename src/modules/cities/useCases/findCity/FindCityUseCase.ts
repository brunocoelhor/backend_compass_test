import { prisma } from '../../../../database/prismaClient';

export class FindCityUseCase {
    async execute() {

        const cities = await prisma.cities.findMany();

        return cities;
    }
}