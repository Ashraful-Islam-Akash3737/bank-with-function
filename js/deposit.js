document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit me');
    const newDepositAmount = getInputFieldValueById('deposit-field');
    // console.log(newDepositAmount);

    const previousDepositTotal = getTextElementValueById('deposit-total');


    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueById('deposit-total', newDepositTotal);

    // console.log(newDepositTotal);


    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueById('balance-total', newBalanceTotal);
})

