function myFunction() {
    var number = document.getElementById('nhap').value;
    var greeting;
    if (number == 0) {
        document.getElementById('demo').innerHTML = 'Chào mừng bạn đến với Thế giới này';
        document.getElementById('demo').style.fontFamily = 'arial';
        document.getElementById('demo').style.color = 'red';
    } else if (number > 0) {
        document.getElementById('demo').innerHTML = 'Bạn đã thêm một tuổi mới';
        document.getElementById('demo').style.color = 'green';
    } else {
        document.getElementById('demo').innerHTML = 'Bạn đã pass away';
        document.getElementById('demo').style.color = 'blue';
    }
}