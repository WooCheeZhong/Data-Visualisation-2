async function displayChart(containerId, specPath) {
  const response = await fetch(specPath);
  const chartSpec = await response.json();

  // Wait for the web fonts so labels are measured and placed with the right font.
  await document.fonts.ready;

  await vegaEmbed(containerId, chartSpec, {
    actions: false,
    renderer: "svg"
  });
}

displayChart(
  "#chart-1",
  "js/01-volunteering-trend.json"
).catch(console.error);

displayChart(
  "#chart-2",
  "js/02-volunteering-map.json"
).catch(console.error);

displayChart(
  "#chart-3",
  "js/03-organised-volunteering.json"
).catch(console.error);

displayChart(
  "#chart-4",
  "js/04-state-change-slopegraph.json"
).catch(console.error);

displayChart(
  "#chart-5",
  "js/05-carer-dot-map.json"
).catch(console.error);

displayChart(
  "#chart-6",
  "js/06-childcare-map.json"
).catch(console.error); 

displayChart(
  "#chart-7",
  "js/07-care-by-age-gender.json"
).catch(console.error);

displayChart(
  "#chart-8",
  "js/08-three-contributions.json"
).catch(console.error);

displayChart(
  "#chart-9",
  "js/09-activity-frequency.json"
).catch(console.error);

displayChart(
  "#chart-10",
  "js/10-sport-treemap.json"
).catch(console.error);

displayChart(
  "#chart-11",
  "js/11-activity-by-state.json"
).catch(console.error);

displayChart(
  "#chart-12",
  "js/12-activity-waffle.json"
).catch(console.error);

displayChart(
  "#chart-13",
  "js/13-active-vs-volunteering.json"
).catch(console.error);

// Sticky section navigation: show the bar once the hero has scrolled away,
// and fill in the link for the part currently being read.
const nav = document.querySelector(".site-nav");
const hero = document.querySelector(".hero");
const navLinks = [...document.querySelectorAll(".site-nav ul a")];
const navTargets = navLinks.map((link) => document.querySelector(link.getAttribute("href")));

function updateNav() {
  // Show the bar once the hero is about to leave the screen.
  nav.classList.toggle("is-visible", hero.getBoundingClientRect().bottom <= 80);

  // The current part is the last one whose top has passed 40% of the screen.
  const line = window.innerHeight * 0.4;
  let current = -1;
  navTargets.forEach((target, i) => {
    if (target && target.getBoundingClientRect().top <= line) current = i;
  });

  navLinks.forEach((link, i) => {
    link.classList.toggle("is-active", i === current);
    if (i === current) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

window.addEventListener("scroll", updateNav, { passive: true });
window.addEventListener("resize", updateNav);
updateNav();
