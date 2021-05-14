let rateRange = document.getElementById("customRange2");
let rateDisplay = document.getElementById("rating-num");

rateRange.addEventListener('click', function (){
    rateDisplay.textContent = rateRange.value;
})