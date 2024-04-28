"use client";

import Salary from "@/modules/Salary";
import Summary from "@/modules/Summary";

export default function Home() {
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

        <Salary />
        <Summary />
      </div>
    </main>
  );
}
