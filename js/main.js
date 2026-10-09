async function displayChart(containerId, specPath) {
  const response = await fetch(specPath);
  const chartSpec = await response.json();

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