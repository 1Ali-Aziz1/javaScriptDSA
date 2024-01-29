//I will be showing how to reverse a string.
//First we will need a sting which we want to reverse.
//Then we will store all its letters in an array by using for loop.
//Then we will return the string after running a for loop from the length of the array(we stored letters of string in) to 0 and push words to a new string.
//Let's get started.

function reverseString(str) {
    //The parameter "str" is the string we will reverse
    
    letters = [];//This array stores the string letters
    reversedStr = "";//This variable stores reversed string

    for (let i = 0; i < str.length; i++) {
        //This loop puts the string's letters to array(variable letters)
        letters.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
        temp = reversedStr;
        reversedStr = temp + letters[letters.length-i-1];
    }
    return(reversedStr);
}

string = "red";//This the sting we will reverse. You can change this to any word you like to reverse

reverseString(string);//Calling the main function