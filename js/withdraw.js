document.getElementById('withdraw-btn').addEventListener('click', function(){
    const getValue = getInputFieldValue('withdraw-amount');
    const getElement = getElementValue('withdraw-balance');
    const getMainBalance = getElementValue('total-balance');
    if(getMainBalance<getValue){
        alert('You do not have enough balance!!');
        return ;
    }
    const newValue = getValue + getElement;
    const newTotalBalance = getMainBalance - getValue;
    setElementValue('withdraw-balance', newValue);
    setElementValue('total-balance', newTotalBalance);
    
    
})