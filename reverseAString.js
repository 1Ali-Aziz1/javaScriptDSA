//I will be showing how to reverse a string.
//First we will need a sting which we want to reverse.
//Then we will store all its letters in an array by using for loop.
//Then we will return the string after running a for loop from the length of the array(we stored letters of string in) to 0 and push words to a new string.
//Let's get started.

function reverseString(str) {
    //The parameter "str" is the string we will reverse
    
    letters = [];//This array stores the string letters.
    reversedStr = "";//This variable stores reversed string

    for (let i = 0; i < str.length; i++) {
        //This loop puts the string's letters to array(variable letters)
        letters.push(str[i]);//Pushes i'th letter to the array(variable letters).
    }
    for (let i = 0; i < str.length; i++) {
        //This loop adds letters to the reversed string(variable reversedStr).
        temp = reversedStr;//Storing the reversed string's(variable reversedSr) value.
        reversedStr = temp + letters[letters.length-i-1];//Adds the old reversed string(variable reversedStr) and a new letter from the the array(variable reversedStr) but from reverse.
    }
    return(reversedStr);//Return the reversed string(variable reversedStr).
}

string = "red";//This the sting we will reverse. You can change this to any word you like to reverse.

reversedString = reverseString(string);//This variable stores the reversed string.

console.log("Original string: "+string);//Shows the original array.
console.log("Reversed string: "+reversedString);//Shows the reversed array.


//Checking if it's a palindrome or not.
if (string != reversedStr) {
    console.log(string + " isn't a palindrome");//Shows that it's a palindrome.
} else {
    console.log(string + " is a palindrome");//Shows that it's not a palindrome
}
