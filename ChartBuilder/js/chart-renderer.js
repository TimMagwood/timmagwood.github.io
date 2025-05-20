function renderChart(type, data, stocks) {
    d3.select("#chart").selectAll("*").remove();
    if (type === "line") {
      renderLineChart(data, stocks);
    } else if (type === "bar") {
      renderBarChart(data, stocks);
    }
    // Add more types as needed
  }