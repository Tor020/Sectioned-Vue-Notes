//Destructuring
var foo = {
  bar: 1,
  baz: 2
};

//var bar = foo.bar;
//var baz = foo.baz;
var { bar, baz } = foo; //Same thing as above. Less writing more concise
var { bek } = foo; //Also allows you to avoid having to constantly write out objectWithALongName.propertyYouNeed

var tense = []
var tenses = ["me", "you", "he"];
var [ firstPerson ] = tense; // Destructuring array
var [ firstPerson, secondPerson ] = tenses; // firstPerson = me // secondPerson = you


// Promise.all([promise1, promise2]).then(function(results1, results2){ //this will destructure the array out right into these variable names saves writing a lot of code

// })

var what = 2;

var obj = {
  bit: 1,
  what,  //obj short notation
}

console.log(obj.what);

var name = "kevin"
var age = 26
