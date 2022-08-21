const calculateBtn = document.getElementById("calculate-btn");
const foodPrice = document.getElementById("food-price");
const rentPrice = document.getElementById("rent-price");
const clothPrice = document.getElementById("cloth-price");

// const totalExpenses = document.getElementById("total-expenses");
const totalIncome = document.getElementById("total-income");
const balance = document.getElementById("balance");
const saveDiscount = document.getElementById("save-discount");
const saveBtn = document.getElementById("save-btn");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

const totalExpensesAmount = document.getElementById("total-expenses-amount");
const totalBalanceAmount = document.getElementById("total-balance-amount");

//----------------discount span section-------------//
const saveAmountTotal = document.getElementById("save-amount-total");
const remainBalanceTotal = document.getElementById("remain-balance-total");
//-------------------------------------//
calculateBtn.addEventListener("click", function () {
  const totalIncomeParse = parseInt(totalIncome.value);
  const foodPriceParse = parseInt(foodPrice.value);
  const rentPriceParse = parseInt(rentPrice.value);
  const clothPriceParse = parseInt(clothPrice.value);
  let totalExpensesAmountParse = parseInt(totalExpensesAmount.innerText);

  totalExpensesAmount.innerText =
    foodPriceParse + rentPriceParse + clothPriceParse;
  // totalExpensesAmount.innerText += totalPrice;

  //   foodPrice.value = "";
  //   rentPrice.value = "";
  //   clothPrice.value = "";

  let balanceParse = parseInt(balance.innerText);

  totalBalanceAmount.innerText =
    totalIncomeParse - totalExpensesAmount.innerText;
});

/* save button for discount section*/

saveBtn.addEventListener("click", function () {
  const totalBalanceAmountParse = parseInt(totalBalanceAmount.innerText);
  // const saveAmountTotalParse = parseInt(saveAmountTotal.innerText);
  // const remainBalanceTotalParse = parseInt(remainBalanceTotal.innerText);
  const saveDiscountParse = parseFloat(saveDiscount.value);
  const totalIncomeParse = parseInt(totalIncome.value);
  const discountPrice = totalIncomeParse * (saveDiscountParse / 100);

  saveAmountTotal.innerText = parseFloat(discountPrice).toFixed(2);
  remainBalanceTotal.innerText = parseFloat(
    totalBalanceAmountParse - discountPrice
  ).toFixed(2);
});
