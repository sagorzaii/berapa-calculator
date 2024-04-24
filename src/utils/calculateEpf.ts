export const calculateEPF = (salary: number, rate: number) => {
  // ref for epf
  // https://www.kwsp.gov.my/employer/responsibilities/option-contribute
  if (rate) {
    const epfContribution = (salary * rate) / 100;
    const formattedEPF = new Intl.NumberFormat("en-MY", {
      maximumFractionDigits: 2,
    }).format(epfContribution);
    return Number(formattedEPF);
  }
  return 0;
};
