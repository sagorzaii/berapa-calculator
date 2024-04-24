"use client";

import Expenses from "@/modules/Expenses/Expenses";
import Income from "@/modules/Income/Income";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <main className="w-full lg:w-2/5 p-4 md:p-8 lg:p-16">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="income_tab"
          role="tab"
          className="tab"
          aria-label="Income"
          checked={activeTab === 0}
          onClick={() => handleTabClick(0)}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <Income />
        </div>

        <input
          type="radio"
          name="expenses_tab"
          role="tab"
          className="tab"
          aria-label="Expenses"
          checked={activeTab === 1}
          onClick={() => handleTabClick(1)}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <Expenses />
        </div>
      </div>
    </main>
  );
}
