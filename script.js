// Typing Effect
const text = ["Frontend Developer", "UI Designer", "JavaScript Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
if(count === text.length){
count = 0;
}
currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;
if(letter.length === currentText.length){
count++;
index = 0;
}
setTimeout(type, 150);
})();

// Scroll Reveal Animation
ScrollReveal().reveal('.section', {
distance: '50px',
duration: 1000,
easing: 'ease-in-out',
origin: 'bottom',
interval: 200
});
