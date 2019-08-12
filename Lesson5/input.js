//4. *Создать форму состоющую из одного input[type="file"],
// рядом расположить кнопку которая создает новый инпут 
//под существующим. Максимальное колличество инпутов 10 штук. Рядом 
//с каждый добавить кнопку "удалить", которая удаляет конкретный 
//инпут рядом с которым находиться данная кнопка. 
//События навешиваем через html, аттрибутом 
//onclick="глобальнаяфункцияиз_javascript"

function createInput() {
    var allInputs = document.querySelectorAll('input').length;
    if (allInputs < 10) {
        var newInput = document.createElement('input');
        newInput.type = 'file';
        var newButton = document.createElement('button');
        newButton.innerText = 'Delete';
        newButton.type = 'button';
        newButton.setAttribute('onclick', 'deleteInput()');
        var theForm = document.querySelector('form');
        theForm.appendChild(newInput);
        theForm.appendChild(newButton);
    }
}
function deleteInput() {
    const pressedDelButton = event.target;
    pressedDelButton.previousSibling.remove();
    pressedDelButton.remove();
}

