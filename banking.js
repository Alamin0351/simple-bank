document.getElementById('dipositBtn').addEventListener('click', function(){
    const dipositValue = document.getElementById('diposit');
    const dipositValueFinal = dipositValue.value;

    const currentdiposit = document.getElementById('Current-diposit');
    const currentDipositValue = currentdiposit.innerText;
    const TotalDiposit = parseFloat(dipositValueFinal) + parseFloat(currentDipositValue);
    currentdiposit.innerText = TotalDiposit;
    dipositValue.value = '';
    const currentbalance = document.getElementById('current-balance');
    const currentbalanceValue = currentbalance.innerText;
    const Totalbalance = parseFloat(dipositValueFinal) + parseFloat(currentbalanceValue);
    currentbalance.innerText = Totalbalance;
})

document.getElementById('withdrawBtn').addEventListener('click',function(){
    const withdrawvalue = document.getElementById('withdraw');
    const withdrawinputvalue = withdrawvalue.value;
    const currentWithdraw = document.getElementById('current-withdraw');
    const currentWithdrawamount = currentWithdraw.innerText;

    const totalWithdraw = parseFloat(withdrawinputvalue) + parseFloat(currentWithdrawamount);
    currentWithdraw.innerText = totalWithdraw;
    withdrawvalue.value = '';
    const current_balance = document.getElementById('current-balance');
    const current_balance_total = current_balance.innerText;
    const Totalbalanceafterwithdraw = parseFloat(current_balance_total) - parseFloat(withdrawinputvalue);
    current_balance.innerText = Totalbalanceafterwithdraw;
})