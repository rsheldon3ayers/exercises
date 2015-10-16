/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.

var tree = function(height) {

  var pine = "";
  var space = " ";
  var pineTree = "";
  // console.log(tree);

  for (var i = 0; i < height; i++) {
     pine = "*" + space + pine; 

    // tree = tree + tree;
    console.log(pine);
  }
  for (var j = 0; j < height ; j++){
     
     console.log(pineTree);
     
  }
  // for (var j = 0; j < ; j++)
};

tree(7);