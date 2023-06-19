// JavaScript Document
// Create a random dataset
const dataset = [];
for (let i = 0; i < 10; i++) {
  dataset.push(Math.floor(Math.random() * 100));
}

// Create a bar chart using D3.js
const svg = d3.select("#visualization")
  .append("svg")
  .attr("width", 400)
  .attr("height", 200);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 40)
  .attr("y", (d) => 200 - d * 2)
  .attr("width", 30)
  .attr("height", (d) => d * 2)
  .attr("fill", "#4caf50");
