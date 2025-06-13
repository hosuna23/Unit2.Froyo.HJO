const userInput = prompt("Please enter flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
  
  const flavors = userInput.split(",");
  
  function flavorCount(arr) {
    const flavorTotals = {};
  
    for (const flavor of arr) {
      const trimmedFlavor = flavor.trim(); 
      if (trimmedFlavor in flavorTotals) {
        flavorTotals[trimmedFlavor] += 1;
      } else {
        flavorTotals[trimmedFlavor] = 1;
      }
    }
  
    return flavorTotals;
  }
  
  const result = flavorCount(flavors);
  console.log("You ordered:");
  for (const flavor in result) {
    console.log(`${flavor}: ${result[flavor]}`);
  }