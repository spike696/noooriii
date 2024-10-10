// Function to create confetti
function createConfetti() {
    const colors = ['#ff0', '#0f0', '#00f', '#f00', '#ff69b4'];
    const size = Math.random() * 10 + 5;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    const confettiPiece = document.createElement('div');
    confettiPiece.style.position = 'absolute';
    confettiPiece.style.width = `${size}px`;
    confettiPiece.style.height = `${size}px`;
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.left = `${x}px`;
    confettiPiece.style.top = `${y}px`;
    confettiPiece.style.borderRadius = '50%';

    document.body.appendChild(confettiPiece);

    setTimeout(() => {
        document.body.removeChild(confettiPiece);
    }, 3000);
}

// Create confetti pieces every 100ms
setInterval(createConfetti, 100);
