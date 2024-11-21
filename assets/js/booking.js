const moreDetailsBtn = document.getElementById("moreDetails1");
const popup = document.getElementById("popup_basic");
const closePopupBtn = document.getElementById("closePopup");
    
const moreDetailsBtn2 = document.getElementById("moreDetails2");
const popup2 = document.getElementById("popup_infinity");
const closePopupBtn2 = document.getElementById("closePopup2");
document.getElementById("select_infi").addEventListener("click",(e) =>{
  e.preventDefault();
  document.getElementById("room_price").innerText= 7600
});

document.getElementById("select_basic").addEventListener("click",(e) =>{
  e.preventDefault();
  document.getElementById("room_price").innerText= 3600
});
// Show popup
moreDetailsBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    popup.style.display = "flex";
});
moreDetailsBtn2.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    popup2.style.display = "flex";
});
// Close popup
closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
closePopupBtn2.addEventListener("click", () => {
    popup2.style.display = "none";
});

// Close popup when clicking outside the content
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
popup2.addEventListener("click", (e) => {
    if (e.target === popup2) {
        popup2.style.display = "none";
    }
 });

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
      const selectElement = document.getElementById("guestSelect");

      // Get the selected value
      const selectedValue = selectElement.value;

      // Display the selected value (you can modify this to use it as needed)
      document.getElementById("room_rev").innerText = `${selectedValue} ${outdate.getDate()-indate.getDate()} night`;
      document.getElementById("Check-in-label").innerText = formattedinDate;
      document.getElementById("Check-out-label").innerText = formattedoutDate;
      document.getElementById("room_price").innerText= `${document.getElementById("room_price").innerText*(outdate.getDate()-indate.getDate())}`;
      alert("review the registration details before moving forward as changes in dates are not entertained");
    }
    
  }