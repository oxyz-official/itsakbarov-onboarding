const { add } = require("./index");
if (add(2, 3) !== 5) { console.error("FAIL"); process.exit(1); }
console.log("PASS");
