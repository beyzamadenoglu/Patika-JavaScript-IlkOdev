//Kullanıcıdan isim alma
let username = prompt("Merhaba, Adınız Nedir ?");

//id ile html elementi okuma
let myName = document.querySelector("#myName");

//Kullanıcıdan gelen isim kontrolü
myName.innerHTML = `${username ? username : prompt("İsim alanı boş, isminizi giriniz")}`;

function showTime(){
    let time = document.querySelector("#myClock");
    let now = new Date();
    time.innerHTML = now.toLocaleTimeString();
}

//Saat için anlık fonksiyon
setInterval(showTime,1000);