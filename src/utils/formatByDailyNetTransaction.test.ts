import { formatByDailyNetTransaction } from './formatByDailyNetTransaction';

const transactions = [
    {"transactionType": "debit", "date": "2019-01-01", "amount": 349.99},
    {"transactionType": "credit", "date": "2019-01-01", "amount": 349.99},
    {"transactionType": "debit", "date": "2019-01-01", "amount": 399.99},
    {"transactionType": "debit", "date": "2019-01-02", "amount": 350},
    {"transactionType": "credit", "date": "2019-01-02", "amount": 320},
    {"transactionType": "credit", "date": "2019-01-02", "amount": 125},
]
describe('formatByDailyNetTransaction',  () => {
    it('should return the correct value', () => {
        const result = formatByDailyNetTransaction(transactions);
        expect(result).toMatchObject({
            '2019-01-01': 399.99,
            '2019-01-02': -95 
        });
    });
})