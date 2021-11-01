var qrcode = new QRCode(document.getElementById("qrcode"));

function makeCode() {
  var Text = document.getElementById("text");

  qrcode.makeCode(Text.value);
}

makeCode();
