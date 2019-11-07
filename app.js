// Failing = Learning
function check() {

  //get the input here.
  let name = document.getElementById('name').value;
  let input = document.getElementById('input').value;

  //check if name field is empty

  //add valid number
  let valid = /^[0-9]+$/;

  //check if valid numbers are entered
  if (input.match(valid)) {

    let calc = input * 365; // calculate the age
    let output = name + " You have lived " + calc + " Days on earth"; // gets the text
    document.getElementById('print').innerHTML = output;// print out the text
    console.log('success');

  } else {
    //give out the error message
    alert("Please input valid Numbers not Alphabets");
    document.getElementById('print').innerHTML = "Please do not attach letters to it";
    console.log("Invalid inputs");
  }

  // check if words or numbers match
  function match(word) {
    if (word === word) {
      return true;
    } else {
      return false;
    }
  }

// end of function
}
