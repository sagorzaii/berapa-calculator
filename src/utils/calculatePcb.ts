import { pcbRates } from "@/data/pcbRates";

export const calculateTaxableIncome = (
  isResident: boolean,
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

  if (!isResident) {
    return annualSalary;
  }

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
  isResident: boolean,
  income: number,
  hasPartner: boolean,
  children: number
): number => {
  let pcb = 0;
  const chargeableIncome = calculateTaxableIncome(
    isResident,
    income,
    hasPartner,
    children
  );

  if (!isResident) {
    return (chargeableIncome * 0.03) / 12;
  }

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
  const pcbPerMonth = Number(
    new Intl.NumberFormat("en-MY", {
      style: "decimal",
      maximumFractionDigits: 2,
    }).format(pcb / 12)
  );
  return pcbPerMonth;
};
