//Javascript pro všechny kalkulačky

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
  var parRez1 = document.getElementById('par_rez1').value;
  var parRez2 = document.getElementById('par_rez2').value;
  var parRezNum1 = parseInt(parRez1);
  var parRezNum2 = parseInt(parRez2);
  var parRezUp = parRezNum1 * parRezNum2;
  var parRezDown = parRezNum1 + parRezNum2;
  var parRezVys = parRezUp / parRezDown;
  document.getElementById('par_rez_vys').innerHTML = parRezVys;
}
