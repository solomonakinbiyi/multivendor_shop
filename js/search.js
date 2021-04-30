var input =  document.getElementById("input");
var canBtn =  document.getElementById("clear-btn");
var backBtn =  document.getElementById("back-btn");

input.addEventListener('keyup', function(){
    if (input.value === "")
    {
        canBtn.style.display = "";
    }else
    {
        canBtn.style.display = "inline";
    }
})
canBtn.addEventListener('click', function(){
    input.value = "";
    canBtn.style.display = "";
})

backBtn.addEventListener('click', function(){
    window.history.go(-1);
})