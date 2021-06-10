document.addEventListener("DOMContentLoaded", function(){

  window.addEventListener('load', function() {
    const startupModal = document.getElementById('modal-one');
    startupModal.classList.add('open');

    const startupExits = startupModal.querySelectorAll('.modal-exit');
    startupExits.forEach(function(exit) {
      exit.addEventListener('click', function(event) {
        event.preventDefault();
        startupModal.classList.remove('open');
      });
    });
  });

  let toggleMute = Array.from(document.querySelectorAll('audio')).forEach(element => element.muted = false);
  const audioStop = document.getElementById("pause");
  const audioPlay = document.getElementById("play");

  audioStop.addEventListener('click', function(event) {
    event.preventDefault();
    toggleMute = Array.from(document.querySelectorAll('audio')).forEach(element => element.muted = true);
  });

  audioPlay.addEventListener('click', function(event) {
    event.preventDefault();
    toggleMute = Array.from(document.querySelectorAll('audio')).forEach(element => element.muted = false);
  });

  let sound1 = document.querySelector('#balloonAudio');
  let sound2 = document.querySelector('#bubbleAudio');
  let sound3 = document.querySelector('#cymbalAudio');
  let sound4 = document.querySelector('#descendAudio');
  let sound5 = document.querySelector('#drawAudio');
  let sound6 = document.querySelector('#drumAudio');
  let sound7 = document.querySelector('#eraseAudio');
  let sound8 = document.querySelector('#glitchAudio');
  let sound9 = document.querySelector('#popAudio');
  let sound10 = document.querySelector('#printingAudio');
  let sound11 = document.querySelector('#rollerbladeAudio');
  let sound12 = document.querySelector('#sandAudio');
  let sound13 = document.querySelector('#splashAudio');
  let sound14 = document.querySelector('#squelchAudio');
  let sound15 = document.querySelector('#swordAudio');
  let sound16 = document.querySelector('#typingAudio');
  let sound17 = document.querySelector('#whooshAudio');
  let sound18 = document.querySelector('#zoomAudio');

  let soundsArray1 = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18];
  
  const soundBtns = document.querySelectorAll('.soundEffect');
  
  soundBtns.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      let randomNum = Math.floor(Math.random() * soundsArray1.length);
      event.preventDefault();
      soundsArray1[randomNum].play();
    });

    trigger.addEventListener('mouseenter', function(event) {
      let randomNum2 = Math.floor(Math.random() * soundsArray1.length);
      event.preventDefault();
      soundsArray1[randomNum2].play();
    });
  });

  const modals = document.querySelectorAll('[data-modal]');

  modals.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      event.preventDefault();

      const modal = document.getElementById(trigger.dataset.modal);
      modal.classList.add('open');

      const exits = modal.querySelectorAll('.modal-exit');
      exits.forEach(function(exit) {
        exit.addEventListener('click', function(event) {
          event.preventDefault();
          modal.classList.remove('open');
        });
      });
    });
  });
});

function showNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}