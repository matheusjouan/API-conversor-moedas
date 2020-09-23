import { Router } from 'express';

import transactionsRouter from '../modules/transactions/routes/transactions.routes';

const routes = Router();

routes.use('/transactions', transactionsRouter);

export default routes;
