document.addEventListener("DOMContentLoaded", function(){

  // bubbleSquelch
  const bubbleBtn = document.querySelector('.bubbleSquelch');
  let bubbles = document.querySelector('#bubbleAudio');
  bubbleBtn.addEventListener('click', () => {
    bubbles.play();
  });

  const squelchBtn = document.querySelector('.bubbleSquelch');
  let squelch = document.querySelector('#squelchAudio');
  squelchBtn.addEventListener('mouseenter', () => {
    squelch.play();
  });

  // whooshDescend
  const descendBtn = document.querySelector('.whooshDescend');
  let descend = document.querySelector('#descendAudio');
  descendBtn.addEventListener('click', () => {
    descend.play();
  });

  const whooshBtn = document.querySelector('.whooshDescend');
  let whoosh = document.querySelector('#whooshAudio');
  whooshBtn.addEventListener('mouseenter', () => {
    whoosh.play();
  });

  // balloonPop
  const popBtn = document.querySelector('.balloonPop');
  let pop = document.querySelector('#popAudio');
  popBtn.addEventListener('click', () => {
    pop.play();
  });

  const balloonBtn = document.querySelector('.balloonPop');
  let balloon = document.querySelector('#balloonAudio');
  balloonBtn.addEventListener('mouseenter', () => {
    balloon.play();
  });

  // sandSplash
  const splashBtn = document.querySelector('.sandSplash');
  let splash = document.querySelector('#splashAudio');
  splashBtn.addEventListener('click', () => {
    splash.play();
  });

  const sandBtn = document.querySelector('.sandSplash');
  let sand = document.querySelector('#sandAudio');
  sandBtn.addEventListener('mouseenter', () => {
    sand.play();
  });

  // drawErase
  const eraseBtn = document.querySelector('.drawErase');
  let erase = document.querySelector('#eraseAudio');
  eraseBtn.addEventListener('click', () => {
    erase.play();
  });

  const drawBtn = document.querySelector('.drawErase');
  let draw = document.querySelector('#drawAudio');
  drawBtn.addEventListener('mouseenter', () => {
    draw.play();
  });

  // typingPrinting
  const printingBtn = document.querySelector('.typingPrinting');
  let printing = document.querySelector('#printingAudio');
  printingBtn.addEventListener('click', () => {
    printing.play();
  });

  const typingBtn = document.querySelector('.typingPrinting');
  let typing = document.querySelector('#typingAudio');
  typingBtn.addEventListener('mouseenter', () => {
    typing.play();
  });

  // drumCymbal
  const cymbalBtn = document.querySelector('.drumCymbal');
  let cymbal = document.querySelector('#cymbalAudio');
  cymbalBtn.addEventListener('click', () => {
    cymbal.play();
  });

  const drumBtn = document.querySelector('.drumCymbal');
  let drum = document.querySelector('#drumAudio');
  drumBtn.addEventListener('mouseenter', () => {
    drum.play();
  });

  // toastApplause
  const applauseBtn = document.querySelector('.toastApplause');
  let applause = document.querySelector('#applauseAudio');
  applauseBtn.addEventListener('click', () => {
    applause.play();
  });

  const toastBtn = document.querySelector('.toastApplause');
  let toast = document.querySelector('#toastAudio');
  toastBtn.addEventListener('mouseenter', () => {
    toast.play();
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
});

function showNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}