let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function updateResource() {
    let userId = userInputEl.value;
    let requestBody = requestBodyEl.value;
    let url = "https://gorest.co.in/public-api/users/" + userId;

    try {
        requestBody = JSON.parse(requestBodyEl.value); // Parse input as JSON
    } catch (error) {
        alert("Invalid JSON in the request body.");
        return;
    }

    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 6ac22c5a43495b967ffe90694dfb508f07c83c0be7fafec58806bd3d08762d5f"
        },
        body: JSON.stringify(requestBody),
    };

    fetch(url, options)
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            // Update UI elements with API response
            requestStatusEl.textContent = jsonData.code;
            httpResponseEl.textContent = JSON.stringify(jsonData, null, 2);
        })
        .catch(function(error) {
            console.error("Error:", error.message);
            requestStatusEl.textContent = "Request Failed";
            httpResponseEl.textContent = error.message;
        });
}

sendPutRequestBtnEl.addEventListener("click", updateResource);
