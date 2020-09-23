var v = " PRIME";
var nv = " Not a PRIME";

function CheckPrime(number) {
    var i;
    var sqrt = Math.sqrt(number);

    console.log("chcking for less than " + sqrt)


    for (i = 2; i < sqrt; i++) {
        if (number % i == 0) {
            return 0;
        }
        else {
            return 1;
        }
    }
}

var index = CheckPrime(101);

if (index == 0){
    console.log("not a prime")
}
else {
    console.log("prime")
}