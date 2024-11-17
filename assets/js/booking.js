function getSelectedcheckinDate() {
    // Get the date input element
    const dateInput = document.getElementsByClassName("date-input-check-in")
    // Get the selected date value
    const selectedDate = dateInput.value;
  
    // Display the selected date
    alert("Selected Date: " + selectedDate);
  }