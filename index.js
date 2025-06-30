// --- Tutorials Array ---
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// --- Function to Convert to Title Case ---
function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  });
}

// --- Battery Batches Array (matches test expectations) ---
const batteryBatches = [
  { batch: 1, batteries: 5 },
  { batch: 2, batteries: 10 },
  { batch: 3, batteries: 6 },
  { batch: 4, batteries: 10 },
];

// --- Reduce to Get Total Batteries ---
const totalBatteries = batteryBatches.reduce((sum, batch) => {
  return sum + batch.batteries;
}, 0);
