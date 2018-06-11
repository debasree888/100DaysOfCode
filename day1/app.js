var age = document.querySelector('#target3').value;
var myButton = document.getElementById('target4');
var myHeading = document.getElementById('target1');

myButton.addEventListener('click', showStatus);

function showStatus(age) {
  if (age <= 5) myHeading.innerHTML = 'You are a child!!';
  else if (age > 5 && age < 18) myHeading.innerHTML = 'You are a teenager!!';
  else if (age >= 18) myHeading.innerHTML = 'You are an adult!!';
}
