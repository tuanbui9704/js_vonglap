function kiemTraSoNT(number) {
  let result = true;
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      result = false;
    }
  }
  return result;
}
function kQ5() {
  var N = document.getElementById("n5").value * 1;
  let result = "";
  for (var i = 2; i <= N; i++) {
    if (kiemTraSoNT(i)) {
      result += i + ",";
    }
  }
  document.getElementById("ketQua5").innerHTML = result;
}
