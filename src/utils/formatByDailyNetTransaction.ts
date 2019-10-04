export interface DailyNetTransaction {
  [key: string]: number;
}

interface Transaction {
  transactionType: string;
  date: string;
  amount: number;
}

export const formatByDailyNetTransaction = (transactions: Transaction[]) => {
  return transactions.reduce<DailyNetTransaction>((acc, curr) => {
    if (acc[curr.date]) {
      if (curr.transactionType === "debit") {
        acc[curr.date] -= curr.amount;
      } else {
        acc[curr.date] += curr.amount;
      }
    } else {
      if (curr.transactionType === "credit") {
        acc[curr.date] = curr.amount;
      } else {
        acc[curr.date] = curr.amount * -1;
      }
    }
    return acc;
  }, {});
};
