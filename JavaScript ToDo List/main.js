let addtoDoButton = document.getElementById('toDoButton');
let textField = document.getElementById('inputField');
let textSpace = document.getElementById('textSpace');

addtoDoButton.addEventListener("click", function(){
    var paragraph = document.createElement("p");
    paragraph.innerText = textField.value;
    textSpace.appendChild(paragraph);
    textField.value = "";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener("dblclick", function(){
        textSpace.removeChild(paragraph);
    })
})

