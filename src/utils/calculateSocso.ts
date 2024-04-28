import { socsoRates } from "@/data/socsoRates";
// ref for socso & eis
// https://www.perkeso.gov.my/uncategorised/184-our-services/800-contribution-rate.html
export const calculateSOCSO = (wage: number) => {
  let socso = 0;

  for (const category of socsoRates) {
    if (wage === 0) return socso;
    if (wage >= category.min && wage <= category.max) {
      socso = category.employee;
      break;
    }
  }
  return socso;
};
