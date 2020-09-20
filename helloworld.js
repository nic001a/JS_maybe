//console.log("hello world !");

var num = 3;
var string = "salute";
var bool = true;

var myObject = {};
var array = [1, "loha", false, myObject];
var array2 = [];
array2.push("hello")

var stack = [];

stack.push(1);
stack.push(10);
stack.push(19);

// console.log(stack);
// console.log(array[2]);
// console.log(array2[0]);

var quuuuuuue = [];

quuuuuuue.push("hi")
quuuuuuue.push(23)
quuuuuuue.push(true)

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'à', 3];
// console.log(numbers.splice(2,9))


// console.log(stack.pop());
// console.log(stack);

// console.log(quuuuuuue.shift());
// console.log(quuuuuuue.shift())
// console.log(quuuuuuue.shift())

// console.log(quuuuuuue);


// if (confirm("Are you John Smith?")) {
//     console.log("Hello John, how are you?");
// } else {
//     console.log("Then what is your name?");
// }


var i;



// for ( i = 0; i < numbers.length; i++) {
//     console.log(i)
//     console.log("The element " + numbers[i] + " has the index " + i)

// }

for (var i = 0; i < 100; i++)
{
    // check that the number is even
    if (i % 2 == 0)
    {
         continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}
