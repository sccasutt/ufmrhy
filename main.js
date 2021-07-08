// Thanks, CSS Tricks, for the guidance! https://css-tricks.com/scroll-drawing/

// getting the length of the svg path
const svg = document.getElementById("Route");
const length = svg.getTotalLength();

// start position of the drawing - normal display pre-animation
svg.style.strokeDasharray = length;

// hides the svg before the scrolling starts
svg.style.strokeDashoffset = length;

// offset the svg dash by the same amount as the percentage scrolled
window.addEventListener("scroll", function () {
  const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  const draw = length * scrollpercent;

  // Reverse the drawing (when scrolling upwards)
  svg.style.strokeDashoffset = length - draw;

});
