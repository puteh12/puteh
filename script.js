function playConfetti() {
  var duration = 4 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);

    confetti(Object.assign({}, defaults, {
      particleCount: particleCount,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
      colors: ['#ff2d55', '#ff9500', '#5856d6', '#5ac8fa', '#34c759']
    }));
  }, 250);
}