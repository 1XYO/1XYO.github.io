(function () {
  var links = document.querySelectorAll(".nav-link");
  var panels = document.querySelectorAll(".panel");
  var texts = document.querySelectorAll("[data-zh]");
  var langToggle = document.querySelector(".lang-toggle");

  /* ---------- 分页切换 ---------- */
  function activate(id) {
    var found = false;

    panels.forEach(function (panel) {
      var on = panel.id === id;
      panel.classList.toggle("is-active", on);
      if (on) found = true;
    });

    if (!found) {
      document.getElementById("about").classList.add("is-active");
      id = "about";
    }

    links.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
    });
  }

  function fromHash() {
    activate(location.hash.replace("#", "") || "about");
  }

  window.addEventListener("hashchange", fromHash);
  fromHash();

  /* ---------- 中英切换 ---------- */
  function applyLang(lang) {
    var isEn = lang === "en";

    texts.forEach(function (el) {
      el.textContent = isEn ? el.dataset.en : el.dataset.zh;
    });

    document.documentElement.lang = isEn ? "en" : "zh-CN";
    document.title = isEn ? "Jinhao Fan · XYO" : "范锦浩 · XYO";
    langToggle.textContent = isEn ? "中" : "EN";
    langToggle.setAttribute("aria-label", isEn ? "切换到中文" : "Switch to English");
    localStorage.setItem("lang", lang);
  }

  langToggle.addEventListener("click", function () {
    applyLang(localStorage.getItem("lang") === "zh" ? "en" : "zh");
  });

  applyLang(localStorage.getItem("lang") === "zh" ? "zh" : "en");
})();
