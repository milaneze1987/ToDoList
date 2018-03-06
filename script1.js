//створюєм кнопки закритття 
var myNodelist = document.getElementsByTagName('li');
for (var i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// видаляє завдання
var close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++) {
	close[i].onclick = function() {
	var div = this.parentElement;
	div.style.display = "none";
	}
}
 
// відмічаєм виконані завдання
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// добавляєм нові завдання
function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("The field dont't be empty!");
    } else {
        //створюєм новий елемент li
        var li = document.createElement("li");
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById('myUL').appendChild(li);

        //створюєм кнопку видалення
        createCloseButton(li);

        //Чистим поле input
        document.getElementById('myInput').value = "";
    }
}

function createCloseButton(node) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    node.appendChild(span);
    span.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
}
