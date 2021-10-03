/*function sum(){

    console.log(arguments);
}

sum(4,6,8);*/
// arguments after run -> {'0':4, '1':6, '2':8} 
// arguments types is object






// 3 point parameters
/*function cars(...c){

    console.log(c);

}  
cars(1,2,3,4,5,6,7,8,9);*/ 
//there  will be an array after the run -> [1,2,3,4,5,6,7,8,9]      







//Method 1 of calculating the amount
/*function sum(){

    value = 0;

    for(let key of arguments)
        value += key;

        return value;


}

console.log(sum(1,2,3,4,5)); */
// sum after the run -> 15








//Method 2 of calculating the amount  with method reduce()
function sum2(...c){

    return   c.reduce((a, b) => a+b);
}

console.log(sum2(1,2,3,4,5));
// sum2 after the run -> 15

//return  c.reduce((a, b) => a+b,44); -> sum2 after the run -> 59
//if we change the initial value of the accumulator to 44, the value 
//of c then changes to 59



//How the reduce() method works
//const Array = [98,45,78,34];
//Array.reduce(function(value1, value2){return value1 + value2})
//situation1 - value1 = 98, value2 = 45, 78, 34


//Array.reduce(function(value1, value2){return value1 + value2},125)
//situation2 - value2 = 125, value2 = 98, 45, 78, 34  

