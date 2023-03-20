const expr = process.argc[2];

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("Mangos and Papayas are $2.79 a pound.");
}
