var a = "jaInOddiN";
var b=a.split('').reverse().join(''); ;
console.log("reavce",b);


for (var i = 0; i < a.length; i++) {
   var currentChar = a[i]; // Get the character at the current index
   if (currentChar === currentChar.toUpperCase()) {
      console.log("Capital letter:", currentChar);
   } else if (currentChar === currentChar.toLowerCase()) {
      console.log("Small letter:", currentChar);
   }
}





for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
   console.log('aaa', String.fromCharCode(j));
}

for (var j = 97; j <= 122; j++) {  // ASCII values of 'a' is 97 and 'z' is 122
   console.log('aaa', String.fromCharCode(j));
}

var x=1;
var y=2;

 x=x+y;
y=x-y;
x=x-y
console.log('ccc',x)
console.log('ccc',y)



for (var i = 2; i <= 10; i++) {
   var count = 0; 
   for (var j = 1; j <= i; j++) {
       if (i % j == 0) { 
           count++;
       }
   }
   if (count == 2) { 
       console.log("Prime number:", i);
   }
}

var name="TAPAN"

for (var i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
   var evenletter, oddletter;

   if (i % 2 == 0) {
       evenletter = i; // Assign the current character to even
   } else {
       oddletter = i;  // Assign the current character to odd
   }

   // Make sure both evenletter and oddletter are defined before swapping
   if (evenletter && oddletter) {








      evenletter = evenletter + oddletter;
       oddletter = evenletter - oddletter;
       evenletter = evenletter - oddletter;

       
       console.log(String.fromCharCode(evenletter), String.fromCharCode(oddletter));
       
       // Reset evenletter and oddletter for the next iteration
       evenletter = oddletter = undefined;
   }
}
