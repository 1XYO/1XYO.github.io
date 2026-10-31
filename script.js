(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var year = document.getElementById("year");
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  if (year) year.textContent = new Date().getFullYear();

  function isDark() {
    var attr = root.getAttribute("data-theme");
    if (attr === "dark") return true;
    if (attr === "light") return false;
    return media.matches;
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }
})();
