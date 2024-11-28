let body = document.body;
let darkButton = document.getElementById('darkButton');
let info = document.getElementById('info');

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;


function darkMode(){
    if(darkRemainingLeft == 1){
        darkButton.style.display = "none";
        info.textContent = "💥 JATAH FITUR DARKMODE ANDA SUDAH HABIS 💥"
        console.log('Jatah anda sudah habis');
        return;
    }
    
    darkCounter += 1;
    darkRemainingLeft = darkLimit - darkCounter;


    // Render ke info element
    info.textContent = `Darkmode diPakai ${darkCounter}x, Tersisa ${darkRemainingLeft}x`;


    console.log('Dark mode diKlik sebanyak: ', darkCounter);
    console.log('Kesempatan anda: ', darkRemainingLeft);
    body.classList.toggle('dark');
}


function restart(){
    location.reload();
}