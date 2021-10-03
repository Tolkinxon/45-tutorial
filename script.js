/*
function sum(){

    console.log(arguments);
}

sum(4,6,8);
*/
// arguments after run {'0':4, '1':6, '2':8} 







//Method 1 of calculating the amount

function sum(){
    value = 0;
    for(let key of arguments)
        value += key;

        return value;


}

console.log(sum(1,2,3,4,5)); 
// sum after run 15

