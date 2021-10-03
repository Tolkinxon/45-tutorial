/*function sum(){

    console.log(arguments);
}

sum(4,6,8);*/
// arguments after run -> {'0':4, '1':6, '2':8} 
// arguments types is object






// 3 point parameters -> this called Rest parameters 
//translation Rest to Uzbek(-qolgani) 
/*function cars(a,...c){

    console.log(c);

}  
cars(1,2,3,4,5,6,7,8,9); */ 
//there  will be an array after the run -> [2,3,4,5,6,7,8,9] 
//function cars(a,...c)  write like that right, a = 1; 
//function cars(a,...c,b)  write like that wrong, this wrong is b argument   
//because b argument not avialable
//the Rest parametr is always set at the end 






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
/*function sum2(...c){

    return   c.reduce((a, b) => a+b);
}

console.log(sum2(1,2,3,4,5));*/
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





//default parameters
/*function welcome(name = 'User'){
    console.log("welkome  " + name);

} 

welcome();*/
//if the argument is empty, the default parameter works
//that is, it will be so -> welcome User







