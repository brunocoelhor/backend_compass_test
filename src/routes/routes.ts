import { Router } from 'express';
import { FindCityController } from '../modules/cities/useCases/findCity/FindCityController';
import { CreateCityController } from '../modules/cities/useCases/createCity/CreateCityController';
import { CreateCustomerController } from '../modules/customers/useCases/createCustomer/CreateCustomerController';
import { UpdateCustomerController } from '../modules/customers/useCases/updateCustomer/UpdateCustomerController';
import { DeleteCustomerController } from '../modules/customers/useCases/deleteCustomer/DeleteCustomerController';
import { FindCityByNameController } from '../modules/cities/useCases/findCityByName/FindCityByNameController';
import { FindCityByStateController } from '../modules/cities/useCases/findCityByState/FindCityByStateController';
import { FindCustomerByIdController } from '../modules/customers/useCases/findCustomerById/FindCustomerByIdController';
import { FindCustomerByNameController } from '../modules/customers/useCases/findCustomerByName/FindCustomerByNameController';

const routes = Router();

const createCityController = new CreateCityController();
const findCityController = new FindCityController();
const findCityByNameController = new FindCityByNameController();
const findCityByStateController = new FindCityByStateController();

const createCustomerController = new CreateCustomerController;
const updateCustomerController = new UpdateCustomerController;
const deleteCustomerController = new DeleteCustomerController;
const findCustomerByIdController = new FindCustomerByIdController();
const findCustomerByNameController = new FindCustomerByNameController();

routes.post('/cities', createCityController.handle);
routes.get('/cities', findCityController.handle);
routes.get('/cities/findByName', findCityByNameController.handle);
routes.get('/cities/findByState', findCityByStateController.handle);


routes.post('/customers', createCustomerController.handle);
routes.put('/customers/:id', updateCustomerController.handle);
routes.delete('/customers/:id', deleteCustomerController.handle);
routes.get('/customers/findByName', findCustomerByNameController.handle);
routes.get('/customers/:id', findCustomerByIdController.handle);


export { routes };