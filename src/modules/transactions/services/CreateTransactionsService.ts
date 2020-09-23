import db from '../../../database/connection';

import api from '../../../services/api';

import AppError from '../../../errors/AppError';

interface ITransactions {
  user_id: number;
  currency_source: string;
  value_source: number;
  currency_target: string;
  value_target: number;
  rate: number;
  date: Date;
}

interface IRequest {
  user_id: number;
  currency_source: string;
  value_source: number;
  currency_target: string;
}

interface IRateItem {
  [key: string]: number;
}

interface IResponse {
  rates: IRateItem;
  date: Date;
}

class CreateTransactions {
  public async execute({
    currency_source,
    currency_target,
    user_id,
    value_source,
  }: IRequest): Promise<ITransactions> {
    try {
      const response = await api.get<IResponse>(
        `latest?base=${currency_source}`,
      );

      const baseValue = response.data.rates;
      const rate = baseValue[currency_target];
      const finalValue = rate * value_source;
      const date = response.data.date;

      const transactions = {
        user_id,
        currency_source,
        value_source,
        currency_target,
        value_target: finalValue,
        rate,
        date,
      };

      await db('transactions').insert(transactions);

      return transactions;
    } catch (err) {
      throw new AppError('Fails to create transaction');
    }
  }
}

export default CreateTransactions;
