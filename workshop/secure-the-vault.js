/*
PSEUDOCODE:
  Securing the vault
  The combination of lock should be 10 - 40 - 39

    1. Create a variable of 3 passwords:
      pass1 = 10
      pass2 = 40
      pass3 = 39

    2. Be creative! Use arithmetic operators instead of just absolute number for the variables

    3. Create a variable for the first part of the message:
      message = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination: '
    
    4. log the following alert
      message + pass1 + pass2 + pass3 
      
    5. Create comments beside each lines to provide explanation on why certain things are done

    6. Submit the GitHub Repo for this workshop when you are done


*/

// password setup

let pass1 = 5 + 5
let pass2 = 20 * (5 % 3)
let pass3 = 40 - (100 / 100)
console.log(pass1)
console.log(pass2)
console.log(pass3)

/*
  The above lines are used to setup the passwords by using various arithmetic operators to get a result of 10, 40, and 39

  using let instead of const as passwords may change anytime required

  console.log above to test if the equations lead to a correct number 
*/

const message = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination: '
console.log(message)

/*
  created a const variable of the sentence that I want to show to the user. Using const on the basis that I will not change the message in the future

  same as the above, used console.log for me to see if the message works as intended
*/

alert(`${message} ${pass1} - ${pass2} - ${pass3}`);
console.log(message + pass1 +'- ' + pass2 + '- '+ pass3);

/*
  alert is used to make sure that a dialog box pops up when the page is opened.
  
  also made another line of console.log just to show that String Concatenation also works

*/