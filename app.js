// Array AND LOOPS
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var multiArr=[[],[]]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// var multiArr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// console.log(multiArr)

// 3. Write a program to print numeric counting from 1 to 10.
// for (var i = 1; i <=10 ; i++) {
//     console.log(i);    
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableNumber = parseInt(prompt("Enter the table number:"));
// var tableLength = parseInt(prompt("Enter the table length:"));
// for (var i = 1; i <= tableLength; i++) {
//     result = i * tableNumber
//     console.log(result)
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple","banana","mango","orange"]
// for(i=0;i<fruits.length;i++){  
//     console.log("Element at index",i,fruits[i] )
// }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k    

// var number = "";
// for(var i = 1; i <=15; i++) {
//   number += i + "," +" ";
// }
// console.log("Counting",number);

// var number = "";
// for(var i = 10; i >=1; i--) {
//   number += i + "," +" ";
// }
// console.log("Reverse counting",number);

// var even = "";
// for(var i = 2; i <=20; i+=2) {
//   even += [i] + "," +" ";
// }
// console.log("Even",even);

// var odd = "";
// for(var i = 1; i <=20; i+=2) {
//   odd += [i] + "," +" ";
// }
// console.log("Odd",odd);

// var series = "";
// for(var i = 2; i <=20; i+=2) {
//   series += [i] + "k" +"," +" ";
// }
// console.log("Series",series)

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var search=prompt("Enter item you want to find in list: ")
// var arr = ["cake","apple pie","cookie","chips","patties"]
// var found=false
// for(i=0;i<arr.length;i++){
//     if (search ==arr[i]) {
//     found=true
//     break        
//     } 
// }

// if (found) {    
//     console.log(search,"is avaliable at index",i,"in our bakery")
    
// } else {
//     console.log("not found")
    
// }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
// var arr = [24, 53, 78, 91, 12];
// var largest = arr[0];
// for (var i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log("The largest number in the array is:", largest);


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// var arr = [24, 53, 78, 91, 12];
// var smallest = arr[0];
// for (var i = 1; i < arr.length; i++) {
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }
// console.log("The smallest number in the array is:", smallest);




// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
// var tableNumber = 5;
// for (var i = 1; i <= 20; i++) {
//     result = i * tableNumber
//     console.log(result)
// }




// String Methods

// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName=prompt("Enter your first name ")
// var lastName=prompt("Enter your last name ")
// var fullName= firstName + " "+ lastName
// console.log(fullName)


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobilePhoneModel = prompt("Enter your favourite mobile phone ")
// console.log("My favourite phone is:",mobilePhoneModel)
// console.log("length of string is ",mobilePhoneModel.length)


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser
// var find="Pakistani"
// console.log("index of 'n':",find.indexOf("n"))


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var find="Hello World"
// console.log("last index of 'l':",find.lastIndexOf("l"))

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// var find="Pakistani"
// console.log("string",find)
// console.log("Character at index 3:",find.charAt(3))


// 6. Repeat Q1 using string concat() method.
// var firstName=prompt("Enter your first name ")
// var lastName=prompt("Enter your last name ")
// var fullName= firstName + " "+ lastName
// console.log(fullName)

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// var word="Hyderabad"
// console.log("city:",word)
// word = word.replace("Hyder", "Islam");

// console.log("After replacement:",word);



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together";
// message=message.replace(/and/g,"&")
// console.log(message)


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var string="472";
// console.log("value:",string)
// console.log("type:",typeof string)

// num=Number("472")
// console.log("value:",num)
// console.log("type:",typeof num)



// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var word=prompt("Enter a word:")
// word=word.toUpperCase()
// console.log("capital letters:",word)


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var num = 35.36;
// var numString = num.toString();
// var numWithoutDot = numString.split('.').join('');
// console.log(numWithoutDot);




// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:").toLowerCase(); // Convert input to lowercase for case-insensitive search
// var found = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     found = true;
//     break; 
// }
// }
// if (found) {
//   alert("Item '" + userInput + "' is found in the list.");
// } else {
//   alert("Item '" + userInput + "' is not found in the list.");
// }



// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// // Prompt the user to enter a password
// var password = prompt("Enter a password:");

// // Define regular expressions to check the password requirements
// var containsAlphabetsAndNumbers = /[a-zA-Z].*\d|\d.*[a-zA-Z]/;
// var doesNotStartWithNumber = /^[^0-9]/;
// var isAtLeast6CharactersLong = /.{6,}/;

// // Check if the password meets the requirements
// if (
//   containsAlphabetsAndNumbers.test(password) &&
//   doesNotStartWithNumber.test(password) &&
//   isAtLeast6CharactersLong.test(password)
// ) {
//   alert("Password is valid.");
// } else {
//   alert("Password does not meet the requirements. Please enter a valid password.");
// }


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// var university = "University of Karachi";
// var universityArray = university.split(' ');
// console.log(universityArray);



// 17. Write a program to display the last character of a user
// input.
// var userInput = prompt("Enter some text:");
// if (userInput !== null && userInput.length > 0) {
//   var lastCharacter = userInput.charAt(userInput.length - 1);
//   alert("The last character is: " + lastCharacter);
// } else {
//   alert("You did not enter any text.");
// }


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// // Prompt the user to enter some text
// var userInput = prompt("Enter some text:");
// if (userInput !== null && userInput.length > 0) {
//   var lastCharacter = userInput.charAt(userInput.length - 1);
//   alert("The last character is: " + lastCharacter);
// } else {
//   alert("You did not enter any text.");
// }

