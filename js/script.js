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
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
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
    projelerim.innerHTML = '';  // Önceki içerik siliniyor

    // Filtrelenen veya sıralanan projeleri ekrana yazdır
    projelerArray.forEach(proje => projelerim.appendChild(proje));
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Formun varsayılan olarak gönderilmesini engeller

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const errorMessages = document.getElementById("errorMessages");
  const successMessage = document.getElementById("successMessage");

  // E-posta formatı kontrolü için regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Hata mesajlarını temizle
  errorMessages.style.display = "none";
  errorMessages.innerHTML = "";
  successMessage.style.display = "none"; // Başarı mesajını gizle

  // Hata mesajları için değişken
  let errors = [];

  // Alan doğrulamaları
  if (!name) {
    errors.push("Lütfen isminizi giriniz.");
  }

  if (!email) {
    errors.push("Lütfen e-posta adresinizi giriniz.");
  } else if (!emailPattern.test(email)) {
    errors.push("Lütfen geçerli bir e-posta adresi giriniz.");
  }

  if (!message) {
    errors.push("Lütfen mesajınızı giriniz.");
  }

  // Hata mesajlarını göster veya başarı mesajını göster
  if (errors.length > 0) {
    errorMessages.innerHTML = errors.join("<br>");
    errorMessages.style.display = "block";
  } else {
    successMessage.style.display = "block";
    errorMessages.style.display = "none"; // Hata mesajlarını gizle
    document.getElementById("contactForm").reset(); // Formu temizle
  }
});
