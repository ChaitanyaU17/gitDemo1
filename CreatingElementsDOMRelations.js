// Write your code below:
const subHeading = document.createElement('h3');
subHeading.style.fontStyle = 'italic';

const subHeadingText = document.createTextNode('Buy high quality organic fruits online');

subHeading.appendChild(subHeadingText);

const headerDiv = document.getElementById('header');
headerDiv.appendChild(subHeading);

// ...
const para = document.createElement('p');

const paraText = document.createTextNode('Total fruits : 4');

para.appendChild(paraText);

const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];
secondDiv.appendChild(para);

const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para,  fruits);

// ..

para.id = 'fruits-total';