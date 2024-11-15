function toggle() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('show');
}
function updateTime() {
  var zaman = new Date();
  var saat = zaman.getHours();
  var dakika = zaman.getMinutes();
  var saniye = zaman.getSeconds();


  if (saat < 10) {
      saat = "0" + saat;
  }
  if (dakika < 10) {
      dakika = "0" + dakika;
  }
  if (saniye < 10) {
      saniye = "0" + saniye;
  }
  var zamanString = saat + ":" + dakika + ":" + saniye;
  document.getElementById("zaman").innerHTML = zamanString;
}
setInterval(updateTime, 1000);
updateTime();


function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
  }
}
  function filtrele(kriter) {
    const projeler = document.querySelectorAll('.proje');
    let projelerArray = Array.from(projeler);

      if (kriter === 'populerlik') {
        // Popülerliğe göre sırala
        projelerArray.sort((a, b) => b.dataset.populerlik - a.dataset.populerlik);
    } else if (kriter === 'tarih') {
        // Tarihe göre sırala
        projelerArray.sort((a, b) => new Date(b.dataset.tarih) - new Date(a.dataset.tarih));
    }

    const projelerim = document.getElementById('projelerim');
    projelerim.innerHTML = '';

    projelerArray.forEach(proje => projelerim.appendChild(proje));
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Formun varsayılan gönderimini durdur
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Hata mesajı alanlarını seç
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // Hata mesajlarını temizle
  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";
  successMessage.style.display = "none";

  let hasError = false;

  // İsim kontrolü
  if (name === "") {
      nameError.textContent = "Lütfen isim yazın.";
      nameError.style.display = "block";
      hasError = true;
  }

  // E-posta kontrolü
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailRegex.test(email)) {
      emailError.textContent = "Lütfen geçerli bir email giriniz.";
      emailError.style.display = "block";
      hasError = true;
  }

  // Mesaj kontrolü
  if (message === "") {
      messageError.textContent = "Lütfen mesajınızı giriniz.";
      messageError.style.display = "block";
      hasError = true;
  }

  // Hata yoksa başarı mesajını göster
  if (!hasError) {
      successMessage.style.display = "block";

      // Gerekirse formu temizleyin
      document.getElementById("contactForm").reset();
  }
});
