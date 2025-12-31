// Toggle class active untuk Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Ketika hamburger menu di klik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// --- MODAL LOGIC ---
const buyNowButton = document.querySelector('.cta');
const modal = document.getElementById('menu-modal');
const closeModal = document.querySelector('.close-modal');

// Buka modal saat tombol "Beli Sekarang" diklik
buyNowButton.addEventListener('click', function(e) {
  e.preventDefault(); // Mencegah loncatan link
  modal.style.display = 'flex';
});

// Tutup modal saat tombol "x" diklik
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Tutup modal jika klik di luar area modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// --- WHATSAPP ORDER LOGIC ---
const orderForm = document.getElementById('order-form');

orderForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah refresh halaman

  // 1. Ambil nilai dari input form
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value || "Diambil Sendiri";
  const phone = document.getElementById('phone').value;
  const pickup = document.getElementById('pickup').value;
  const menu = document.getElementById('menu').value;

  // 2. Nomor WhatsApp Kamu (Format internasional tanpa '+')
  const noWA = "62895372783654";

  // 3. Susun Pesan (Menggunakan %0A untuk baris baru dan * untuk tebal)
  const pesan = 
    `*PESANAN BARU - KEDAI KOFIECO*%0A` +
    `----------------------------------%0A` +
    `*Nama:* ${name}%0A` +
    `*No. HP:* ${phone}%0A` +
    `*Menu:* ${menu}%0A` +
    `*Opsi:* ${pickup}%0A` +
    `*Alamat:* ${address}%0A` +
    `----------------------------------%0A` +
    `Mohon diproses, terima kasih!`;

  // 4. URL WhatsApp API
  const whatsappUrl = `https://wa.me/${noWA}?text=${pesan}`;

  // 5. Eksekusi: Buka WhatsApp dan tutup modal
  window.open(whatsappUrl, '_blank');
  modal.style.display = 'none';
  
  // Reset form agar bersih kembali
  orderForm.reset();
});