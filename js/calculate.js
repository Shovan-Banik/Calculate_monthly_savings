// get float number from input id function
function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldString = inputField.value;
    const inputFieldMoney = parseFloat(inputFieldString);
    // inputField.value='';
    return inputFieldMoney;
}
// set value function
function setElementValue(id, totalMoney) {
    document.getElementById(id).innerText = totalMoney.toFixed(2);
}
function validation(error) {
    for (let e of error) {
        if (isNaN(e) || e < 0) {
            return false;
        }
    }
    return true;
}
document.getElementById('calculate').addEventListener('click', function () {
    const income = getInputValue('income');
    const foodCost = getInputValue('food');
    const rentCost = getInputValue('rent');
    const clothCost = getInputValue('cloth');
    const validInput = validation([income, foodCost, rentCost, clothCost]);
    if (validInput === false) {
        alert('Please input numeric positive balance');
    }
    else {
        const totalExpense = foodCost + rentCost + clothCost;
        if (totalExpense > income) {
            alert('You do not have enough money');
        }
        else {
            setElementValue('total-expense', totalExpense);
            const balance = income - totalExpense;
            setElementValue('remaining-balance', balance);
        }
    }
})
document.getElementById('save').addEventListener('click', function () {
    const income = getInputValue('income');
    const saveMoney = getInputValue("save-percent");
    const previousRemaining = document.getElementById('remaining-balance').innerText;
    const validInput = validation([income, saveMoney, previousRemaining]);
    if (validInput === false) {
        alert('Please input numeric positive balance');
    }
    else {
        const saveMoneyPercent = (income * saveMoney) / 100;
        if ((previousRemaining - saveMoneyPercent) < 0) {
            alert('You do not have enough balance');
        }
        else {
            setElementValue('saving-amount', saveMoneyPercent);
            const newRemaining = previousRemaining - saveMoneyPercent;
            setElementValue('Lastly-remaining', newRemaining);
        }
    }
})