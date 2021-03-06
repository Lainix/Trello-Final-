// Variables globales
var addList = document.getElementById('insert-list');
var button = document.getElementById('btn-agregar');



/* Versión 0.0.1 */
addList.addEventListener('click', function (event) {
    var hideFirst = document.getElementById('insert-list');
    hideFirst.id = 'first';
    // hideFirst.style.display = 'none'; 
    hideFirst.style = 'first';
    var showSecond = document.getElementById('form');
    // showSecond.id = 'second';
    // showSecond.style = 'second';
    showSecond.style.display = 'block';

});


/* Versión 0.0.2 */
// function getFocus() {
//     document.getElementById("taskInput").focus();  // taskInput  =  tareaInput
// };

button.addEventListener("focus", function () {
});

button.addEventListener('click', function (event) {
    document.getElementById("container").style.display = "block";
});

button.addEventListener('click', function () {
    event.preventDefault();
    // button.id = 'float';
    // button.style.display = "float";
    var comment = document.getElementById('taskInput').value; // .toUpperCase(); // tenemos que tomar el texto ingresado en el textarea     	
    document.getElementById('taskInput').value = ''; //limpiar el textarea
    var containerMain = document.getElementById('container'); //contenedor que esta en el html
    containerMain.classList.add('hide-container');
    var p = document.createElement('p');    // que va a contener el texto
    var title = document.createTextNode(comment);
    var a = document.createElement('a');  // crear a para el texto
    a.setAttribute("href", "#");
    a.classList.add('taskA');
    a.id = 'a';
    var text = document.createTextNode('Añadir una tarea...');
    text.id = 'node';
    // se juntan
    p.appendChild(title);
    a.appendChild(text);
    containerMain.appendChild(p);

    containerMain.appendChild(a);

    //validar que textarea tenga un mensaje
    if (comment.length == 0 || comment == null) {
        alert('Debes ingresar un mensaje');
        return false;
    };


    /* Versión 0.0.3 */
    a.addEventListener('click', function (event) {
        event.preventDefault();
        a.classList.toggle("taskA");

        var secondForm = document.createElement("form");
        var textareaSecond = document.createElement('textarea');
        textareaSecond.id = 'saveArea';
        textareaSecond.classList.add('listInput');


        var buttonSecond = document.createElement('input');
        buttonSecond.setAttribute('value', 'Añadir');
        buttonSecond.setAttribute('type', 'submit');
        buttonSecond.classList.add('add');

        buttonSecond.addEventListener("focus", function () {
        });

        secondForm.appendChild(textareaSecond);
        secondForm.appendChild(buttonSecond);
        event.target.appendChild(secondForm);
        buttonSecond.disabled = false;

        /* Versión 0.0.4 */
        textareaSecond.focus();
        var containerMainLast = document.getElementById('h');
        var commentS = document.getElementById('saveArea').value;
        document.getElementById('saveArea').value = '';
        var newDiv = document.createElement('div');
        newDiv.id = 'divNew';    // creo un id

        var paragraph = document.createElement('p');
        var titleParagraph = document.createTextNode(commentS);

        /* Versión 0.0.5 */
        p.appendChild(newDiv);
        newDiv.appendChild(paragraph);
        paragraph.appendChild(titleParagraph);
    });
});











