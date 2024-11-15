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

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // E-posta formatı kontrolü için regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Hata mesajlarını temizle
  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";
  successMessage.style.display = "none"; // Başarı mesajını gizle

  // Alan doğrulamaları
  if (!name) {
    nameError.style.display = "block";
    return;
  }

  if (!email) {
    emailError.textContent = "Please enter your email.";
    emailError.style.display = "block";
    return;
  }

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
    return;
  }

  if (!message) {
    messageError.style.display = "block";
    return;
  }

  // Form geçerli ise başarı mesajı göster
  successMessage.style.display = "block";
  document.getElementById("contactForm").reset(); // Formu temizle
});
