// Wrap every letter in a span
var textWrapper = document.querySelector('.anime1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.anime1 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.anime1 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: " stop()",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });