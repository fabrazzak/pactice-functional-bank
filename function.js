// inputFeild convert parseFloat by the funtion 

function getInputNumber(inputId){
    const inputFeild= document.getElementById(inputId);
    const inputValue= inputFeild.value ;
    const inputNumber= parseFloat(inputValue);
    return inputNumber;
}
// add deposite money function 
function getTagNumber(innerTag){
    const innerNumber= document.getElementById(innerTag);
    const innerTextValue= innerNumber.innerText;
    const innerTextNumber= parseFloat(innerTextValue);
    return innerTextNumber;
}

function erroMagess(inputId){
    const inputField= document.getElementById(inputId);
    inputField.value='';
    inputField.placeholder='Please sir type a positive number';
    inputField.style.border="2px solid red";
    
    
}
function erroMagessBlow(inputId){
    const inputField= document.getElementById(inputId);
    inputField.value='';
    inputField.placeholder='Please sir your Total Balance is low';
    inputField.style.border="2px solid red";
       
}
function erroSolveMagess(inputId){
    const inputField= document.getElementById(inputId);
    inputField.value='';
    inputField.placeholder='Deposite Amount';
    inputField.style.border="none";
    
    
}


// handle function for deposite button

document.getElementById('deposite-button').addEventListener('click',function(){
   const preDepositeBalance = getInputNumber('deposite-input');
   if(isNaN(preDepositeBalance)){

     const erro =erroMagess('deposite-input')
     return erro
  
     console.log('amr sonar bangloa mai');
   }
   else if(preDepositeBalance<=0 ){
    const erro =erroMagess('deposite-input')
    return erro
   }

   const enterDepositeBalance= getTagNumber('deposite-total');

   const preTotalBalance= getTagNumber('balance-total');
   const preTotalWithdrawBalance= getTagNumber('withdraw-total');

            // total Depostie Blance 
   const totalDepositeBalance = preDepositeBalance + enterDepositeBalance ;
   document.getElementById('deposite-total').innerText=totalDepositeBalance;

   const totalBalance = (totalDepositeBalance - preTotalWithdrawBalance) 
   document.getElementById('balance-total').innerText= totalBalance;
   document.getElementById('deposite-input').value=''; 

   erroSolveMagess('deposite-input');
})

//  handle function for withdraw button 

document.getElementById('withdraw-button').addEventListener('click',function(){
    const preWithdrawBalance= getInputNumber('withdraw-input');
    if(isNaN(preWithdrawBalance)){
        const erro =erroMagess('withdraw-input')
        return erro 
      }
      else if(preWithdrawBalance<=0 ){
       const erro =erroMagess('withdraw-input')
       return erro
      }
    getTagNumber('withdraw-total');
    getTagNumber('deposite-total');
            // Total withdraw Balance 
            
   
      

    const totalWithdrawBalance=  getInputNumber('withdraw-input') + getTagNumber('withdraw-total') ;
    if(getTagNumber('deposite-total')< totalWithdrawBalance){
        const erro =erroMagessBlow('withdraw-input')
        return erro 
      }
    document.getElementById('withdraw-total').innerText= totalWithdrawBalance;


    const totalBalance= getTagNumber('deposite-total')- totalWithdrawBalance ;
    document.getElementById('balance-total').innerText=totalBalance;
    document.getElementById('withdraw-input').value='';  
    erroSolveMagess('withdraw-input');  
})


