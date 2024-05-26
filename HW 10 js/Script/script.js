let numbers = [-3, 16, 8, -34, 65, 120, 42, 15, 7, -4, -7, 3, 46, 26, 83];

//for(let i=0; i < numbers.length; i++){
  // if(numbers[i] > 0)
  // if(numbers[i] < 10) 
  // {
   // console.log(numbers[i]);
 //  }
//}


//for(let i=0; i < numbers.length; i++)
   // if(numbers[i] >= 15){
       // console.log(numbers[i]);
    //}


//for(let i=0; i < numbers.length; i++)
   // if(numbers[i]%2 != 0){
      //  console.log(numbers[i]);
    //}
    
 
//for(let i=1; i < numbers.length; i++)
    //if([i]%3 == 0){
       // console.log(numbers[i]);
    //}  


 //let sum = 0;
 //for(let i=0; i < numbers.length; i++){
   //if(numbers[i]%2 !== 0){
    //sum += numbers[i];
   //}
 //}
 //console.log(sum);

 let sum =0;
 let sum1 = 0; 
 let sum2 = 0;
 for(let i=0; i < numbers.length; i++){
   if(numbers[i]%2 === 0){
    sum1 += numbers[i];
   }
   else {
    sum2 += numbers[i]; 
  }
}

if(sum1>sum2){
    sum = sum1 - sum2;
}
else {
    sum = sum2 - sum1;
}
  console.log(sum);
