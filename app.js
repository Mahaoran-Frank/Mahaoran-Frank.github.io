const sections = document.querySelectorAll(".reveal");
const topLinks = document.querySelector(".top-links");
const hero = document.querySelector(".hero");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => section.classList.add("visible"));
}

if (topLinks && hero && "IntersectionObserver" in window) {
  const navToneObserver = new IntersectionObserver(
    ([entry]) => {
      topLinks.classList.toggle("content-mode", !entry.isIntersecting);
    },
    { rootMargin: "-70px 0px 0px 0px", threshold: 0 }
  );

  navToneObserver.observe(hero);
}
