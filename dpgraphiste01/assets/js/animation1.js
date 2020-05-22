// Wrap every letter in a span
var textWrapper = document.querySelector('.anime2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.anime2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.anime2',
    opacity: 0,
    duration: 1000,
    easing: "stop()",
    delay: 1000
  });

