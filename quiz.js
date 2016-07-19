var button = document.getElementById("submit");

//creates a tree in the console based on height and character HTML inputs
function tree(pine) {
  var tree_array = [];
  var spaces = pine.tree_height;

  for(var i = 1; i <= pine.tree_height; i++){
    tree_array[i] = " ".repeat(spaces) + pine.tree_char.repeat(i * 1.9);
    if(i > 9){
      tree_array[i] = " ".repeat(spaces-1) + pine.tree_char.repeat(i *1.95);
    }
    if(i > 20){
      tree_array[i] = " ".repeat(spaces-1) + pine.tree_char.repeat(i *1.97);
    }
  console.log("Line: " + i + tree_array[i]);
  spaces--;
  }
}

//executes tree function
function execute() {
  var height = document.getElementById("height").value;
  var char = document.getElementById("char").value;
  var pine = {
    tree_height: height,
    tree_char: char
  }

  validate();
  tree(pine);
}

//validates if both input fields are filled out
function validate(){
  var height = document.getElementById("height").value;
  var char = document.getElementById("char").value;
  if(height === "" || char === ""){
    alert("Both fields must have a value");
  }
}

//Added event listener for enter key
function submitWithEnter (keyUpEvent){
  console.log("keyUpEvent", keyUpEvent.keyIdentifier);
  if(keyUpEvent.keyIdentifier === "Enter"){
    execute();
  }
}

button.addEventListener("click", execute);
document.querySelector("#char").addEventListener("keyup", submitWithEnter);
document.querySelector("#height").addEventListener("keyup", submitWithEnter);
