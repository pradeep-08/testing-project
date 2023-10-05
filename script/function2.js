// Function for the second HTML file
export function damagesNotRelevantFull() {
    // Create an array to store the values of the input boxes
    const inputs = [];
    

    // Loop through each input box and get its value
    for (let i = 1; i <= 8; i++) {
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
        inputDeactivate();
    } else {
        // If any input is empty, display "Not Okay" in red
        colorChanger();
        showToast("Enter Details");
        
    }

   const inputData = [
       'textInput1', 'textInput2', 'textInput3', 'textInput4',
       'textInput5', 'textInput6', 'textInput7', 'textInput8' 
    // Repeated field
   ];

   inputData.forEach((inputId, index) => {
       const inputElement = document.getElementById(inputId);
       const dataMapElement = document.getElementById(`Data-map-${index}`);
       const value = inputElement.value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
       dataMapElement.innerHTML = value;
   });

   function inputDeactivate(){
       textArea.style.borderColor =  "rgb(222,227,238)";
   }
   
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