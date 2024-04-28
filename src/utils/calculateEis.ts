import { eisRates } from "@/data/eisRates";

export const calculateEIS = (wage: number) => {
  let eis = 0;

  for (const category of eisRates) {
    if (wage === 0) return eis;
    if (wage >= category.min && wage <= category.max) {
      eis = category.employee;
      break;
    }
  }
  return eis;
};
