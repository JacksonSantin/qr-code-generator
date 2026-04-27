let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let qrBgColor = document.getElementById("qrBgColor");
let qrColor = document.getElementById("qrColor");
let shareWhatsAppBtn = document.getElementById("shareWhatsApp");
let copyLinkBtn = document.getElementById("copyLink");

function generateQrCode() {
  if (qrText.value.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}&bgcolor=${qrBgColor.value.substring(1)}&color=${qrColor.value.substring(1)}`;
    imgBox.classList.add("show-img");

    shareWhatsAppBtn.style.display = 'inline-block';
    copyLinkBtn.style.display = 'inline-block';
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000)
  }
}

function shareWhatsApp() {
  const qrUrl = qrImage.src;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Veja este QR code: ' + qrUrl)}`;
  window.open(whatsappUrl, '_blank');
}

function copyLink() {
  const qrUrl = qrImage.src;
  navigator.clipboard.writeText(qrUrl).then(() => {
    alert("Link copiado para a área de transferência!");
  }).catch(err => {
    console.error('Erro ao copiar link: ', err);
  });
}