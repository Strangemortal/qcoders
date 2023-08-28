function generateQRCode() {
  const qrData = document.getElementById("qr-data").value; // Get user input
  const qrCodeDiv = document.getElementById("qr-code");

  // Clear any existing QR code
  qrCodeDiv.innerHTML = "";

  // Create a QR code instance
  const qr = qrcode(0, "M");
  qr.addData(qrData);
  qr.make();

  // Create a QR code image element and append it to the page
  const qrImage = qr.createImgTag(5, 10); // Adjust size and margin as needed
  qrCodeDiv.innerHTML = qrImage;
}

// Attach the generateQRCode function to the button click event
document
  .getElementById("generate-button")
  .addEventListener("click", generateQRCode);

// Function to generate QR code
function generateQRCode() {
  const qrData = document.getElementById("qr-data").value.trim(); // Get user input and remove leading/trailing spaces
  const qrCodeDiv = document.getElementById("qr-code");

  // Check if input is empty
  if (qrData === "") {
    alert("Please enter data to generate a QR code.");
    return;
  }

  // Clear any existing QR code
  qrCodeDiv.innerHTML = "";

  // Create a QR code instance
  const qr = qrcode(0, "M");
  qr.addData(qrData);
  qr.make();

  // Create a QR code image element and append it to the page
  const qrImage = qr.createImgTag(5, 10); // Adjust size and margin as needed
  qrCodeDiv.innerHTML = qrImage;
}

// Attach the generateQRCode function to the button click event
document
  .getElementById("generate-button")
  .addEventListener("click", generateQRCode);
