export type SummaryProps = {
  epf: number;
  socso: number;
  eis: number;
  mtd: number;
  netSalary: number;
  bonus?: number;
  allowance?: number;
};

const Summary = (props: SummaryProps) => {
  const { epf, socso, eis, mtd, netSalary } = props;
  return (
    <div className="w-full p-2 md:p-4 lg:p-8 bg-white shadow-md rounded">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Deductions
              </th>
              <th scope="col" className="px-6 py-3">
                Ringgit (RM)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-normal text-slate-400 whitespace-nowrap dark:text-white"
              >
                <span className="flex gap-1 items-center">
                  <img
                    className="w-10 h-10 object-cover"
                    src="/berapa-calculator/kwsp.png"
                    alt=""
                  />
                  Employee Provident Fund (EPF / KWSP)
                </span>
              </th>
              <td className="px-6 py-4">{epf}</td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-normal text-slate-400 whitespace-nowrap dark:text-white"
              >
                <span className="flex gap-1 items-center">
                  <img
                    className="w-10 h-10 object-contain"
                    src="/berapa-calculator/perkeso.png"
                    alt=""
                  />
                  Social Security Organisation (SOCSO / PERKESO)
                </span>
              </th>
              <td className="px-6 py-4">{socso}</td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-normal text-slate-400 whitespace-nowrap dark:text-white"
              >
                <span className="flex gap-1 items-center">
                  <img
                    className="w-10 h-10 object-contain"
                    src="/berapa-calculator/eis.png"
                    alt=""
                  />
                  Employment Insurance System (EIS)
                </span>
              </th>
              <td className="px-6 py-4">{eis}</td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-normal text-slate-400 whitespace-nowrap dark:text-white"
              >
                <span className="flex gap-1 items-center">
                  <img
                    className="w-10 h-10 object-contain"
                    src="/berapa-calculator/lhdn.png"
                    alt=""
                  />
                  Monthly Tax Deduction (MTD / PCB)
                </span>
              </th>
              <td className="px-6 py-4">{mtd}</td>
            </tr>
          </tbody>

          <tfoot>
            <tr className="font-semibold dark:text-white border-b">
              <th scope="row" className="px-6 py-3 text-md">
                Total Deductions
              </th>
              <td className="px-6 py-3 text-red-500">
                {new Intl.NumberFormat("en-MY").format(epf + eis + socso + mtd)}
              </td>
            </tr>

            <tr className="font-bold dark:text-white">
              <th scope="row" className="px-6 py-3 text-md">
                Net Salary
              </th>
              <td className="px-6 py-3 text-teal-400">{netSalary}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Summary;
