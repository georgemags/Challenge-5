
var textInput = document.querySelector("#text");
var saveBtn =document.querySelector("#save");

saveBtn.addEventListener("click", function(event){
  event.preventDefault();
  var text = document.querySelector("#text").value;
  localStorage.setItem("text",text);
})


