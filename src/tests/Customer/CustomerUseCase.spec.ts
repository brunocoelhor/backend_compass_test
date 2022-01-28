/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { CreateCustomerUseCase } from '../../modules/customers/useCases/createCustomer/CreateCustomerUseCase';

describe('Create user', () => {

    let createCustomerUseCase: CreateCustomerUseCase;

    beforeAll(() => {
        createCustomerUseCase = new CreateCustomerUseCase();
    });
   
    it('It should allow creating a new customer', async () => {

        const customerData = {
            name: 'Bruno 1234',
            gender: 'M',
            birth_date: new Date(1984, 11, 4, 7),
            age: 37,
            city_id: 1
        };

        const customer = await createCustomerUseCase.execute(customerData);

        expect(customer).toHaveProperty('id');
    });

    it('Should not allow creating an existing customer', async () => {

        const customerData = {
            name: 'Bruno 12345',
            gender: 'M',
            birth_date: new Date(1984, 11, 4, 7),
            age: 37,
            city_id: 2
        };

        await createCustomerUseCase.execute(customerData);

        await expect(createCustomerUseCase.execute(customerData)).rejects.toEqual(
            new Error('Customer already exists')
        );
    });


    
});