const urlParams = new URLSearchParams(window.location.search);
document.getElementById("arabic").textContent = urlParams.get("arabic") || "أستغفر الله";
document.getElementById("english").textContent = urlParams.get("english") || "Astaghfirullah";
