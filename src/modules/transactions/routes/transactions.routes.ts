import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import TransactionsController from '../controllers/TransactionsController';

const transactionsRouter = Router();

const transactionsController = new TransactionsController();

transactionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.number().required(),
      currency_source: Joi.string().required(),
      currency_target: Joi.string().required(),
      value_source: Joi.number().required(),
    },
  }),
  transactionsController.create,
);

transactionsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  transactionsController.show,
);

export default transactionsRouter;
