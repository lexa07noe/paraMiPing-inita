const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    // Muestra la alerta
    alert('¡Sabía que ibas a decir que sí uwu!');

    // Después de que el usuario cierre la alerta, redirige al nuevo archivo HTML
    window.location.href = 'te-quiero.html'; // Cambia por la ruta del archivo que desees
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
