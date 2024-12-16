document.getElementById("sendButton").onclick = function () {
    form_data = {
        'name': "vishal",
        'mobile_number': 8882083822,
        'email': "vishalsharma659612@gmail.com",
        'check_in': 12-12-2024,
        'check_out': 24-12-2024,
        'number_of_adults': 2,
        'room_number': 101,
        'transaction_number': 1234,
        'status':"booked"
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
        alert("booked Successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed book right now.Try again in some time");
    });
};