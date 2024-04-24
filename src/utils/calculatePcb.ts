import { pcbRates } from "@/data/pcbRates";

export const calculateChargeableIncome = (income: number): number => {
  const potonganIndividu = 9000;
  const potonganKWSP = 4000;

  const annualSalary = income * 12;

  // if (bonus === 0) {
  const taxableIncome = annualSalary - potonganIndividu - potonganKWSP;

  return taxableIncome;
  // }
  // return 0;
  // else {
  //   const epfChargedOnBonus = calculateEPF(bonus, epfRate);
  //   const socsoChargedOnBonus = calculateSOCSO(bonus);
  //   const eisChargedOnBonus = calculateEIS(bonus);

  //   const bonusAfterDeductions =
  //     bonus - epfChargedOnBonus - socsoChargedOnBonus - eisChargedOnBonus;
  // }
};

export const calculatePcb = (income: number): number => {
  let pcb = 0;
  const chargeableIncome = calculateChargeableIncome(income);

  for (const tier of pcbRates) {
    if (
      chargeableIncome >= tier.minIncomeRange &&
      chargeableIncome <= tier.maxIncomeRange
    ) {
      pcb =
        (chargeableIncome - tier.firstChargeableIncome) * (tier.rate / 100) +
        tier.charge;
    }
  }
  return pcb / 12;
};
