const userInputEl=document.getElementById("userInput");
const sendRequestBtn=document.getElementById("sendDeleteRequestBtn");
const requestStatusEl=document.getElementById("requestStatus");
const httpResponse=document.getElementById("httpResponse");

function deleteUser(){
    const userId=userInputEl.value;
    let url="https://gorest.co.in/public-api/users/"+userId;
    let options={
        method: "DELETE",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization: "Bearer 6ac22c5a43495b967ffe90694dfb508f07c83c0be7fafec58806bd3d08762d5f"
        }
    };
    
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
        requestStatusEl.textContent=jsonData.code;
        httpResponse.textContent=JSON.stringify(jsonData);
    });
}


sendRequestBtn.addEventListener("click",deleteUser);