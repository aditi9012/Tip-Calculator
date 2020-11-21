let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percentage').value;
    let totalPeople=document.getElementById('num-people').value;


    if(valid_billAmount(billAmount)){
      if(valid_tipPercentage(tipPercentage)){
        if(valid_totalPeople(totalPeople)){
       
            }
        }
    }

let tipAmount =  billAmount / tipPercentage;
 let tip=tipPerPerson(billAmount,tipPercentage,totalPeople);
 let bill=billPerPerson(billAmount,totalPeople,tipAmount);
 document.getElementById('tip-amount').value =tip;
 document.getElementById('total-bill').value =bill;

})

function valid_billAmount(billAmount){
    //console.log('1');
    if(billAmount){
        if(billAmount<0.0){
          alert('bill value cannot be negative!');//Bill value must always be positive
        }
        else{
            return true;
            }
    }
    else{
        alert('Invalid Input!');//Bill cannot be NULL
    }
}
function valid_tipPercentage(tipPercentage){
    //console.log('2');
    if(tipPercentage){
        if(tipPercentage<0.0){
            alert('tip percentage cannot be negative!');//Tip value cannot be negative
        }
        else{
            return true;
            }
        
    }
    else{
        alert("Invalid Input!");//Tip percent cannot be NULL
        return false;
    }
}
function valid_totalPeople(totalPeople){
    //console.log('3')
    if(totalPeople){
        if(totalPeople<0){
            alert('total people value cannot be negative!');//No. of people cannot be negative
        }
        if(parseFloat(totalPeople)-parseInt(totalPeople)>0.0){
            alert('total people cannot be in decimal value!');//No. of people cannot be in decimal value
        }
        else{
        return true;
        }
    }
    else{
        alert('Invalid Input!');//This field cannot be NULL
    }
}
function tipPerPerson(billAmount,tipPercentage,totalPeople){
    let tip=parseFloat(billAmount)/parseFloat(tipPercentage*totalPeople);
    return tip;
}
function billPerPerson(billAmount,totalPeople,tipAmount){
    let total=(parseFloat(billAmount) + parseFloat(tipAmount))/parseFloat(totalPeople);
    return total;
}
