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
  //   incomeTotal.value = "";
  foodExpensesInput.value = "";
  rentExpensesInput.value = "";
  clothExpensesInput.value = "";
});

function saveMoney() {
  document.getElementById("save-button").addEventListener("click", function() {
    // console.log("clicked");
    const saveInput = document.getElementById("save-total");
    const saveInputValue = parseInt(saveInput.value);
    // console.log(saveInputValue);

    const incomeTotal = document.getElementById("total-income");
    const incomeValue = parseInt(incomeTotal.value);
    // console.log(incomeValue);

    if (
      incomeValue > 0 &&
      saveInputValue > 0 &&
      incomeValue != "" &&
      saveInputValue != "" &&
      (typeof incomeValue != "string" && typeof saveInputValue != "string")
    ) {
      const save = incomeValue * saveInputValue / 100;
      // console.log(save);

      const savingAmountField = document.getElementById("saving-amount");
      const savingAmountText = parseFloat(savingAmountField.innerText);
      //   console.log(savingAmountText);
      savingAmountField.innerText = save;

      const totalBalanceField = document.getElementById("remaining-balance");
      const totalBalanceValue = parseFloat(totalBalanceField.innerText);
      //   console.log(totalBalanceValue);

      const previousBalance = document.getElementById("total-balance");
      const totalBalanceText = parseFloat(previousBalance.innerText);

      const remaining = totalBalanceText - save;
      //   console.log(remaining);
      totalBalanceField.innerText = remaining;
    } else {
      alert("please enter income value");
    }
    incomeTotal.value = "";
    saveInput.value = "";
  });
}

saveMoney();
