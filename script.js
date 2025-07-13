var bienvenida = "Escribe tu hermoso nombre 💖✨: ";
var data = prompt(bienvenida);
document.getElementById("data").innerHTML = data.toUpperCase();

const yesBtn = document.querySelector('#yesBtn');
yesBtn.addEventListener('click', function(){
    alert('Te amo como no tienes idea😘💕');
    location.href = 'https://youtu.be/VBiNZcH27Y8?si=pXaOCri64taBQ2el';
});

const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});
