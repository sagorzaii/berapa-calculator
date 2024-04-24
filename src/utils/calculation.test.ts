import { calculateEIS } from "./calculateEis";
import { calculateEPF } from "./calculateEpf";
import { calculateChargeableIncome, calculatePcb } from "./calculatePcb";
import { calculateSOCSO } from "./calculateSocso";

it("epf should be accurate", () => {
  expect(calculateEPF(4000, 11)).toBe(440);
  expect(calculateEPF(4000, 12)).toBe(480);
});

it("socso should be accurate", () => {
  expect(calculateSOCSO(4000)).toBe(19.75);
  expect(calculateSOCSO(5100)).toBe(24.75);
});

it("eis should be accurate", () => {
  expect(calculateEIS(4000)).toBe(7.9);
  expect(calculateEIS(5000)).toBe(9.9);
});

it("chargeable income should be accurate", () => {
  expect(calculateChargeableIncome(4000)).toBe(4000 * 12 - 4000 - 9000);
});

it("pcb should be accurate", () => {
  expect(calculatePcb(4200)).toBe(62);
});
