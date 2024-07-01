(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e);
  new MutationObserver((e) => {
    for (const l of e)
      if (l.type === "childList")
        for (const n of l.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && c(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(e) {
    const l = {};
    return (
      e.integrity && (l.integrity = e.integrity),
      e.referrerpolicy && (l.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function c(e) {
    if (e.ep) return;
    e.ep = !0;
    const l = o(e);
    fetch(e.href, l);
  }
})();

let s = document.querySelectorAll(".faq");
for (let t = 0; t < s.length; t++) {
  let r = s[t].querySelector(".faq-answer"),
    o = s[t].querySelector(".arrow-down");
  s[t].addEventListener("click", () => {
    for (let c = 0; c < s.length; c++) {
      let e = s[c].querySelector(".faq-answer"),
        l = s[c].querySelector(".arrow-down");
      s[t] != s[c] &&
        ((e.style.maxHeight = "0px"),
        l.classList.replace("rotate-180", "rotate-0"));
    }
    o.classList.contains("rotate-180")
      ? ((r.style.maxHeight = 0 + "px"),
        o.classList.replace("rotate-180", "rotate-0"))
      : ((r.style.maxHeight = r.scrollHeight + "px"),
        o.classList.replace("rotate-0", "rotate-180"));
  });
}

let d = document.querySelectorAll(".switcher");

if (!localStorage.getItem("color-theme")) {
  localStorage.setItem("color-theme", "light");
}
document.documentElement.classList.remove("dark");

d.forEach((t) => {
  t.addEventListener("click", function () {
    localStorage.getItem("color-theme") === "dark"
      ? (document.documentElement.classList.remove("dark"),
        localStorage.setItem("color-theme", "light"))
      : (document.documentElement.classList.add("dark"),
        localStorage.setItem("color-theme", "dark"));

    toggleDarkMode();
  });
});

let i = document.querySelectorAll(".tab"),
  a = document.querySelector(".tab-indicator"),
  u = document.querySelectorAll(".panel"),
  m = document.querySelectorAll(".panel-preview");

a !== null &&
  ((a.style.width = i[0].getBoundingClientRect().width + "px"),
  (a.style.left =
    i[0].getBoundingClientRect().left -
    i[0].parentElement.getBoundingClientRect().left +
    "px"));

i.forEach((t) => {
  t.addEventListener("click", () => {
    let r = t.getAttribute("aria-controls");
    (a.style.width = t.getBoundingClientRect().width + "px"),
      (a.style.left =
        t.getBoundingClientRect().left -
        t.parentElement.getBoundingClientRect().left +
        "px"),
      u.forEach((o) => {
        let c = o.getAttribute("id");
        r === c
          ? (o.classList.remove("invisible", "opacity-0", "scale-90"),
            o.classList.add("visible", "opacity-100", "scale-100"))
          : (o.classList.add("invisible", "opacity-0", "scale-90"),
            o.classList.remove("visible", "opacity-100", "scale-100")),
          m.forEach((e) => {
            let l = e.getAttribute("data-target");
            r === l
              ? (e.classList.replace("translate-y-[100%]", "translate-y-0"),
                e.classList.replace("scale-75", "scale-100"),
                e.classList.replace("opacity-50", "opacity-100"),
                e.classList.replace("z-0", "z-10"))
              : (e.classList.replace("scale-100", "scale-75"),
                e.classList.replace("opacity-100", "opacity-50"),
                e.classList.replace("z-10", "z-0"),
                setTimeout(() => {
                  e.classList.replace("translate-y-0", "translate-y-[100%]");
                }, 300),
                clearTimeout());
          });
      });
  });
});

const f = document.querySelector("#hamburger"),
  g = document.querySelector("#navbar");

f.addEventListener("click", () => {
  g.classList.toggle("navbar-active");
});

// Dark and light modes for Images
let darkMode = localStorage.getItem("color-theme") === "dark";

function setImageForDarkMode(imageId, darkImagePath, lightImagePath) {
  const img = document.getElementById(imageId);
  if (darkMode) {
    img.src = darkImagePath;
  } else {
    img.src = lightImagePath;
  }
}

function toggleDarkMode() {
  darkMode = !darkMode;
  localStorage.setItem("color-theme", darkMode ? "dark" : "light");

  setImageForDarkMode(
    "site-image1",
    "./images/Dark Images/Untitled (1).webp",
    "./images/New Images/256436-P4QWCA-715.jpg"
  );
  setImageForDarkMode(
    "site-image2",
    "./images/Dark Images/Untitled.webp",
    "./images/New Images/6155818.jpg"
  );
  setImageForDarkMode(
    "site-image3",
    "./images/Dark Images/Untitled (2).webp",
    "./images/New Images/460557-PFQ5QV-679.jpg"
  );
  setImageForDarkMode(
    "site-image4",
    "./images/Dark Images/Untitled (3).webp",
    "./images/New Images/7566.jpg"
  );
  setImageForDarkMode(
    "site-image5",
    "./images/Dark Images/Untitled (5).webp",
    "./images/New Images/4208421.jpg"
  );
  setImageForDarkMode(
    "site-image6",
    "./images/Dark Images/Untitled (4).webp",
    "./images/New Images/5035121.jpg"
  );
}

setImageForDarkMode(
  "site-image1",
  "./images/Dark Images/Untitled (1).webp",
  "./images/New Images/256436-P4QWCA-715.jpg"
);
setImageForDarkMode(
  "site-image2",
  "./images/Dark Images/Untitled.webp",
  "./images/New Images/6155818.jpg"
);
setImageForDarkMode(
  "site-image3",
  "./images/Dark Images/Untitled (2).webp",
  "./images/New Images/460557-PFQ5QV-679.jpg"
);
setImageForDarkMode(
  "site-image4",
  "./images/Dark Images/Untitled (3).webp",
  "./images/New Images/7566.jpg"
);
setImageForDarkMode(
  "site-image5",
  "./images/Dark Images/Untitled (5).webp",
  "./images/New Images/4208421.jpg"
);
setImageForDarkMode(
  "site-image6",
  "./images/Dark Images/Untitled (4).webp",
  "./images/New Images/5035121.jpg"
);

// Update images when dark mode is toggled
document.querySelectorAll(".dark-mode-toggle").forEach((toggleButton) => {
  toggleButton.addEventListener("click", toggleDarkMode);
});

// Check if the page is solution.html and update dark mode accordingly
if (document.title === "Solution Page") {
  toggleDarkMode();
}
