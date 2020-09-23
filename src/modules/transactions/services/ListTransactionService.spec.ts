import ListTransactionService from './ListTransactionService';
import CreateTransactionsService from './CreateTransactionsService';

describe('ListTransactions', () => {
  it('should be able to list de transaction', async () => {
    const listTransactionService = new ListTransactionService();
    const createTransactionsService = new CreateTransactionsService();

    await createTransactionsService.execute({
      user_id: 5,
      currency_source: 'USD',
      currency_target: 'BRL',
      value_source: 10,
    });

    const transactions = await listTransactionService.execute({
      user_id: 5,
    });

    expect(transactions).toHaveProperty('user_id');
  });
});
