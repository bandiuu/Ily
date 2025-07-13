var bienvenida = "Escribe tu hermoso nombre 💖✨: ";
var data = prompt(bienvenida);
document.getElementById("data").innerHTML = data.toUpperCase();

const yesBtn = document.querySelector('#yesBtn');
yesBtn.addEventListener('click', function(){
    alert('Siempre supe que aceptarías 😘💕');
    location.href = 'https://www.youtube.com/watch?v=0uZdFmbGGaU';
});

const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});
