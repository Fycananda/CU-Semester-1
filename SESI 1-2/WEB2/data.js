const namaSaya = "Maria de Bounze";
let usia = 20;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia <=6) {
        generasi = "Anda Balita";

    } else if (usia >= 7 & usia <= 16) {
        generasi = "Tahun 2011 - ..., Generasi Alpha";

    } else if (usia >= 17 & usia <= 27) {
        generasi = "Tahun 1996 - 2010, Generasi Z";

    } else if (usia >= 28 & usia <= 40) {
        generasi = "Tahun 1981 - 1995, Generasi Y/Millenial";

    } else if (usia >= 41 & usia <= 59) {
        generasi = "Tahun 1965 - 1980, Generasi X";

    } else {
        generasi = "?";
    }

    return biodata.innerHTML = generasi;
}

console.log(namaSaya);
console.log(usia);

generateBiodata();