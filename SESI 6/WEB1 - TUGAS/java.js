let body = document.body;
let darkButton = document.getElementById('darkButton');
let sexyButton = document.getElementById('sexyButton');
let info = document.getElementById('info');
let infosexy = document.getElementById('infosexy');

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

const sexyLimit = 5;
let sexyCounter = 0;
let sexyRemainingLeft;


function darkMode() {
    info.style.display = "block";
    if (darkRemainingLeft == 1) {
        darkButton.style.display = "none";
        info.textContent = "💥 JATAH FITUR DARKMODE ANDA SUDAH HABIS 💥"
        console.log('Jatah anda sudah habis');
        return;
    }   else {
        infosexy.style.display = "none";
    }
    
    darkCounter += 1;
    darkRemainingLeft = darkLimit - darkCounter;
    
    
    // Render ke info element
    info.textContent = `Darkmode diPakai ${darkCounter}x, Tersisa ${darkRemainingLeft}x`;
    
    
    console.log('Dark mode diKlik sebanyak: ', darkCounter);
    console.log('Kesempatan anda: ', darkRemainingLeft);
    body.classList.toggle('dark');
}


function sexyMode() {
    infosexy.style.display ="block";
    if (sexyRemainingLeft == 1) {
        sexyButton.style.display = "none";
        infosexy.textContent = "💦 JATAH FITUR SEXYMODE ANDA SUDAH HABIS 💦";
        console.log('Jatah anda sudah habis');
        return;
    }   else {
        info.style.display = "none";
    }
    sexyCounter += 1;
    sexyRemainingLeft = sexyLimit - sexyCounter;

    // Render ke info element
    infosexy.textContent = `🤤 Sexymode diPakai ${sexyCounter}x, Tersisa ${sexyRemainingLeft}x 🤤`;

    console.log('sexy mode diKlik sebanyak: ', sexyCounter);
    console.log('Kesempatan anda: ', sexyRemainingLeft);
    body.classList.toggle('sexy');
}

function restart() {
    location.reload();
}