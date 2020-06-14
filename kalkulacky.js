function serRez() {
  var serRez1 = document.getElementById('ser_rez1').value;
  var serRez2 = document.getElementById('ser_rez2').value;
  var serRezNum1 = parseInt(serRez1);
  var serRezNum2 = parseInt(serRez2);
  var serRezVys = serRezNum1 + serRezNum2;
  document.getElementById('ser_rez_vys').innerHTML = serRezVys;
}
