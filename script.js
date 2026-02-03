function openGift() {
    // Play birthday music for 15 seconds
    const audio = document.getElementById("birthdayTune");
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 15000);

    // Show letter
    document.getElementById("letter").classList.remove("hidden");

    // Light candles one by one
    lightCandles();

    // Confetti over letter
    startConfetti();

    // Sparkles
    sparkleEffect();

    // Floating sparkles around cake
    floatingSparkles();
}

function lightCandles() {
    const candles = document.querySelectorAll(".candle");
    let i = 0;
    const interval = setInterval(() => {
        if (i >= candles.length) {
            clearInterval(interval);
            return;
        }
        candles[i].classList.add("lit");
        i++;
    }, 300);
}

function startConfetti() {
    const container = document.getElementById("confetti-container");
    for (let i = 0; i < 150; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        container.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}

function sparkleEffect() {
    for (let i = 0; i < 20; i++) {
        const s = document.createElement("div");
        s.className = "sparkle";
        s.style.left = Math.random() * 100 + "vw";
        s.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1500);
    }
}

function floatingSparkles() {
    const cake = document.querySelector(".cake");
    for (let i = 0; i < 12; i++) {
        const f = document.createElement("div");
        f.className = "floating-sparkle";
        f.style.left = Math.random() * 100 + "px";
        f.style.top = Math.random() * 50 + "px";
        cake.appendChild(f);
        setInterval(() => {
            f.style.left = Math.random() * 100 + "px";
        }, 2000);
    }
}
