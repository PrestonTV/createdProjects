let addtoDoButton = document.getElementById('toDoButton');
let textField = document.getElementById('inputField');
let textSpace = document.getElementById('textSpace');

addtoDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    textSpace.appendChild(paragraph);
    paragraph.innerText = textField.value;
    textField.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        textSpace.removeChild(paragraph);
    })
})