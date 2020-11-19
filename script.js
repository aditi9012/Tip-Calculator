let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percentage').value;
    let totalPeople=document.getElementById('num-people').value;
    if(billAmount){//writing testcases
        if(billAmount<0.0){
          alert('bill value cannot be negative!');
        }
    }
    else{
        alert('Bill value cannot be NULL!');
    }
    if(tipPercentage){
        if(tipPercentage<0.0){
            alert('tip percentage cannot be negative!');
        }
    }
    else{
        alert("Tip percentage cannot be NULL!");
        return false;
    }
    if(totalPeople){
        if(totalPeople<0){
            alert('total people value cannot be negative!');
        }
        if(parseFloat(totalPeople)-parseInt(totalPeople)>0.0){
            alert('total people cannot be in decimal value!');
        }
    }
    else{
        alert('enter total number of people!');
    }
 let tipAmount = document.getElementById('tip-amount').value = billAmount / tipPercentage;
 let tip=document.getElementById('tip-amount').value=parseFloat(billAmount)/parseFloat(tipPercentage*totalPeople);
let total=document.getElementById('total-bill').value = (parseFloat(billAmount) + parseFloat(tipAmount))/parseFloat(totalPeople);


 //append content
 tip.innerHTML = "$" + parseFloat(billAmount)/parseFloat(tipPercentage*totalPeople);
 total.innerHTML = "$" + (parseFloat(billAmount) + parseFloat(tipAmount))/parseFloat(totalPeople);

})