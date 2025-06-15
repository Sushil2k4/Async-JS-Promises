// async-practice.js

// Simulated API Call using Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance of success

      if (success) {
        resolve("✅ Data fetched successfully!");
      } else {
        reject("❌ Failed to fetch data.");
      }
    }, 2000);
  });
};

// Simulate data processing
const processData = (data) => {
  return new Promise((resolve) => {
    console.log("⏳ Processing started...");
    setTimeout(() => {
      resolve(`🔍 Processed Result: ${data.toUpperCase()}`);
    }, 1500);
  });
};

// Simulate storing data
const storeData = (processedData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`💾 Data stored: "${processedData}"`);
    }, 1000);
  });
};

// MAIN EXECUTION CHAIN
fetchData()
  .then((data) => {
    console.log(data);
    return processData(data);
  })
  .then((processed) => {
    console.log(processed);
    return storeData(processed);
  })
  .then((stored) => {
    console.log(stored);
    console.log("🎉 All operations completed successfully.");
  })
  .catch((error) => {
    console.error("🚨 Error:", error);
  });
