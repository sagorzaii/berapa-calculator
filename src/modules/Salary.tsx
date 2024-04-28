const Salary = () => {
  const handleToggleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    switch ((e.target as HTMLInputElement)?.name) {
      case "taxResident":
        console.log("taxResident");
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full p-4 bg-white shadow-md rounded">
      <div className="flex flex-col justify-between gap-4">
        <div>
          <div className="mb-4 flex items-center gap-4 justify-between">
            <p className="text-sm text-slate-400">I am a Tax Resident</p>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                defaultChecked
                name="taxResident"
                className="sr-only peer"
                onClick={handleToggleClick}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-400 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
            </label>
          </div>

          <div className="mb-4 flex items-center gap-4 justify-between">
            <p className="text-sm text-slate-400">I am below 60 years old</p>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                value=""
                name="overSixty"
                className="sr-only peer"
                onClick={handleToggleClick}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-400 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
            </label>
          </div>

          <div className="mb-4 flex items-center gap-4 justify-between">
            <p className="text-sm text-slate-400">I have a Spouse</p>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                name="haveSpouse"
                className="sr-only peer"
                onClick={handleToggleClick}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-400 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
            </label>
          </div>

          <div className="mb-4 flex items-center gap-4 justify-between">
            <p className="text-sm text-slate-400">Spouse have job/income</p>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                name="spouseHaveJob"
                className="sr-only peer"
                onClick={handleToggleClick}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-400 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
            </label>
          </div>

          <div className="mb-4 flex items-center gap-4 justify-between">
            <p className="text-sm text-slate-400">EPF Self-Contribution</p>

            <select
              id="epfContribution"
              className="block w-2/5 p-2 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
            >
              <option value="11" selected>
                11%
              </option>
              <option value="12">12%</option>
              <option value="13">13%</option>
              <option value="14">14%</option>
            </select>
          </div>

          <div className="mb-4 flex items-center gap-4 justify-between">
            <p className="text-sm text-slate-400">Monthly Salary (RM)</p>

            <input
              type="number"
              id="salary"
              name="salary"
              className="block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="3000"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-4 justify-between">
            <p className="text-sm text-slate-400">Bonus (RM)</p>

            <input
              type="number"
              id="bonus"
              name="bonus"
              className="block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Salary;
