// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar untuk menghilangkan
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Mendapatkan elemen modal dan tombol "Beli Sekarang"
const buyNowButton = document.querySelector('.cta');
const modal = document.getElementById('menu-modal');
const closeModal = document.querySelector('.close-modal');

// Ketika tombol "Beli Sekarang" ditekan, buka modal
buyNowButton.addEventListener('click', function() {
  modal.style.display = 'flex';
});

// Ketika tombol "x" pada modal ditekan, tutup modal
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Menutup modal jika klik di luar area modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Mendapatkan elemen form dan tambahkan event listener untuk submit
const orderForm = document.getElementById('order-form');

orderForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah refresh halaman

  // Ambil nilai dari form
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const pickup = document.getElementById('pickup').value;
  const menu = document.getElementById('menu').value;

  // Contoh aksi: tampilkan pesan konfirmasi
  alert(`Terima kasih, ${name}. Pesanan ${menu} Anda dengan opsi ${pickup} sedang diproses!`);

  // Tutup modal setelah submit
  modal.style.display = 'none';
});