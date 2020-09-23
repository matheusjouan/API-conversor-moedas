import { Request, Response } from 'express';

import CreateTransactionsService from '../services/CreateTransactionsService';
import ListTransactionService from '../services/ListTransactionService';

export default class TransactionsController {
  public async show(req: Request, res: Response): Promise<Response> {
    const user_id = req.params.id;

    const listTransactionService = new ListTransactionService();

    const transactions = await listTransactionService.execute({
      user_id: Number(user_id),
    });

    return res.json(transactions);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const {
      user_id,
      currency_source,
      value_source,
      currency_target,
    } = req.body;

    const createTransactionService = new CreateTransactionsService();

    const transaction = await createTransactionService.execute({
      user_id,
      currency_source,
      value_source,
      currency_target,
    });

    return res.json(transaction);
  }
}
