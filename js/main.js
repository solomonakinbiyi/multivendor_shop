var toggleBtn = document.getElementById("btn-nav");
var sideCat = document.getElementById("side-cat");
var sideOver = document.getElementById("side-overlay");
var cancelBtn = document.getElementById("cancel-btn");
var body = document.getElementById("body");
var searchBtn = document.getElementById("search-btn");
var moreDisplay = document.getElementById("more-category-display");
var moreCtrl = document.getElementById("more-category-ctrl");


toggleBtn.addEventListener('click', function(){
    sideCat.style.transform = "translate(0)";
    sideOver.style.visibility = "visible";
    sideOver.style.opacity = "1";
    body.style.overflow = "hidden";
})

cancelBtn.addEventListener('click', function(){
    sideCat.style.transform = "";
    sideOver.style.visibility = "";
    sideOver.style.opacity = "";
    body.style.overflow = "";
})

sideOver.addEventListener('click', function(){
    sideCat.style.transform = "";
    sideOver.style.visibility = "";
    sideOver.style.opacity = "";
    body.style.overflow = "";
})

searchBtn.addEventListener('click', function(){
    searchBtn.style.boxShadow = "0 0 0";
    searchBtn.style.transform = "scale(.9)";

})

searchBtn.addEventListener('mouseout', function(){
    searchBtn.style.boxShadow = "";
    searchBtn.style.transform = "";
})

var showState = false;

moreCtrl.addEventListener('click', function(){
    if (showState == false)
    {
        moreDisplay.style.display = "flex";
        showState = true;
    }else {
        moreDisplay.style.display = "";
        showState = false;
    }
    // moreDisplay.style.display = "inline"
})