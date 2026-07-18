document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const questionText = document.getElementById('valentineQuestion');
    const audio = new Audio('./sounds/music.mp3'); // Осы жерде дыбыс файлыңыз болуы керек

    // Музыканы бірінші рет экранды басқанда қосу
    document.body.addEventListener('click', () => {
        audio.play().catch(e => console.log("Музыка қосылмады:", e));
    }, { once: true });

    // Жоқ батырмасынан тышқан/саусақ қашқанда орын ауыстыру
    noButton.addEventListener('mouseover', moveButton);
    noButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });

    function moveButton() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
        noButton.style.position = 'absolute'; 
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    // Иә батырмасын басқанда
    yesButton.addEventListener('click', () => {
        questionText.innerText = "Ура! Мен де сені жақсы көрем! ❤️";
        noButton.style.display = 'none';
    });
});
