function kQ1() {
  var result = 0;
  var sum = 0;
  while (sum < 10000) {
    sum = sum + 1;
  }

  for (var i = 0; i <= 10000; i++) {
    sum += i;
    if (sum > 10000) {
      result = i;
      break;
    }
  }
  document.getElementById("ketQua1").innerHTML =
    "Số nguyên dương nhỏ nhất là " + result;
}
