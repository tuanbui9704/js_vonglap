function kQ2() {
  var X = document.getElementById("X").value * 1;
  var N = document.getElementById("N").value * 1;
  var sum = 0;
  for (var i = 1; i <= N; i++) {
    sum += Math.pow(X, i);
  }
  document.getElementById("ketQua2").innerHTML = sum;
}
