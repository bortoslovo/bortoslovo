let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/xfce.jpg') {
      myImage.setAttribute('src','images/debian.jpg');
    } else {
      myImage.setAttribute('src','images/xfce.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {	
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Borto Slovo is awesome, ' + myName + '.';
}
}


myButton.onclick = function() {
  setUserName();
}	
