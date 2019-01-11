var suona = document.createElement('audio');

function mySel() {
  suona.src = 'campo.mp3';
  var par = document.getElementsByClassName("partenza");
  var arr = document.getElementsByClassName("arrivo");
  if (par.length > 0 && arr.length > 0) {
    arr[0].innerHTML = par[0].innerHTML;
    par[0].innerHTML = "";
    par[0].className = "standard";
    arr[0].className = "standard";
    suona.play();
  }
}

function mySwitch(div) {
  suona.src = 'campo.mp3';
  var className = div.getAttribute("class");
  if (className=="standard") {
    div.className = "partenza";
    }
  else if (className=="partenza") {
    div.className = "arrivo";
    }
  else if (className=="arrivo") {
    div.className = "standard";
    }
  suona.play();
}
