const { people, ages } = require("./people");
// xyz is empty because we need to export data frim people file so it will return data to  xyz
console.log(people, ages);

const os = require("os");

console.log(os.platform() + " " + os.homedir());
