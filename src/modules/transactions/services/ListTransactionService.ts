import db from '../../../database/connection';

import AppError from '../../../errors/AppError';

interface IRequest {
  user_id: number;
}

interface ITransactions {
  user_id: number;
  currency_source: string;
  value_source: number;
  currency_target: string;
  value_target: number;
  rate: number;
  date: Date;
}

class CreateTransactions {
  public async execute({ user_id }: IRequest): Promise<ITransactions[]> {
    const transactions = await db('transactions').where({
      user_id,
    });

    if (transactions.length === 0) {
      throw new AppError('This user does not have a transaction');
    }

    return transactions;
  }
}

export default CreateTransactions;
