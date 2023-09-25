function upload(){

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
    }

    dataMapping();
        // Check if all input boxes have values
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
  
    };


    function dataMapping(){
const textArea =  document.getElementById('textInput1').value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
const vehicleNumber = document.getElementById('textInput2').value;
const policyNumber = document.getElementById('textInput3').value;
const dateOfLoss = document.getElementById('textInput4').value;
const reason = document.getElementById('textInput5').value;
const serviceName = document.getElementById('textInput6').value;
const observedDamage = document.getElementById('textInput8').value;
const inspectedDate = document.getElementById('textInput7').value;
const causeOfLoss = document.getElementById('textInput9').value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");

console.log(reason);
document.getElementById('Data-map-0').innerHTML = textArea;
document.getElementById('Data-map-1').innerHTML = policyNumber;
document.getElementById('Data-map-2').innerHTML = vehicleNumber;
document.getElementById('Data-map-3').innerHTML = dateOfLoss;
document.getElementById('Data-map-4').innerHTML = reason;
document.getElementById('Data-map-5').innerHTML = serviceName;
document.getElementById('Data-map-6').innerHTML = observedDamage;
document.getElementById('Data-map-7').innerHTML = inspectedDate;
document.getElementById('Data-map-8').innerHTML = causeOfLoss;
document.getElementById('Data-map-9').innerHTML = observedDamage;

}

function inputDeactivate(){
    textArea.style.borderColor =  "rgb(222,227,238)";
}

function colorChanger(){
    document.getElementById('toastMessage').style.backgroundColor =  "Red";
}
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




function getPrint(){
    const printContents = document.getElementById('edit-pdf').innerHTML;
    const originalContents = document.body.innerHTML;
    const printWindow = window.open('', '', 'width=800,height=800');
    printWindow.document.body.innerHTML = printContents;
    printWindow .print();

    document.body.innerHTML = originalContents;

}
function reload(){
    location.reload();
    upload();
    toggleContentEditable();
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
console.log(formattedDate); // Output: "14-09-2023" (for September 14, 2023)
         