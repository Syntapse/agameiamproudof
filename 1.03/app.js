window.onload = function () {
  const gameName = document.getElementById('gameName')
  const bg = document.getElementById('bg')
  const TestText = document.getElementById("TestText");
  const clickspc = document.getElementById("clickspc");
  const loadbar = document.getElementById("loadbar");
  const button1 = document.getElementById("button1").addEventListener("click", button1clickevent);
  const clicks = document.getElementById("twoclicks").addEventListener("click", twoclicksclickevent);
  const score = document.getElementById("score");
  const maxloadbar = document.getElementById("maxloadbar");
  const tclicks = document.getElementById("tclicks");
  let clickstotal = 0;
  let gamescore = 0;
  var cpc = 1;
  var cheer = new Audio()
  var denied = new Audio()
  var gcheer = new Audio()
  cheer.src = 'applause4.mp3'
  denied.src = 'denied.wav'
  gcheer.src = 'goalcheer.mp3'

  gameName.onmouseover = function(){alert('hi')};

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
      if (gamescore == 100) {
        bg.style = 'background: #FFC107;'
        gcheer.play();
      }
      if (gamescore == 200) {
        bg.style = 'background: #FF5722;'
        gcheer.play();
      }
      if (gamescore == 500) 
      {
        gcheer.play();
      }
    }
  }


};