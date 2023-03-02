// this comment is for me ---> look back again this 😶😑😐

function needsLicense(kind) {
  return kind === "car" || kind === "truck";
}

// console.log(needsLicense("car"), needsLicense("bike"));

///***///

function chooseVehicle(option1, option2) {
  return (
    (option1 > option2 ? option2 : option1) + " is clearly the better choice."
  );
}

// console.log(
//   chooseVehicle("Wuling Hongguang", "Toyota Corolla"),
//   chooseVehicle("Volkswagen Beetle", "Volkswagen Golf")
// );

///***///

function calculateResellPrice(originalPrice, age) {
  if (age > 10) {
    return 0.5 * originalPrice;
  } else if (age < 3) {
    return 0.8 * originalPrice;
  }
  return 0.7 * originalPrice;
}

// console.log(
//   calculateResellPrice(1000, 1),
//   calculateResellPrice(1000, 5),
//   calculateResellPrice(1000, 15)
// );
