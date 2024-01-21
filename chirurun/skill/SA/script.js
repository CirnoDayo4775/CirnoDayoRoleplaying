window.onload = function () {
  setTimeout(function () {
    document.getElementById("fader").style.opacity = 0;
  }, 1000);
};

function changepage(pagedestination) {
  document.getElementById("fader").style.opacity = 1;
  setTimeout(function () {
    window.location.href = pagedestination;
  }, 500);
}

function makequote() {
  document.getElementById("quoter").style.opacity = "1";
  document.getElementById("quoter").style.transform = "translateY(0%)";
}

function unquote() {
    document.getElementById("quoter").style.opacity = "0";
    document.getElementById("quoter").style.transform = "translateY(-100%)";
  }