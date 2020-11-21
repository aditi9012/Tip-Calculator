function tipPerPerson(billAmount,tipPercentage,totalPeople){
    if(billAmount>=0 && tipPercentage>=0.0 && totalPeople>0){
    let tip=parseFloat(billAmount)/parseFloat(tipPercentage*totalPeople);
    return tip;
    }
    else{
        return Error;
    }
}
module.exports=tipPerPerson;