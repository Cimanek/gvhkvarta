//Javascript pro všechny kalkulačky

//!Fyzika

//Rezistory

//Sériově zapojený rezistory
function serRez() {
  //Získání všech dat z INPUT tagů
  var serRez1 = document.getElementById('ser_rez1').value;
  var serRez2 = document.getElementById('ser_rez2').value;
  //Převedení dat ze stringů na integery
  var serRezNum1 = parseInt(serRez1);
  var serRezNum2 = parseInt(serRez2);
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
  var parRezNum1 = parseInt(parRez1);
  var parRezNum2 = parseInt(parRez2);
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
  var teploMNum = parseInt(teploM);
  var teploCNum = parseInt(teploC);
  var teploTNum = parseInt(teploT);
  //Výpočet
  var teploVys = teploMNum * teploCNum * teploTNum;
  //Zobrazilo v HTML
  document.getElementById('teplo_vys').innerHTML = teploVys;
  console.log('Ahoj');
}

//!Matematika
