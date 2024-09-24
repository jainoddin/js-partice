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





for (var i = 'a'; i < 'z'; i++) {
   if(a[i]==='a'&&a[i]==='z'){
      console.log('aaa',a[i])
   }
}