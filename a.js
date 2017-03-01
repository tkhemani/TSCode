var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        // let a = 10;;
        // if(a==10){}
        console.log("Hi");
        return 0;
    };
    return Startup;
}());
Startup.main();
// import fs = require("fs");
// function loadJSONSync(filename: string) {
//     return JSON.parse(fs.readFileSync(filename));
// }
// // good json file
// console.log(loadJSONSync("good.json"));
// // non-existent file, so fs.readFileSync fails
// try {
//     console.log(loadJSONSync("absent.json"));
// }
// catch (err) {
//     console.log("absent.json error", err.message);
// }
// // invalid json file i.e. the file exists but contains invalid JSON so JSON.parse fails
// try {
//     console.log(loadJSONSync("invalid.json"));
// }
// catch (err) {
//     console.log("invalid.json error", err.message);
// } 
//# sourceMappingURL=a.js.map