const textArea =  document.querySelector('.text-area');
  const vehicleNumber = document.querySelector('.vehicle-element');
  const policyNumber = document.querySelector('.policy-elements');
  const dateOfLoss = document.querySelector('.date-loss-element');
  const reason = document.querySelector('.reason-element');
  const serviceName = document.querySelector('.service-name-element');
  const observedDamage = document.querySelector('.observed-damage-element');
function upload(){
 
  
}
const showToastButton = document.getElementById("showToast");
const toastMessage = document.getElementById("toastMessage");
const textInput = document.getElementById("textInput");

showToastButton.addEventListener("click", () => {
 
   
   if (vehicleNumber.value.trim() === "") {
        colorChanger();
        showToast("Enter Details");
        vehicleNumber.style.borderColor = "DarkRed";
    }else{
        vehicleNumber.style.borderColor =  "rgb(222,227,238)";
    };
     if (textArea.value.trim() === "") {
        colorChanger();
        showToast("Enter Details");
        textArea.style.borderColor = "DarkRed";
    }else{
        textArea.style.borderColor =  "rgb(222,227,238)";

};
    if (policyNumber.value.trim() === "") {
        colorChanger();
        showToast("Enter Details");
        policyNumber.style.borderColor = "DarkRed";
    }else{
        policyNumber.style.borderColor =  "rgb(222,227,238)";
    };
    if (dateOfLoss.value.trim() === "") {
        colorChanger();
        showToast("Enter Details");
        dateOfLoss.style.borderColor = "DarkRed";
    }
    
    



    
    else {
        document.getElementById('toastMessage').style.backgroundColor =  "Green";
        showToast(`Document Updated`);
        inputDeactivate();
        
    }
}); 
  



function inputError(){
        textInput.style.borderColor = "DarkRed";   
}


    function colorChanger(){
        document.getElementById('toastMessage').style.backgroundColor =  "Red";
    }


    function inputDeactivate(){
        textArea.style.borderColor =  "rgb(222,227,238)";
    }




function showToast(message) {
    toastMessage.textContent = message;
    toastMessage.style.opacity = 1;

    setTimeout(() => {
        toastMessage.style.opacity = 0;
    }, 3000); // 3000 milliseconds (3 seconds) for the toast to disappear
}
