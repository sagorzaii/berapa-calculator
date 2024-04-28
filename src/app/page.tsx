"use client";

import Salary, { UserProps } from "@/modules/Salary";
import Summary, { SummaryProps } from "@/modules/Summary";
import { calculateEIS } from "@/utils/calculateEis";
import { calculateEPF } from "@/utils/calculateEpf";
import { calculatePcb } from "@/utils/calculatePcb";
import { calculateSOCSO } from "@/utils/calculateSocso";
import { useState } from "react";

export default function Home() {
  const defaultSummary: SummaryProps = {
    epf: 0,
    socso: 0,
    eis: 0,
    mtd: 0,
    monthlySalary: 0,
    bonus: 0,
    allowance: 0,
  };
  const [summaries, setSummaries] = useState<SummaryProps>(defaultSummary);

  const handleCalculate = (user: UserProps) => {
    const epf = calculateEPF(user.salary, user.epfContribution);
    const socso = calculateSOCSO(user.salary);
    const eis = calculateEIS(user.salary);
    const mtd = calculatePcb(user.salary, user.haveSpouse, 0);
    const netSalary = Number(
      new Intl.NumberFormat("en-MY", {
        style: "decimal",
      }).format(user.salary - epf - socso - eis - mtd)
    );

    setSummaries({
      epf,
      socso,
      eis,
      mtd,
      monthlySalary: netSalary,
      bonus: user?.bonus,
      allowance: user?.allowance,
    });
  };

  return (
    <main className="w-full h-full bg-teal-50 overflow-auto">
      <div className="w-full max-w-3xl mx-auto p-4 flex flex-col gap-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl drop-shadow-xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-400">
            Tax Calculation
          </span>{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-green-600 dark:decoration-green-800">
            Made Easy.
          </span>
        </h1>

        <Salary onCalculate={handleCalculate} />
        <Summary
          epf={summaries.epf}
          socso={summaries.socso}
          eis={summaries.eis}
          mtd={summaries.mtd}
          monthlySalary={summaries.monthlySalary}
        />
      </div>
    </main>
  );
}
