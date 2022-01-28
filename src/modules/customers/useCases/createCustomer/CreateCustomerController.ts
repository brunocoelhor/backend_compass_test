import { Request, Response } from 'express';
import { CreateCustomerUseCase } from './CreateCustomerUseCase';



export class CreateCustomerController {
    async handle(request: Request, response: Response) {
        const { name, gender, birthDate,  age, cityId } = request.body;
    
        const createCustomerUseCase = new CreateCustomerUseCase();
        
        const result = await createCustomerUseCase.execute({
            name,
            gender,
            birth_date: birthDate,
            age,
            city_id: cityId
        });

        return response.json(result);
    }
}