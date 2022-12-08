document.getElementById("calculate-btn").addEventListener("click", function() {
  const incomeTotal = document.getElementById("total-income");
  //   console.log(incomeTotal);
  const incomeValue = parseInt(incomeTotal.value);
  //   console.log(incomeValue);

  const foodExpensesInput = document.getElementById("food-expenses");
  const foodExpensesValue = parseInt(foodExpensesInput.value);
  //   console.log(foodExpensesValue);

  const rentExpensesInput = document.getElementById("rent-expenses");
  const rentExpensesValue = parseInt(rentExpensesInput.value);
  //   console.log(rentExpensesValue);

  const clothExpensesInput = document.getElementById("cloths-expenses");
  const clothExpensesValue = parseInt(clothExpensesInput.value);
  //   console.log(clothExpensesValue);

  if (
    incomeValue > 0 &&
    foodExpensesValue > 0 &&
    rentExpensesValue > 0 &&
    clothExpensesValue > 0
  ) {
    if (
      typeof foodExpensesValue != "string" &&
      typeof rentExpensesValue != "string" &&
      typeof clothExpensesValue != "string" &&
      typeof incomeValue != "string"
    ) {
      const totalCost =
        foodExpensesValue + rentExpensesValue + clothExpensesValue;
      //   console.log(totalExpenses);

      const expenses = document.getElementById("total-expenses");
      const totalExpensesText = parseFloat(expenses.innerText);
      //   console.log(totalExpensesText);
      expenses.innerText = totalCost;
      const previousBalance = document.getElementById("total-balance");
      const totalBalanceText = parseFloat(previousBalance.innerText);
      //   console.log(totalBalanceText);

      const balance = incomeValue - totalCost;
      //   console.log(balance);
      previousBalance.innerText = balance;
    } else {
      alert("Provide Integer Number");
    }
  } else {
    alert("Provide valid number");
  }
  incomeTotal.value = "";
  foodExpensesInput.value = "";
  rentExpensesInput.value = "";
  clothExpensesInput.value = "";
});
