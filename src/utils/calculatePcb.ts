import { pcbRates } from "@/data/pcbRates";

export const calculateTaxableIncome = (
  income: number,
  hasPartner: boolean,
  children: number
): number => {
  const potonganIndividu = 9000;
  const potonganKWSP = 4000;
  const potonganPasangan = 4000;
  const potonganAnak = 2000;
  const annualSalary = income * 12;
  let taxableIncome = 0;

  if (!hasPartner && children === 0) {
    taxableIncome = annualSalary - potonganIndividu - potonganKWSP;
  }
  if (!hasPartner && children > 0) {
    taxableIncome =
      annualSalary - potonganIndividu - potonganKWSP - potonganAnak * children;
  }
  if (hasPartner && children === 0) {
    taxableIncome =
      annualSalary - potonganIndividu - potonganKWSP - potonganPasangan;
  }
  if (hasPartner && children > 0) {
    taxableIncome =
      annualSalary -
      potonganIndividu -
      potonganKWSP -
      potonganPasangan -
      potonganAnak * children;
  }

  return taxableIncome;
};

export const calculatePcb = (
  income: number,
  hasPartner: boolean,
  children: number
): number => {
  let pcb = 0;
  const chargeableIncome = calculateTaxableIncome(income, hasPartner, children);

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
