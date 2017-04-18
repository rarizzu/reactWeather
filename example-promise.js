// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback("city not found");

// }

// getTempCallback('Philadelphia', function (err,temp) {
//     if (err) {
//         console.log("error", err)
//     }

//     else {
//         console.log("success",temp)
//     }


// });


// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         //simulating a delay, which is waht usually would happen when calling a promise
//         setTimeout(function () {
//             resolve(85);
//             reject("City Not Found");
//         }, 1000); 
//     });
// }


// getTempPromise("Chicago").then(function (temp) {
// console.log("promise success", temp);
// }, function (err) {
//     console.log("promise error", err);
// })
    


//Challege Area

function addPromise (a,b) {
    return new Promise(function (resolve ,reject) {
        if (typeof a ==="number" && typeof b ==="number") {
            resolve(a+b);
        }

        else {
            reject("try using numbers as parameters")
        }
    });
}

addPromise(1,4).then(function (result) {
console.log("promise success", result)}, function (err) {

console.log("promise error", err)
});




