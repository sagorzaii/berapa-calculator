import { calculateEIS } from "./calculateEis";
import { calculateEPF } from "./calculateEpf";
import { calculatePcb, calculateTaxableIncome } from "./calculatePcb";
import { calculateSOCSO } from "./calculateSocso";

const young = 25;
const old = 60;
const potonganIndividu = 9000;
const potonganKWSP = 4000;
const potonganPasangan = 4000;
const potonganAnak = 2000;

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

describe("pcb for single, no children", () => {
  it("taxable income for single", () => {
    expect(calculateTaxableIncome(4000, false, 0)).toBe(
      4000 * 12 - potonganKWSP - potonganIndividu
    );
  });
  it("pcb for single", () => {
    expect(calculatePcb(4200, false, 0)).toBe(62);
  });
});

describe("pcb for single with 1 child", () => {
  it("taxable income for single with 1 child", () => {
    expect(calculateTaxableIncome(5000, false, 1)).toBe(
      5000 * 12 - potonganKWSP - potonganIndividu - potonganAnak
    );
  });
  it("pcb for single with 1 child", () => {
    expect(calculatePcb(5000, false, 1)).toBe(100);
  });
});

describe("pcb for single with partner, no children", () => {
  it("taxable income for single with partner, no children", () => {
    expect(calculateTaxableIncome(5000, true, 0)).toBe(
      5000 * 12 - potonganKWSP - potonganIndividu - potonganPasangan
    );
  });
  it("pcb for single with partner, no children", () => {
    expect(calculatePcb(5000, true, 0)).toBe(90);
  });
});

describe("pcb for single with partner, 1 child", () => {
  it("taxable income for single with partner, 1 child", () => {
    expect(calculateTaxableIncome(5000, true, 1)).toBe(
      5000 * 12 -
        potonganKWSP -
        potonganIndividu -
        potonganPasangan -
        potonganAnak
    );
  });
  it("pcb for single with partner, 1 child", () => {
    expect(calculatePcb(5000, true, 1)).toBe(80);
  });
});

describe("pcb for single with partner, 2 child", () => {
  it("taxable income for single with partner, 2 child", () => {
    expect(calculateTaxableIncome(5000, true, 2)).toBe(
      5000 * 12 -
        potonganKWSP -
        potonganIndividu -
        potonganPasangan -
        potonganAnak * 2
    );
  });
  it("pcb for single with partner, 2 child", () => {
    expect(calculatePcb(5000, true, 2)).toBe(70);
  });
});
