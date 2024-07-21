let score = 0;

document.getElementById('start-game').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
});

