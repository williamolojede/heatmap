import { getTransactionLevel } from './getTransactionLevel';

describe('getTransactionLevel',  () => {
    it('should return 3', () => {
        const result = getTransactionLevel(3, 3);
        expect(result).toBe(3)
    });

    it('should return 2', () => {
        const result = getTransactionLevel(-1.2, -3);
        expect(result).toBe(2)
    });
})