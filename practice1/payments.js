function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== "number") {
      return "invalid input";
    }
    let totalIncomeAfterTax = payments.reduce((total, payment) => {
      if (payment >= 3000) {
        total += payment * 0.8;
      } else {
        total += payment; 
      }
      return total;
    }, 0);
    let savings = totalIncomeAfterTax - livingCost;
    if (savings < 0) {
      return "earn more";
    } else {
      return savings;
    }
  }
  console.log(monthlySavings([1000, 2000, 3000], 5400));
  console.log(monthlySavings([1000, 2000, 2500], 5000)); 
  console.log(monthlySavings([900, 2700, 3400], 10000)); 
  console.log(monthlySavings(100, [900, 2700, 3400])); 
  