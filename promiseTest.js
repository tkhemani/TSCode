var promise = new Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (res) {
    console.log("I get called::", res === 123); // i get called: true
});
promise.catch(function (err) {
    // this is never called
});
//# sourceMappingURL=promiseTest.js.map