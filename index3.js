function kQ3() {
  var n1 = document.getElementById("n1").value * 1;
  var sum = 1;
  for (var i = 1; i <= n1; i++) {
    sum *= i;
  }
  document.getElementById("ketQua3").innerHTML = sum;
}
