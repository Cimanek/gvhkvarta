//Javascript pro všechny kalkulačky

//!Fyzika

//Rezistory

//Sériově zapojený rezistory
function serRez() {
  //Získání všech dat z INPUT tagů
  var serRez1 = document.getElementById('ser_rez1').value;
  var serRez2 = document.getElementById('ser_rez2').value;
  //Převedení dat ze stringů na integery
  var serRezNum1 = parseFloat(serRez1);
  var serRezNum2 = parseFloat(serRez2);
  //Kalkulace dat
  var serRezVys = serRezNum1 + serRezNum2;
  //Zobrazení výsledku v HTML
  document.getElementById('ser_rez_vys').innerHTML = serRezVys;
}

//Paralelně zapojený rezistory
function parRez() {
  //Získání dat z inputů
  var parRez1 = document.getElementById('par_rez1').value;
  var parRez2 = document.getElementById('par_rez2').value;
  //Převedení string na INT
  var parRezNum1 = parseFloat(parRez1);
  var parRezNum2 = parseFloat(parRez2);
  //Výpočet Horní části vzorce
  var parRezUp = parRezNum1 * parRezNum2;
  //Výpočet dolní části vzorce
  var parRezDown = parRezNum1 + parRezNum2;
  //Celkový výpočet
  var parRezVys = parRezUp / parRezDown;
  //Zobrazení výsledku v HTML
  document.getElementById('par_rez_vys').innerHTML = parRezVys;
}

//Teplo
function teplo() {
  //Získaní dat z inputu
  var teploM = document.getElementById('teploM').value;
  var teploC = document.getElementById('teploC').value;
  var teploT = document.getElementById('teploT').value;
  //Převedení z stringu na INT
  var teploMNum = parseFloat(teploM);
  var teploCNum = parseFloat(teploC);
  var teploTNum = parseFloat(teploT);
  //Výpočet
  var teploVys = teploMNum * teploCNum * teploTNum;
  //Zobrazilo v HTML
  document.getElementById('teplo_vys').innerHTML = teploVys;
}

//!Matematika

//Válec

//Obsah pláště

function obsPla() {
  var pi = 6.28;
  var v = document.getElementById('obs_pla_v').value;
  var r = document.getElementById('obs_pla_r').value;
  var vNum = parseFloat(v);
  var rNum = parseFloat(r);
  var obsPlaVysle = pi * rNum * vNum;
  document.getElementById('obs_pla_vys').innerHTML = obsPlaVysle;
}

// Obsah podstavy

function obsPod() {
  var piDva = 6.28;
  var rDva = document.getElementById('obs_pod_r').value;
  var rDvaNum = parseFloat(rDva);
  var rDvaNumDru = rDvaNum * rDvaNum;
  var obsPodVys = piDva * rDvaNumDru;
  document.getElementById('obs_pod_vys').innerHTML = obsPodVys;
}

//Obsah Kruhu

function obsKru() {
  var piTri = 3.14;
  var rTri = document.getElementById('obs_kru_r').value;
  var rTriNum = parseFloat(rTri);
  var rTriNumDru = rTriNum * rTriNum;
  var obsKruVys = piTri * rTriNumDru;
  document.getElementById('obs_kru_vys').innerHTML = obsKruVys;
}
