export const calculateEMI = (
  amount: number,
  rate: number,
  years: number
) => {
  const r = rate / 12 / 100;

  const n = years * 12;

  const emi =
    (amount * r * Math.pow(1 + r, n)) /
    (Math.pow(1 + r, n) - 1);

  const totalPayment = emi * n;

  const totalInterest =
    totalPayment - amount;

  return {
    monthlyEmi: emi.toFixed(0),
    totalPayment:
      totalPayment.toFixed(0),
    totalInterest:
      totalInterest.toFixed(0),
  };
};