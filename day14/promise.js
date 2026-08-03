const myPromise = new Promise((resolve, reject) => {
    resolve("Promise Completed Successfully");
});
myPromise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});