import { UserProps } from "@/modules/Salary";
import { calculateEIS } from "./calculateEis";
import { calculateEPF } from "./calculateEpf";
import { calculatePcb } from "./calculatePcb";
import { calculateSOCSO } from "./calculateSocso";

export const calculateNonResident = (user: UserProps) => {
  const epf = 0;
  const eis = 0;
  const socso = calculateSOCSO(user.salary);
  const mtd = calculatePcb(false, user.salary, user.haveSpouse, 0);
  const allowance = user?.allowance || 0;
  const netSalary = user.salary - socso - mtd + allowance;
  return { socso, epf, mtd, eis, netSalary };
};

export const calculateResident = (user: UserProps) => {
  const epf = calculateEPF(user.salary, user.epfContribution);
  const socso = calculateSOCSO(user.salary);
  const eis = calculateEIS(user.salary);
  const mtd = calculatePcb(true, user.salary, user.haveSpouse, 0);
  const allowance = user?.allowance || 0;
  const netSalary = user.salary - epf - socso - eis - mtd + allowance;
  return { epf, socso, eis, mtd, netSalary };
};
