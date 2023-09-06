import { Router } from 'express';
import { ApiError, BadRequestError, NotFoundError, UnauthorizedError} from './helpers/api-erros'

const routes = Router();

routes.get('/', async (req, res) => {
    throw new  BadRequestError('Erro lançado na APi Error');

    return res.json('ok')
})


export default routes;