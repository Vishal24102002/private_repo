document.getElementById("sendButton").onclick = function () {
    data = {
        'name': document.getElementById("guest_name").value,
        'mobile_number': document.getElementById("guest_phone").value,
        'email': document.getElementById("guest_email").value,
        'check_in': document.getElementById("date-input-check-in").value,
        'check_out': document.getElementById("date-input-check-out").value,
        'number_of_adults': document.getElementById("guestselect").value.split(",")[0],
        'room_number': document.getElementById("guestselect").value.split(",")[1],
        'transaction_number': "1234",
        'status':"Booked"
    }

    fetch("https://Piyush2510.pythonanywhere.com/book", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Ensure JSON data
        },
        body: JSON.stringify(data) // Convert JS object to JSON
    })
    .then(response => response.text())
    .then(result => {
        console.log("Server Response:", result);
        alert("booked Successfully! thanks for booking");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed book right now.Try again in some time");
    });
};