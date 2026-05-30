// Skor Değişkenleri
let scores = {
    home: 0,
    away: 0
};

// Zamanlayıcı Değişkenleri
let timerInterval;
let totalSeconds = 5400; // 90 dakika (90 * 60)
let isRunning = false;

// Skor Değiştirme Fonksiyonu
function changeScore(team, amount) {
    scores[team] += amount;
    if (scores[team] < 0) scores[team] = 0; // Skor eksiye düşmesin
    document.getElementById(`${team}Score`).innerText = scores[team];
}

// Zamanlayıcıyı Güncelleme Ekranı
function updateTimerDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    
    // Başına sıfır ekleme (Örn: 05:09)
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    document.getElementById("timer").innerText = `${minutes}:${seconds}`;
}

// Zamanlayıcıyı Başlat
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                alert("Maç Bitti!");
            }
        }, 1000);
    }
}

// Zamanlayıcıyı Durdur
function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

// Sadece Süreyi Sıfırla (90 Dakika Yapar)
function resetTimer() {
    pauseTimer();
    totalSeconds = 5400; 
    updateTimerDisplay();
}

// Her Şeyi Sıfırla
function resetAll() {
    pauseTimer();
    totalSeconds = 5400;
    updateTimerDisplay();
    
    scores.home = 0;
    scores.away = 0;
    document.getElementById("homeScore").innerText = 0;
    document.getElementById("awayScore").innerText = 0;
    document.getElementById("homeName").value = "EV SAHİBİ";
    document.getElementById("awayName").value = "KONUK TAKIM";
}

// İlk açılışta süreyi göster
updateTimerDisplay();
