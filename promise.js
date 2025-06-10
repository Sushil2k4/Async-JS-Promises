const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data.");
    }
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
    return "Processing data...";
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(err);
  });
