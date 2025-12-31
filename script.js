// Toggle class active untuk Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Ketika hamburger menu di klik
if (hamburger) {
  hamburger.onclick = (e) => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
  };
}

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
if (buyNowButton) {
  buyNowButton.onclick = (e) => {
    modal.style.display = 'flex';
    e.preventDefault();
  };
}

// Tutup modal saat tombol "x" diklik
if (closeModal) {
  closeModal.onclick = () => {
    modal.style.display = 'none';
  };
}

// Tutup modal jika klik di luar area modal
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// --- WHATSAPP ORDER LOGIC ---
const orderForm = document.getElementById('order-form');

if (orderForm) {
  orderForm.onsubmit = function(event) {
    event.preventDefault();

    // Mengambil data berdasarkan atribut 'id' di HTML kamu
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value || "Diambil Sendiri";
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickup').value;
    const menu = document.getElementById('menu').value; // Sesuai id="menu" di HTML terbaru

    const noWA = "62895372783654";

    const pesan = 
      `*PESANAN BARU - KEDAI KOFIECO*%0A` +
      `----------------------------------%0A` +
      `*Nama:* ${name}%0A` +
      `*No. HP:* ${phone}%0A` +
      `*Menu:* ${menu}%0A` +
      `*Opsi:* ${pickup}%0A` +
      `*Alamat:* ${address}%0A` +
      `----------------------------------%0A` +
      `Mohon segera diproses, terima kasih!`;

    const whatsappUrl = `https://wa.me/${noWA}?text=${pesan}`;

    window.open(whatsappUrl, '_blank');
    modal.style.display = 'none';
    orderForm.reset();
  };
}