const qrInput = document.getElementById('qrInput');
const qrBtn = document.getElementById('qrBtn');
const qrImg = document.getElementById('qrImg');

qrBtn.addEventListener('click', () => {
    const inputValue = qrInput.value;

    if (!inputValue) {
        alert('Please enter a valid url');
        return;
    } else {
        qrImg.src=  `https:api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrImg.alt = `QR Code for ${inputValue}`
    }
})