import { PrismaClient } from '@prisma/client';
import faker from 'faker-br';

const prisma = new PrismaClient();

faker.locale = 'pt_BR';

async function main() {

    faker.locale = 'pt_BR';

    for (let i = 0; i < 10;  i++){
        await prisma.cities.create({
            data: {
                name: faker.address.city(),
                state: faker.address.stateAbbr()
    
            }
        });
    }

    for (let i = 0; i < 10;  i++){
        await prisma.customers.create({
            data: {
                name: faker.name.firstName(),
                gender: "M",
                birth_date: faker.date.past(),
                city_id: 1
            }
        });
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
