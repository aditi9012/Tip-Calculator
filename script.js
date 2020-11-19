let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    console.log('yes');
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percentage').value;
    let peopleAmount=document.getElementById('tip-amount').value;
    
    let tipAmount = document.getElementById('tip-amount').value = billAmount / tipPercentage;
   if(billAmount){
       return true;
   }
   else{
       alert('enter bill amount');
   }
   document.getElementById('total-tip').value=parseFloat(tipAmount)/peopleAmount;
    
    document.getElementById('total-bill').value = (parseFloat(billAmount) + parseFloat(tipAmount))/peopleAmount;

})