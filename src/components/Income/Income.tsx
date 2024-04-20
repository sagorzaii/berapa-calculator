import { eisRates } from "@/data/eisRates";
import React, { useState } from "react";
import { socsoRates } from "../../data/socsoRates";

type IncomeCategory = {
  salary?: number;
  allowance?: number;
  bonus?: number;
};

type DeductionsCategory = {
  epfRate?: number;
  epfContribution?: number;
  socso?: number;
  eis?: number;
  mtd?: number;
};

const Income = () => {
  const defaultDeductions = {
    epfRate: 11,
  };

  const [income, setIncome] = useState<IncomeCategory>();
  const [showAllowance, setShowAllowance] = useState<boolean>(false);
  const [showBonus, setShowBonus] = useState<boolean>(false);
  const [deductions, setDeductions] =
    useState<DeductionsCategory>(defaultDeductions);

  const handleCalculateSOCSO = (wage: number) => {
    let socso = 0;

    for (const category of socsoRates) {
      if (wage >= category.min && wage <= category.max) {
        socso = category.employee;
        break;
      }
    }
    return socso;
  };

  const handleCalculateEIS = (wage: number) => {
    let eis = 0;

    for (const category of eisRates) {
      if (wage >= category.min && wage <= category.max) {
        eis = category.employee;
        break;
      }
    }
    return eis;
  };

  const handleCalculateMTD = () => {
    return 0;
  };

  const handleCalculateEPF = (salary: number) => {
    if (deductions?.epfRate) {
      const epfContribution = (salary * deductions.epfRate) / 100;
      const formattedEPF = new Intl.NumberFormat("en-MY", {
        maximumFractionDigits: 2,
      }).format(epfContribution);
      setDeductions({ ...deductions, epfContribution: Number(formattedEPF) });
      return Number(formattedEPF);
    }
    return 0;
  };

  const handleCalculateDeductions = () => {
    const salary = income?.salary ?? 0;
    const bonus = income?.bonus ?? 0;
    // ref for epf
    // https://www.kwsp.gov.my/employer/responsibilities/option-contribute
    const epfContribution = handleCalculateEPF(salary);
    // ref for socso & eis
    // https://www.perkeso.gov.my/uncategorised/184-our-services/800-contribution-rate.html
    const socso = handleCalculateSOCSO(salary + bonus);
    const eis = handleCalculateEIS(salary + bonus);
    const mtd = handleCalculateMTD();

    setDeductions({ ...deductions, epfContribution, socso, eis, mtd });
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "salary":
        setIncome({ ...income, salary: Number(e.target.value) });
        break;
      case "allowance":
        setIncome({ ...income, allowance: Number(e.target.value) });
        break;
      case "bonus":
        setIncome({ ...income, bonus: Number(e.target.value) });
        break;
      default:
        break;
    }
  };

  const handleDeductionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rate = Number(e.target.value.replace("%", "") ?? 0);
    setDeductions({
      ...deductions,
      epfRate: rate,
    });
  };

  const handleCalculateNetIncome = () => {
    const salary = income?.salary ?? 0;
    const allowance = income?.allowance ?? 0;
    const bonus = income?.bonus ?? 0;
    const epf = deductions?.epfContribution ?? 0;
    const socso = deductions?.socso ?? 0;
    const eis = deductions?.eis ?? 0;
    const mtd = deductions?.mtd ?? 0;

    const balance = salary + allowance + bonus - epf - socso - eis - mtd;
    const formattedBalance = new Intl.NumberFormat("en-MY", {
      style: "currency",
      currency: "MYR",
    }).format(balance);

    return formattedBalance;
  };

  const handleToggleAllowance = () => {
    setShowAllowance((prev) => !prev);
    setIncome({ ...income, allowance: 0 });
  };

  const handleToggleBonus = () => {
    setShowBonus((prev) => !prev);
    setIncome({ ...income, bonus: 0 });
  };

  console.log(income, deductions);

  return (
    <div className="w-100">
      <div>
        <p className="text-lg font-bold">Incomes</p>
        <div className="label">
          <span className="label-text">Salary</span>
        </div>
        <label className="input input-bordered input-sm flex items-center gap-2">
          RM
          <input
            type="number"
            className="grow"
            name="salary"
            placeholder="Enter salary"
            value={income?.salary}
            onChange={handleIncomeChange}
            onBlur={handleCalculateDeductions}
          />
        </label>

        {showAllowance && (
          <div>
            <div className="label">
              <span className="label-text">Allowance</span>
            </div>
            <label className="input input-bordered input-sm flex items-center gap-2">
              RM
              <input
                type="number"
                className="grow"
                name="allowance"
                placeholder="Enter allowance"
                onChange={handleIncomeChange}
                onBlur={handleCalculateDeductions}
              />
            </label>
          </div>
        )}

        {showBonus && (
          <div>
            <div className="label">
              <span className="label-text">Bonus</span>
            </div>
            <label className="input input-bordered input-sm flex items-center gap-2">
              RM
              <input
                type="number"
                className="grow"
                name="bonus"
                placeholder="Enter bonus"
                onChange={handleIncomeChange}
                onBlur={handleCalculateDeductions}
              />
            </label>
          </div>
        )}

        <div className="my-2.5 flex gap-2.5">
          <button
            className="btn btn-xs sm:btn-sm"
            onClick={handleToggleAllowance}
          >
            {showAllowance ? "- Allowance" : "+ Allowance"}
          </button>
          <button className="btn btn-xs sm:btn-sm" onClick={handleToggleBonus}>
            {showBonus ? "- Bonus" : "+ Bonus"}
          </button>
        </div>
      </div>

      <div className="divider"></div>

      <div>
        <p className="text-lg font-bold">Deductions</p>

        <div className="label">
          <span className="label-text">EPF Contribution</span>
        </div>

        <div className="mt-0.5 flex gap-2.5">
          <label className="form-control w-3/6">
            <select
              className="select select-sm select-bordered"
              onChange={handleDeductionsChange}
              onBlur={handleCalculateDeductions}
              value={deductions?.epfRate + "%"}
            >
              <option selected>Select</option>
              <option>0%</option>
              <option>5%</option>
              <option>11%</option>
              <option>16%</option>
            </select>
          </label>

          <label className="w-3/6 input input-bordered input-sm flex items-center gap-2">
            RM
            <input
              type="number"
              className="grow"
              name="epf"
              value={deductions?.epfContribution}
              readOnly
            />
          </label>
        </div>

        <div className="label">
          <span className="label-text">SOCSO</span>
        </div>
        <label className="input input-bordered input-sm flex items-center gap-2">
          RM
          <input
            type="number"
            className="grow"
            name="socso"
            value={deductions?.socso}
            readOnly
          />
        </label>

        <div className="label">
          <span className="label-text">EIS</span>
        </div>
        <label className="input input-bordered input-sm flex items-center gap-2">
          RM
          <input
            type="number"
            className="grow"
            name="eis"
            value={deductions?.eis}
            readOnly
          />
        </label>

        <div className="label">
          <span className="label-text">MTD / PCB</span>
        </div>
        <label className="input input-bordered input-sm flex items-center gap-2">
          RM
          <input
            type="number"
            className="grow"
            name="eis"
            value={deductions?.mtd}
            readOnly
          />
        </label>
      </div>

      <div className="divider"></div>

      <div className="stats text-emerald-400">
        <div className="stat">
          <div className="stat-title">Net Income</div>
          <div className="stat-value">{handleCalculateNetIncome()}</div>
          <div className="stat-desc"></div>
        </div>
      </div>
    </div>
  );
};

export default Income;
