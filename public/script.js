async function uploadReceipt() {
  const fileInput = document.getElementById("receiptImage");

  if (!fileInput.files[0]) {
    alert("Please upload a receipt image first.");
    return;
  }

  const formData = new FormData();
  formData.append("receipt", fileInput.files[0]);

  const response = await fetch("/extract", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  document.getElementById("merchantName").value = data.merchantName || "";
  document.getElementById("date").value = data.date || "";
  document.getElementById("totalAmount").value = data.totalAmount || "";
  document.getElementById("currency").value = data.currency || "";
}

document.getElementById("receiptForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const receipt = {
    merchantName: document.getElementById("merchantName").value,
    date: document.getElementById("date").value,
    totalAmount: document.getElementById("totalAmount").value,
    currency: document.getElementById("currency").value
  };

  let receipts = JSON.parse(localStorage.getItem("receipts")) || [];
  receipts.push(receipt);

  localStorage.setItem("receipts", JSON.stringify(receipts));

  alert("Receipt saved successfully!");
});