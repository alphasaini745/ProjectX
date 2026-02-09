(function () {
  function typeWriter(el, text, speed) {
    let i = 0;
    el.textContent = "";
    function tick() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i += 1;
        setTimeout(tick, speed);
      }
    }
    tick();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var elements = document.querySelectorAll("[data-typewriter]");

    elements.forEach(function (el) {
      var text = el.getAttribute("data-typewriter") || "";
      if (prefersReduced) {
        el.textContent = text;
        return;
      }
      typeWriter(el, text, 28);
    });
  });
})();