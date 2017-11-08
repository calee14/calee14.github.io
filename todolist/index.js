var numArray = [];
$("tr").each(function(n){
   numArray[n] = $(this).text();
});
console.log(numArray)