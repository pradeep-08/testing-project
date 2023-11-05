
function upload() {
    const titleToFunction = {
        "Damage Not relavant - partial": damagesNotRelevantPartial,
        "Damage Not relavant - full": damagesNotRelevantFull,
        "Loss details not in policy period": LossDetailsNotInPolicyPeriod,
        "NCB Wrong Declaration": NcbWrongDeclaration,
        "Pre-exisiting previous claim - partial": PreExisitingPreviousClaimPartial,
        "Pre-exisiting previous claim - full": PreExisitingPreviousClaimFull,
        "Driver Clause": driverClase,
        "VIR fraud - misrepresention of vir" : VirfraudMisReresentionOfVir ,
        "VIR pre-existing Full" :VirPreExistingFull ,
        "VIR pre-existing - Partial" : VirPreExistingPartial
    };

    const currentTitle = document.title;
    const selectedFunction = titleToFunction[currentTitle];

    if (selectedFunction) {
        selectedFunction();
    }
}

/*function upload(){

    function dataMapping() {
    
        if (document.title === "Damage Not relavant - partial") {
            damagesNotRelevantPartial() ; // Call function1 for the first HTML file
        } else if (document.title === "Damage Not relavant - full") {
            damagesNotRelevantFull(); // Call function2 for the second HTML file
        }else if (document.title === "Loss details not in policy period") {
            LossDetailsNotInPolicyPeriod(); // Call function3 for the second HTML file
         }else if (document.title === "NCB Wrong Declaration") {
            NcbWrongDeclaration(); // Call function4 for the second HTML file
         }else if (document.title === "Pre-exisiting previous claim - partial") {
            PreExisitingPreviousClaimPartial(); // Call function5 for the second HTML file
         }
    };
    dataMapping(); 
}*/
    // Function for the second HTML file
 function damagesNotRelevantFull() {
    // Create an array to store the values of the input boxes
    const inputs = [];
    

    // Loop through each input box and get its value
    for (let i = 1; i <= 10; i++) {
        // Get the value of each input and remove any extra spaces
        const input = document.getElementById(`textInput${i}`);
        const inputValue = input.value.trim();

        if (inputValue !== "") {
            input.classList.remove("invalid-input");
            input.classList.add("valid-input");
        } else {
            input.classList.remove("valid-input");
            input.classList.add("invalid-input");
        }
        // Add the value to the 'inputs' array
        inputs.push(inputValue);
    }  // Check if all input boxes have values
    if (inputs.every(input => input !== "")) {
        // If they all have values, display "Okay" in green
        document.getElementById('toastMessage').style.backgroundColor =  "Green";
        showToast(`Document Updated`);
       
    } else {
        // If any input is empty, display "Not Okay" in red
        colorChanger();
        showToast("Enter Details");
        
    }

   const inputData = [
    'textInput1',  'textInput2', 'textInput3', 'textInput4',
    'textInput5', 'textInput6' ,'textInput7' ,'textInput8' ,
     , 'textInput9'  ,'textInput10'  
    // Repeated field
   ];

   inputData.forEach((inputId, index) => {
       const inputElement = document.getElementById(inputId);
       const dataMapElement = document.getElementById(`Data-map-${index}`);
       const value = inputElement.value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
       dataMapElement.innerHTML = value;
   });

   
   function colorChanger(){
       document.getElementById('toastMessage').style.backgroundColor =  "Red";
   }
  
}


    // Function for the first HTML file
     function damagesNotRelevantPartial() {
        // Create an array to store the values of the input boxes
        const inputs = [];
   
        // Loop through each input box and get its value
        for (let i = 1; i <= 11; i++) {
            // Get the value of each input and remove any extra spaces
            const input = document.getElementById(`textInput${i}`);
            const inputValue = input.value.trim();
    
            if (inputValue !== "") {
                input.classList.remove("invalid-input");
                input.classList.add("valid-input");
            } else {
                input.classList.remove("valid-input");
                input.classList.add("invalid-input");
            }
            // Add the value to the 'inputs' array
            inputs.push(inputValue);
        }  // Check if all input boxes have values
        if (inputs.every(input => input !== "")) {
            // If they all have values, display "Okay" in green
            document.getElementById('toastMessage').style.backgroundColor =  "Green";
            showToast(`Document Updated`);
          
        } else {
            // If any input is empty, display "Not Okay" in red
            colorChanger();
            showToast("Enter Details");
            
        }
       
       const inputData = [
           'textInput1',  'textInput2', 'textInput3', 'textInput4',
           'textInput5', 'textInput6' ,'textInput7' ,'textInput8' ,
           'textInput9' , 'textInput10' ,'textInput9' ,'textInput11'   // Repeated field
       ];
    
       inputData.forEach((inputId, index) => {
           const inputElement = document.getElementById(inputId);
   
           const dataMapElement = document.getElementById(`Data-map-${index}`);
           const value = inputElement.value;
           dataMapElement.innerHTML = value;
       });
   
       
       function colorChanger(){
           document.getElementById('toastMessage').style.backgroundColor =  "Red";
       }
   
   
    }

    // Function for the third HTML file
     function driverClase() {
        // Create an array to store the values of the input boxes
        const inputs = [];
   
        // Loop through each input box and get its value
        for (let i = 1; i <= 10; i++) {
            // Get the value of each input and remove any extra spaces
            const input = document.getElementById(`textInput${i}`);
            const inputValue = input.value.trim();
    
            if (inputValue !== "") {
                input.classList.remove("invalid-input");
                input.classList.add("valid-input");
            } else {
                input.classList.remove("valid-input");
                input.classList.add("invalid-input");
            }
            // Add the value to the 'inputs' array
            inputs.push(inputValue);
        }  // Check if all input boxes have values
        if (inputs.every(input => input !== "")) {
            // If they all have values, display "Okay" in green
            document.getElementById('toastMessage').style.backgroundColor =  "Green";
            showToast(`Document Updated`);
          
        } else {
            // If any input is empty, display "Not Okay" in red
            colorChanger();
            showToast("Enter Details");
            
        }
   
   
   
       
       const inputData = [
           'textInput1',  'textInput2', 'textInput3', 'textInput4',
           'textInput5', 'textInput6', 'textInput8', 'textInput7',
           'textInput9' , 'textInput10' // Repeated field
       ];
    
       inputData.forEach((inputId, index) => {
           const inputElement = document.getElementById(inputId);
   
           const dataMapElement = document.getElementById(`Data-map-${index}`);
           const value = inputElement.value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
           dataMapElement.innerHTML = value;
       });
   
       
       function colorChanger(){
           document.getElementById('toastMessage').style.backgroundColor =  "Red";
       }
   
   
    }

 // Function for the foruth HTML file
 function LossDetailsNotInPolicyPeriod() {
    // Create an array to store the values of the input boxes
    const inputs = [];

    // Loop through each input box and get its value
    for (let i = 1; i <= 6; i++) {
        // Get the value of each input and remove any extra spaces
        const input = document.getElementById(`textInput${i}`);
        const inputValue = input.value.trim();

        if (inputValue !== "") {
            input.classList.remove("invalid-input");
            input.classList.add("valid-input");
        } else {
            input.classList.remove("valid-input");
            input.classList.add("invalid-input");
        }
        // Add the value to the 'inputs' array
        inputs.push(inputValue);
    }  // Check if all input boxes have values
    if (inputs.every(input => input !== "")) {
        // If they all have values, display "Okay" in green
        document.getElementById('toastMessage').style.backgroundColor =  "Green";
        showToast(`Document Updated`);
      
    } else {
        // If any input is empty, display "Not Okay" in red
        colorChanger();
        showToast("Enter Details");
        
    }



   
   const inputData = [
       'textInput1',  'textInput2', 'textInput3', 'textInput4',
       'textInput5', 'textInput6' ,'textInput5'  // Repeated field
   ];

   inputData.forEach((inputId, index) => {
       const inputElement = document.getElementById(inputId);

       const dataMapElement = document.getElementById(`Data-map-${index}`);
       const value = inputElement.value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
       dataMapElement.innerHTML = value;
   });

   
   function colorChanger(){
       document.getElementById('toastMessage').style.backgroundColor =  "Red";
   }


}


// Function for the fifth HTML file
function NcbWrongDeclaration() {
    // Create an array to store the values of the input boxes
    const inputs = [];

    // Loop through each input box and get its value
    for (let i = 1; i <= 9; i++) {
        // Get the value of each input and remove any extra spaces
        const input = document.getElementById(`textInput${i}`);
        const inputValue = input.value.trim();

        if (inputValue !== "") {
            input.classList.remove("invalid-input");
            input.classList.add("valid-input");
        } else {
            input.classList.remove("valid-input");
            input.classList.add("invalid-input");
        }
        // Add the value to the 'inputs' array
        inputs.push(inputValue);
    }  // Check if all input boxes have values
    if (inputs.every(input => input !== "")) {
        // If they all have values, display "Okay" in green
        document.getElementById('toastMessage').style.backgroundColor =  "Green";
        showToast(`Document Updated`);
      
    } else {
        // If any input is empty, display "Not Okay" in red
        colorChanger();
        showToast("Enter Details");
        
    }



   
   const inputData = [
       'textInput1',  'textInput2', 'textInput3', 'textInput4',
       'textInput5', 'textInput6' ,'textInput7', 'textInput8',
       'textInput9', 
   
       // Repeated field
   ];

   inputData.forEach((inputId, index) => {
       const inputElement = document.getElementById(inputId);

       const dataMapElement = document.getElementById(`Data-map-${index}`);
       const value = inputElement.value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
       dataMapElement.innerHTML = value;
   });

   
   function colorChanger(){
       document.getElementById('toastMessage').style.backgroundColor =  "Red";
   }


}


function PreExisitingPreviousClaimPartial() {
    // Create an array to store the values of the input boxes
    const inputs = [];

    // Loop through each input box and get its value
    for (let i = 1; i <= 7; i++) {
        // Get the value of each input and remove any extra spaces
        const input = document.getElementById(`textInput${i}`);
        const inputValue = input.value.trim();

        if (inputValue !== "") {
            input.classList.remove("invalid-input");
            input.classList.add("valid-input");
        } else {
            input.classList.remove("valid-input");
            input.classList.add("invalid-input");
        }
        // Add the value to the 'inputs' array
        inputs.push(inputValue);
    }  // Check if all input boxes have values
    if (inputs.every(input => input !== "")) {
        // If they all have values, display "Okay" in green
        document.getElementById('toastMessage').style.backgroundColor =  "Green";
        showToast(`Document Updated`);
      
    } else {
        // If any input is empty, display "Not Okay" in red
        colorChanger();
        showToast("Enter Details");
        
    }



   
   const inputData = [
       'textInput1',  'textInput2', 'textInput3', 'textInput4',
       'textInput5', 'textInput6' ,'textInput6','textInput5',
       'textInput2','textInput7'
   
       // Repeated field
   ];

   inputData.forEach((inputId, index) => {
       const inputElement = document.getElementById(inputId);

       const dataMapElement = document.getElementById(`Data-map-${index}`);
       const value = inputElement.value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
       dataMapElement.innerHTML = value;
   });

   
   function colorChanger(){
       document.getElementById('toastMessage').style.backgroundColor =  "Red";
   }



   

 

}

function PreExisitingPreviousClaimFull() {
    // Create an array to store the values of the input boxes
    const inputs = [];

    // Loop through each input box and get its value
    for (let i = 1; i <= 6; i++) {
        // Get the value of each input and remove any extra spaces
        const input = document.getElementById(`textInput${i}`);
        const inputValue = input.value.trim();

        if (inputValue !== "") {
            input.classList.remove("invalid-input");
            input.classList.add("valid-input");
        } else {
            input.classList.remove("valid-input");
            input.classList.add("invalid-input");
        }
        // Add the value to the 'inputs' array
        inputs.push(inputValue);
    }  // Check if all input boxes have values
    if (inputs.every(input => input !== "")) {
        // If they all have values, display "Okay" in green
        document.getElementById('toastMessage').style.backgroundColor =  "Green";
        showToast(`Document Updated`);
      
    } else {
        // If any input is empty, display "Not Okay" in red
        colorChanger();
        showToast("Enter Details");
        
    }



   
   const inputData = [
       'textInput1',  'textInput2', 'textInput3', 'textInput4',
       'textInput5', 'textInput6' ,'textInput6','textInput5',
       'textInput2'
   
       // Repeated field
   ];

   inputData.forEach((inputId, index) => {
       const inputElement = document.getElementById(inputId);

       const dataMapElement = document.getElementById(`Data-map-${index}`);
       const value = inputElement.value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
       dataMapElement.innerHTML = value;
   });

   
   function colorChanger(){
       document.getElementById('toastMessage').style.backgroundColor =  "Red";
   }



}

function VirfraudMisReresentionOfVir() {
    // Create an array to store the values of the input boxes
    const inputs = [];

    // Loop through each input box and get its value
    for (let i = 1; i <= 5; i++) {
        // Get the value of each input and remove any extra spaces
        const input = document.getElementById(`textInput${i}`);
        const inputValue = input.value.trim();

        if (inputValue !== "") {
            input.classList.remove("invalid-input");
            input.classList.add("valid-input");
        } else {
            input.classList.remove("valid-input");
            input.classList.add("invalid-input");
        }
        // Add the value to the 'inputs' array
        inputs.push(inputValue);
    }  // Check if all input boxes have values
    if (inputs.every(input => input !== "")) {
        // If they all have values, display "Okay" in green
        document.getElementById('toastMessage').style.backgroundColor =  "Green";
        showToast(`Document Updated`);
      
    } else {
        // If any input is empty, display "Not Okay" in red
        colorChanger();
        showToast("Enter Details");
        
    }



   
   const inputData = [
       'textInput1',  'textInput2', 'textInput3', 'textInput4',
       'textInput5'
   
       // Repeated field
   ];

   inputData.forEach((inputId, index) => {
       const inputElement = document.getElementById(inputId);

       const dataMapElement = document.getElementById(`Data-map-${index}`);
       const value = inputElement.value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
       dataMapElement.innerHTML = value;
   });

   
   function colorChanger(){
       document.getElementById('toastMessage').style.backgroundColor =  "Red";
   }


}




function VirPreExistingFull() {
    // Create an array to store the values of the input boxes
    const inputs = [];

    // Loop through each input box and get its value
    for (let i = 1; i <= 5; i++) {
        // Get the value of each input and remove any extra spaces
        const input = document.getElementById(`textInput${i}`);
        const inputValue = input.value.trim();

        if (inputValue !== "") {
            input.classList.remove("invalid-input");
            input.classList.add("valid-input");
        } else {
            input.classList.remove("valid-input");
            input.classList.add("invalid-input");
        }
        // Add the value to the 'inputs' array
        inputs.push(inputValue);
    }  // Check if all input boxes have values
    if (inputs.every(input => input !== "")) {
        // If they all have values, display "Okay" in green
        document.getElementById('toastMessage').style.backgroundColor =  "Green";
        showToast(`Document Updated`);
      
    } else {
        // If any input is empty, display "Not Okay" in red
        colorChanger();
        showToast("Enter Details");
        
    }
}
    
    function VirPreExistingPartial() {
        // Create an array to store the values of the input boxes
        const inputs = [];
    
        // Loop through each input box and get its value
        for (let i = 1; i <= 6; i++) {
            // Get the value of each input and remove any extra spaces
            const input = document.getElementById(`textInput${i}`);
            const inputValue = input.value.trim();
    
            if (inputValue !== "") {
                input.classList.remove("invalid-input");
                input.classList.add("valid-input");
            } else {
                input.classList.remove("valid-input");
                input.classList.add("invalid-input");
            }
            // Add the value to the 'inputs' array
            inputs.push(inputValue);
        }  // Check if all input boxes have values
        if (inputs.every(input => input !== "")) {
            // If they all have values, display "Okay" in green
            document.getElementById('toastMessage').style.backgroundColor =  "Green";
            showToast(`Document Updated`);
          
        } else {
            // If any input is empty, display "Not Okay" in red
            colorChanger();
            showToast("Enter Details");
            
        }

   
   const inputData = [
       'textInput1',  'textInput2', 'textInput3', 'textInput4',
       'textInput5' ,'textInput6' , 'textInput5' , 'textInput6'
   
       // Repeated field
   ];

   inputData.forEach((inputId, index) => {
       const inputElement = document.getElementById(inputId);

       const dataMapElement = document.getElementById(`Data-map-${index}`);
       const value = inputElement.value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
       dataMapElement.innerHTML = value;
   });

   
   function colorChanger(){
       document.getElementById('toastMessage').style.backgroundColor =  "Red";
   }


}



 /* Default functions*/  

 const editableContent = document.getElementById("edit-pdf");
    const toggleButton = document.getElementById("toggleButton");
    
    function toggleContentEditable(){
    if (editableContent.contentEditable === "true") {
        editableContent.contentEditable = "false";
        toggleButton.textContent = "Edit";
        toggleButton.style.backgroundColor =  "White"
      
    } else {
        editableContent.contentEditable = "true";
        toggleButton.textContent = "Edit";
        toggleButton.style.backgroundColor =  "Green"
        editableContent.classList.remove('blurred');
    }
    }
    toggleButton.addEventListener("click",  toggleContentEditable);
    function showToast(message) {
    
    toastMessage.textContent = message;
    toastMessage.style.opacity = 1;
    
    setTimeout(() => {
        toastMessage.style.opacity = 0;
    }, 3000); // 3000 milliseconds (3 seconds) for the toast to disappear
    }
    


 function reload(){
    location.reload();
    upload();
    toggleContentEditable();
}
function getPrint(){
    const printContents = document.getElementById('edit-pdf').innerHTML;
    const originalContents = document.body.innerHTML;
    const printWindow = window.open('', '', 'width=800,height=800');
    printWindow.document.body.innerHTML = printContents;
    printWindow .print();

    document.body.innerHTML = originalContents;

}

function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = currentDate.getFullYear();

    return `${day}-${month}-${year}`;
}

const formattedDate = getCurrentDate();
document.querySelector('.currentDate').innerHTML = formattedDate;         
 // Output: "14-09-2023" (for September 14, 2023)


 const changeButton = document.querySelector('.edit-button');
 const blurredDiv = document.getElementById('edit-pdf');

 // Add a click event listener to the button
 changeButton.addEventListener('click', () => {
     // Remove the blur effect when the button is clicked
     blurredDiv.style.filter = 'none';

 });


        
 


function redirect(){
    const textLinks = document.getElementById('textInput2');
    const textInput = textLinks.value;
    const classLink = document.querySelector(".link-button");
    const claimDocs = `https://icms.royalsundaram.in/DocumentsViewer/viewdocuments.do?do=getDocuments&Application=RSA_retrieve_ECMS&DataClassName=EcmsClaims&DC.ClaimNo=${textInput}&DC.SubRepositoryFolder=CLAIM_DOCUMENTS&P=PsessionIndexSet=false`
    
    if (textInput !== "") {
        textLinks.classList.remove("invalid-input");
        textLinks.classList.add("valid-input");
        window.open(claimDocs, "_blank");
    } else {
        textLinks.classList.remove("valid-input");
        textLinks.classList.add("invalid-input");
        colorChanger();
        showToast("Claim Number");
    }

    function colorChanger(){
        document.getElementById('toastMessage').style.color =  "Black"
        document.getElementById('toastMessage').style.backgroundColor =  "Yellow";
    }

}
function redirectTwo(){
    const textLinks = document.getElementById('textInput2');
    const textInput = textLinks.value;
    const classLink = document.querySelector(".link-button");
    let surveyPhotoes = `https://icms.royalsundaram.in/DocumentsViewer/viewdocuments.do?do=getDocuments&Application=RSA_retrieve_ECMS&DataClassName=EcmsClaims&DC.ClaimNo=${textInput}&DC.SubRepositoryFolder=FINAL_SURVEY&P=PsessionIndexSet=false`
    if (textInput !== "") {
        textLinks.classList.remove("invalid-input");
        textLinks.classList.add("valid-input");
        window.open(surveyPhotoes, "_blank");
        
    } else {
        textLinks.classList.remove("valid-input");
        textLinks.classList.add("invalid-input");
        colorChanger();
        showToast("Claim Number");
    }

    function colorChanger(){
        function colorChanger(){
            document.getElementById('toastMessage').style.color =  "Black"
            document.getElementById('toastMessage').style.backgroundColor =  "Yellow";
        }
    }

}



        

