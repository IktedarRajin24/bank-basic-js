document.getElementById('deposit-btn').addEventListener('click', function(){
    const getValue = getInputFieldValue('deposit-amount');
    const getElement = getElementValue('deposit-balance');
    const getMainBalance = getElementValue('total-balance');
    const newValue = getValue + getElement;
    const newTotalBalance = getValue + getMainBalance;
    setElementValue('deposit-balance', newValue);
    setElementValue('total-balance', newTotalBalance);
    
    
})
