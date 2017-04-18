// var names =["rick", "joe", "bob"];

// names.forEach(function (name) {
//     console.log("forEach", name);
// });

// names.forEach((name) => {
//     console.log("arrowFunc", name);
// });

// names.forEach((name) => console.log("no brackets" , name));


function add (x,y) {
    return x + y
}

var addStatement = (x,y) => {
    return add(x,y);
}

var addAnother = (x,y) => x + y;
//whatever expression you run in this example is automatically returned.  no need to type return


console.log(addStatement(1,2));

    



