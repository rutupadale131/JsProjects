const formElement=document.getElementById("questionForm");
const hyderabad=document.getElementById("cityHyderabad");
const chennai=document.getElementById("cityChennai");
const delhi=document.getElementById("cityDelhi");
const mumbai=document.getElementById("cityMumbai");
const result=document.getElementById("resultMsg");
const answer="delhi";
let selectedCity=null;

hyderabad.addEventListener('change',function(event){
    selectedCity=event.target.value;
});

chennai.addEventListener('change',function(event){
    selectedCity=event.target.value;
});

delhi.addEventListener('change',function(event){
    selectedCity=event.target.value;
});

mumbai.addEventListener('change',function(event){
    selectedCity=event.target.value;
});

function submitForm(event){
    event.preventDefault();
    if(selectedCity===answer){
        result.textContent="Correct answer";
        result.classList.remove("wrong-ans");
        result.classList.add("correct-ans");
    }else if(selectedCity===null){
        result.textContent="Please select the answer";
        result.classList.remove("correct-ans");
        result.classList.add("wrong-ans");
    }else{
        result.textContent="Wrong answer";
        result.classList.remove("correct-ans");
        result.classList.add("wrong-ans");
    }
}