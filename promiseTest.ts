let promise = new Promise<any>((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log("I get called::", res === 123); // i get called: true
});
promise.catch((err) => {
    // this is never called
});