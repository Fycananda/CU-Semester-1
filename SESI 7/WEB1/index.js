const http = require('http');
const mFormat = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = 'localhost'
const port = 3002

const server = http.createServer(function (request, response) {
    const nama = "FYCANANDA";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = mFormat.convert(uang);
    jajan = mFormat.convert(jajan);
    sisa = mFormat.convert(sisa);

    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('sisa rupiah: ', sisa);
    })

    const Memory = os.freemem();
    const CPU = os.cpus();

    function checkCPU() {
        let myCPU = [];
        CPU.map((cpu, i) => {
            myCPU.push(cpu.model)
        })
        return myCPU[0];
    }

    console.log(checkCPU())


    const hasil = `
    <html>
    <head>
    <title>SESI 7 - WEB 1</title>
    </head>
    <style>
    *,
    html {
        width: 100%;
    }

    body {
        width: auto;
        height: auto;
        background-color: orange;
        font-family: Segoe UI;
    }
    
    h1 {
        background-color: tomato;
        border-radius: 25px;
        text-align: center;
    }

    h4 {
        background-color: skyblue;
        border-radius: 25px;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
    }
        
    h5 {
        background-color: gray;
        border-radius: 25px;
        color: white;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
    }
        
    p {
        background-color: white;
        border-radius: 25px;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
    }
    </style>
    <body>
    <h1>NODE JS UANG JAJAN</h1>
    <p>
    Nama Saya ${nama} dan Saya jajan sebanyak ${jajan}, uang saya tadinya  ${uang} sekarang menjadi ${sisa}.
    </p>

    <h4>Model CPU Saya: ${checkCPU()}</h4>
    <h5>Memory saya: ${Memory}</h5>
    </body>
    </html>`
    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, function () {
    console.log(`server menyala di ${host}:${port} 🔥`);
});
