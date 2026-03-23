function sendFaktura() {
let rabat = beregnRabat();
console.log("Sender faktura med rabat: " + (rabat * 100) + "%");
}
function beregnRabat() {
let status = medlemsstatus();
return 0.1;
}
function medlemsstatus() {
let dato = registreringsdato();
return "aktiv";
}
function registreringsdato() {
return "2020-05-01";
}
sendFaktura();