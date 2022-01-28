/**
 * @jest-environment ./prisma/prisma-environment-jest
 */


import request from 'supertest';
import { app } from '../../app';

describe('Create Customer Controller', () => {

    it('Should be able to create a new customer', async () => {
        const response = await request(app)
            .post('/customers')
            .send({
                    name: 'Bruno',
                    gender: 'M',
                    birthDate: new Date(1984, 11, 4, 7),    
                    age: 37,
                    cityId: 1
            });
        
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
        
    });

    it('Should be able to find a customer by id', async () => {
        const response = await request(app)
            .get('/customers/1');
            
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
    });

    it('Should be able to find a customer by name', async () => {
        const response = await request(app)
            .get('/customers/findByName?name=Bruno');
            
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
    });

    it('Should be able to update a customer', async () => {
        const response = await request(app)
            .put('/customers/1')
            .send({
                    name: 'Claudio',
            });
        
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
    });

    it('Should be able to delete a customer', async () => {
        const response = await request(app)
            .delete('/customers/1');
        
            expect(response.status).toBe(200);
    });


});