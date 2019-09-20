window.onload = function() {
  let TestText = document.getElementById("TestText");
  let clickspc = document.getElementById("clickspc");
  let loadbar = document.getElementById("loadbar");
  let button1 = document.getElementById("button1").addEventListener("click", button1clickevent);
  let clicks = document.getElementById("twoclicks").addEventListener("click", twoclicksclickevent);
  var score = document.getElementById("score");
  let maxloadbar = document.getElementById("maxloadbar");
  let tclicks = document.getElementById("tclicks");
  let clickstotal = 0;
  let gamescore = 0;
  var cpc = 1;
  var cheer = new Audio()
  var denied = new Audio()
  cheer.src = 'applause4.mp3'
  denied.src = 'denied.wav'

  function twoclicksclickevent() {
    if (gamescore >= 2) {
      console.log(gamescore + " >= 2")
      gamescore -= 2;
      if (cpc == 1) {
        cpc += 1;
      } else {
        cpc += 2;
      }
      score.innerHTML = "Score = " + gamescore;
      clickspc.innerHTML = "Clicks Per Click (cpc) = " + cpc;
    } else {
      console.log(gamescore + " <= 2")
      denied.play();
      return;
    }
  }

  function button1clickevent() {
    loadbar.value += cpc;
    clickstotal += cpc;
    tclicks.innerHTML = "Total Clicks = " + clickstotal;
    if (loadbar.value >= loadbar.max) {
      loadbar.value = 0;
      loadbar.max += 5;
      cheer.play(); 
      console.log("Reset. The new max is " + loadbar.max);
      gamescore += 1;
      score.innerHTML = "Score = " + gamescore;
      maxloadbar.innerHTML = "Goal = " + loadbar.max + " clicks";
    }
  }
  
};