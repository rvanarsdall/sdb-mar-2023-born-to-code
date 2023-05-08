// ? Function that will return a string.
// ? String will all be in lowercase
// ? If there is a space in the letters it will be replaced with a dash
// ? Example: "Rob Vanarsdall"
// ? Result: rob-vanarsdall

let name = "Rob Vanarsdall";

export function urlBuilder(studentName) {
  return studentName.split(" ").join("-").toLowerCase();
}

console.log(urlBuilder(name));
