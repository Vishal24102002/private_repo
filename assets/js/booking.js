function getSelectedcheckinDate() {
    // Get the date input element
    const dateInput = document.getElementById("date-input-check-in")

    // Get the selected date value
    const selectedDate = dateInput.value;
    const date = new Date(selectedDate);

  // Array of month names
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  // Get the month name
  const monthName = monthNames[date.getMonth()]; // getMonth() returns the month index (0-11)

  // Construct the formatted date string
  const formattedDate = `${monthName} ${date.getDate()},${date.getFullYear()}`;

  // Display the formatted date in the label
  document.getElementById("Check-in-label").innerText = formattedDate;

    // document.getElementById("Check-in-label").innerText= selectedDate
  
    // Display the selected date
    alert("Selected Date: " + formattedDate);
  }