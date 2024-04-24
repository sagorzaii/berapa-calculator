// reference
// http://calcpcb.hasil.gov.my

export const pcbRates = [
  {
    minIncomeRange: 5001,
    maxIncomeRange: 20000,
    firstChargeableIncome: 5000,
    charge: 0,
    rate: 1,
  },
  {
    minIncomeRange: 20001,
    maxIncomeRange: 35000,
    firstChargeableIncome: 20000,
    charge: 0,
    rate: 3,
  },
  {
    minIncomeRange: 35001,
    maxIncomeRange: 50000,
    firstChargeableIncome: 35000,
    charge: 600,
    rate: 6,
  },
  {
    minIncomeRange: 50001,
    maxIncomeRange: 70000,
    firstChargeableIncome: 50000,
    charge: 1500,
    rate: 11,
  },
  {
    minIncomeRange: 70001,
    maxIncomeRange: 100000,
    firstChargeableIncome: 70000,
    charge: 3700,
    rate: 19,
  },
  {
    minIncomeRange: 100001,
    maxIncomeRange: 400000,
    firstChargeableIncome: 100000,
    charge: 9400,
    rate: 25,
  },
  {
    minIncomeRange: 400001,
    maxIncomeRange: 600000,
    firstChargeableIncome: 400000,
    charge: 84400,
    rate: 26,
  },
  {
    minIncomeRange: 600001,
    maxIncomeRange: 2000000,
    firstChargeableIncome: 600000,
    charge: 136400,
    rate: 28,
  },
  {
    minIncomeRange: 2000001,
    maxIncomeRange: Infinity,
    firstChargeableIncome: 2000000,
    charge: 528400,
    rate: 30,
  },
];
