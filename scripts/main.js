// Image Changer script
let myImage = document.querySelector('#header-img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/headerStart.png'){
        myImage.setAttribute('src', 'images/headerClicked.jpg');
        myImage.setAttribute("width", "500");
        myImage.setAttribute("height", "400");
        myImage.setAttribute("style", "margin: 10px auto 30px")
    } else {
        void(0)
    }
}

// Personolised Message script
let myButton = document.querySelector('#change-user');
let myHeading = document.querySelector('#personal-header')

function setUserName() {
    let myName = prompt('Please enter your name : ');
    if(!myName || myName === null){
        setUserName();
    }
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Welcome back, " + storedName;
}

myButton.onclick = function() {
    setUserName()
}