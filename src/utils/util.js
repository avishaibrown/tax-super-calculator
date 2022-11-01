export const calculateTax = (income) => {
  if (income < 18200) {
    return 0;
  } else if (income < 37000) {
    return (income - 18200) * 0.19;
  } else if (income < 90000) {
    return 3572 + (income - 37000) * 0.325;
  } else if (income < 180000) {
    return 20797 + (income - 90000) * 0.37;
  } else {
    return 54097 + (income - 180000) * 0.45;
  }
};

export const calculateSuper = (income, superRate) => {
  return income * superRate;
};
