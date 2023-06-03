var btn = document.getElementById("giaiPTBacNhat");
giaiPTBacNhat.onclick = function () {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;

  if (a == "" || b == "") {
    alert("Bạn vui lòng nhập dữ liệu");
  } else {
    a = Number(a);
    b = Number(b);
    giai_PT_Bac_Nhat(a, b);
  }
};

function giai_PT_Bac_Nhat(a, b) {
  if (a == 0 && b == 0) {
    alert("Phương trình vô số nghiệm");
  } else if (a != 0 && b == 0) {
    alert("Phương trình có nghiệm x = 0");
  } else if (a == 0 && b != 0) {
    alert("Phương trình vô nghiệm");
  } else {
    alert("Phương trình có nghiệm x = " + -b / a);
  }
}
