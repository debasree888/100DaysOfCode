var myList = document.getElementById('target3').getElementsByTagName('li');

var myHeading = document.getElementById('target1');

var myButton = document.getElementById('target2');

var target3 = document.getElementById('target3');

var count = 1;

target3.addEventListener('click', activateItem);

myButton.addEventListener('click', appendList);

function activateItem(e) {
  if (e.target.nodeName == 'LI') {
    myHeading.innerHTML = e.target.innerHTML;
    for (let i = 0; i < e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove('baseBackground');
    }
    e.target.classList.add('baseBackground');
  }
}

function appendList() {
  target3.innerHTML += '<li>something new ' + count + '</li><hr>';
  count++;
}
