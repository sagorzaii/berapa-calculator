"use client";

import Salary, { UserProps } from "@/modules/Salary";
import Summary, { SummaryProps } from "@/modules/Summary";
import { calculateNonResident, calculateResident } from "@/utils/calculateAll";
import { useState } from "react";

export default function Home() {
  const defaultSummary: SummaryProps = {
    epf: 0,
    socso: 0,
    eis: 0,
    mtd: 0,
    netSalary: 0,
    bonus: 0,
    allowance: 0,
  };
  const [summaries, setSummaries] = useState<SummaryProps>(defaultSummary);

  const handleCalculate = (user: UserProps) => {
    if (!user.taxResident) {
      const { epf, socso, eis, mtd, netSalary } = calculateNonResident(user);

      setSummaries({
        ...summaries,
        epf,
        socso,
        eis,
        mtd,
        netSalary,
        bonus: user?.bonus,
        allowance: user?.allowance,
      });
    } else {
      const { epf, socso, eis, mtd, netSalary } = calculateResident(user);
      setSummaries({
        ...summaries,
        epf,
        socso,
        eis,
        mtd,
        netSalary,
        bonus: user?.bonus,
        allowance: user?.allowance,
      });
    }
  };

  return (
    <main className="w-full h-full bg-teal-50 overflow-auto">
      <div className="w-full max-w-3xl mx-auto p-4 flex flex-col gap-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl drop-shadow-xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-400">
            Tax Calculator?
          </span>{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-green-600 dark:decoration-green-800">
            Berapa.
          </span>
        </h1>

        <Salary onCalculate={handleCalculate} />
        <Summary
          epf={summaries.epf}
          socso={summaries.socso}
          eis={summaries.eis}
          mtd={summaries.mtd}
          netSalary={summaries.netSalary}
        />
      </div>
      <footer className="flex justify-center text-xs">
        <a href="https://www.flaticon.com/free-icons/font" title="font icons">
          Font icons created by Muhamad Ulum - Flaticon
        </a>
      </footer>
    </main>
  );
}
