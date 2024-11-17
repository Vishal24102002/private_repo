function getSelectedcheckinDate() {
    // Get the date input element
    const indateInput = document.getElementById("date-input-check-in")
    const outdateInput = document.getElementById("date-input-check-out")

    // Get the selected date value
    const indate = new Date(indateInput.value);
    const outdate = new Date(outdateInput.value);

  // Array of month names
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  // Get the month name
  const inmonthName = monthNames[indate.getMonth()]; // getMonth() returns the month index (0-11)
  const outmonthName = monthNames[outdate.getMonth()];

  // Construct the formatted date string
  const formattedinDate = `${inmonthName} ${indate.getDate()},${indate.getFullYear()}`;
  const formattedoutDate = `${outmonthName} ${outdate.getDate()},${outdate.getFullYear()}`;

    // document.getElementById("Check-in-label").innerText= selectedDate
  
    // Display the selected date
    if (indate.getDate()>outdate.getDate()){
      alert("check out date can't be less than check in date")
    }
    else{
      document.getElementById("Check-in-label").innerText = formattedinDate;
      document.getElementById("Check-out-label").innerText = formattedoutDate;
      alert("review the registration details before moving forward as changes in dates are not entertained");
    }
    
  }