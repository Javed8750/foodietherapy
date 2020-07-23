// FOR PRELOADER //

window.onload = function () {  // make sure that whole site is loaded
    var p = document.getElementById("preloader");
    var s = document.getElementById("status");
    var fade = setInterval(fadeOut, 1000);
    function fadeOut(){
        p.style.opacity = 0;
        s.style.opacity = 0;
        p.style.display = "none";
        s.style.display = "none";
    }
};




// FOR ANIMATION ON FOOD TAB //

function opentab(event, tabname) {
    var i, tabcontent, tabbtn;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabbtn = document.getElementsByClassName("tabbtn");
    for (i = 0; i < tabbtn.length; i++) {
        tabbtn[i].className = tabbtn[i].className.replace(" active", "");
    }

    document.getElementById(tabname).style.display = "block";
    eventt.currentTarget.className += " active";
}
document.getElementById("default").click();



// FOR ANIMATION ON NAVBAR //
window.onscroll = function(){
    scrollfunction()
};
function scrollfunction(){
    var x = document.getElementById("header");
    var y = x.getElementsByClassName("menubtn");
    var i;
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        x.style.backgroundColor = "#FFD65C";
        x.style.boxShadow = "0 1px 10px #333333";
        document.getElementById("black").style.display = "block";
        document.getElementById("white").style.display = "none";
        for(i = 0; i < y.length; i++){
            y[i].style.color = "#333333";
        }
    }
    else{
        x.style.backgroundColor = "rgba(51, 51, 51, 0.4)";
        x.style.boxShadow = "0 1px 10px #EBEBEB";
        document.getElementById("black").style.display = "none";
        document.getElementById("white").style.display = "block";
        for(i = 0; 1 < y.length; i++){
            y[i].style.color = "#EBEBEB";
        }
    }
}



// FOR RESPONSIVE NAVBAR //
function navBar() {
  var x = document.getElementById("menu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
























