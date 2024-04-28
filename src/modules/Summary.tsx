const Summary = () => {
  return (
    <div className="w-full mt-8 p-4 bg-white shadow-md rounded">
      <p className="mb-3 font-bold text-slate-400">Deductions</p>

      <ul>
        <li className="flex items-center justify-between">
          <span className="text-sm text-slate-400">EPF</span>
          <span className="font-bold">100</span>
        </li>

        <li className="flex items-center justify-between">
          <span className="text-sm text-slate-400">SOCSO</span>
          <span className="font-bold">100</span>
        </li>

        <li className="flex items-center justify-between">
          <span className="text-sm text-slate-400">EIS</span>
          <span className="font-bold">100</span>
        </li>

        <li className="flex items-center justify-between">
          <span className="text-sm text-slate-400">MTD / PCB</span>
          <span className="font-bold">100</span>
        </li>
      </ul>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">Net Salary</span>
        <span className="font-bold">1000</span>
      </div>
    </div>
  );
};

export default Summary;
