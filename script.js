// Build a function that returns an array of integers from n to 1 where n>0.
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

var reverseArr = [];

const reverseSeq = n => {
   
   for (n=5; n >= 1 ; n--) 
   {
    console.log([n])
       
       reverseArr[n-1] = n;  
   }
    reverseArr.reverse();

    return reverseArr;
};
reverseSeq();
