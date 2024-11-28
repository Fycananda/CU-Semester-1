function saklar() {

    let toggleGroup1 = document.getElementById("flexSwitchCheckDefault1G");

    
    let toggle1 = document.getElementById("flexSwitchCheckDefault1");
    let toggle2 = document.getElementById("flexSwitchCheckDefault2");
    let toggle3 = document.getElementById("flexSwitchCheckDefault3");
    let toggle4 = document.getElementById("flexSwitchCheckDefault4");
    let toggle5 = document.getElementById("flexSwitchCheckDefault5");
    let toggle6 = document.getElementById("flexSwitchCheckDefault6");
    let toggle7 = document.getElementById("flexSwitchCheckDefault7");
    let toggle8 = document.getElementById("flexSwitchCheckDefault8");
    let toggle9 = document.getElementById("flexSwitchCheckDefault9");
    let toggle10 = document.getElementById("flexSwitchCheckDefault10");


    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");
    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");
    
    
    if (toggleGroup1.checked) {
        lampu1.src = "assets/img/on.png";
    }   else {
        lampu1.src = "assets/img/off.png";
    }


    if (toggle1.checked) {
        lampu1.src = "assets/img/on.png";
    }   else {
        lampu1.src = "assets/img/off.png";
    }
    
    if (toggle2.checked) {
        lampu2.src = "assets/img/on.png";
    }   else {
        lampu2.src = "assets/img/off.png";
    }
    
    if (toggle3.checked) {
        lampu3.src = "assets/img/on.png";
    }   else {
        lampu3.src = "assets/img/off.png";
    }

    if (toggle4.checked) {
        lampu4.src = "assets/img/on.png";
    }   else {
        lampu4.src = "assets/img/off.png";
    }

    if (toggle5.checked) {
        lampu5.src = "assets/img/on.png";
    }   else {
        lampu5.src = "assets/img/off.png";
    }

    if (toggle6.checked) {
        lampu6.src = "assets/img/on.png";
    }   else {
        lampu6.src = "assets/img/off.png";
    }
    
    if (toggle7.checked) {
        lampu7.src = "assets/img/on.png";
    }   else {
        lampu7.src = "assets/img/off.png";
    }

    if (toggle8.checked) {
        lampu8.src = "assets/img/on.png";
    }   else {
        lampu8.src = "assets/img/off.png";
    }

    if (toggle9.checked) {
        lampu9.src = "assets/img/on.png";
    }   else {
        lampu9.src = "assets/img/off.png";
    }

    if (toggle10.checked) {
        lampu10.src = "assets/img/on.png";
    }   else {
        lampu10.src = "assets/img/off.png";
    }

    console.log('testing', toggle1.checked,  toggle2.checked, toggle3.checked);

}