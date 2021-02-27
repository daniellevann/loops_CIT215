var containerEle = document.body.querySelector(".container");
var randomEle = document.body.querySelector(".random");

var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

function loopList() {
  for (var i = 0; i < animals.length; i++) {
    if (animals[i] == "dog") {
      var dogOutput = document.createElement("div");
      dogOutput.innerHTML = "bork bork";
      containerEle.appendChild(dogOutput);
    } else if (animals[i] == "cat") {
      var catOutput = document.createElement("div");
      catOutput.innerHTML = "I am a cat";
      containerEle.appendChild(catOutput);
    } else {
      var otherOutput = document.createElement("div");
      otherOutput.innerHTML = "I am an animal";
      containerEle.appendChild(otherOutput);
    }
  }
}
loopList();
function shuffle() {
  random = animals.sort(() => Math.random() - 0.5);
  containerEle.innerHTML="";
  loopList(random);
};
randomEle.addEventListener("click", function(){
  shuffle();
});