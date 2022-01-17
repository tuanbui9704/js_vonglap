let ketQua = "";
function kQ4() {
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      ketQua += `<div style="height:25px; background: red; text-white"></div>`;
    } else {
      ketQua += `<div style="height:25px; background: blue; text-white"></div>`;
    }
  }
  document.getElementById("ketQua4").innerHTML = ketQua;
}
