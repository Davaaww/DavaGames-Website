// Fungsi untuk redirect ke WhatsApp saat tombol pesan diklik
function pesanWa(konsol) {
    // Ganti dengan nomor WhatsApp usahamu
    const nomorWhatsApp = "6281234567890"; 
    
    // Format pesan otomatis
    const pesan = `Halo Kemendage, saya ingin menyewa ${konsol}. Apakah untuk hari ini masih tersedia?`;
    
    // Encode teks agar formatnya sesuai standar URL (mengubah spasi menjadi %20)
    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
    
    // Membuka tab baru yang mengarah ke WhatsApp
    window.open(urlWhatsApp, '_blank');
}

// Menambahkan efek mengecil pada header saat di-scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    
    // Jika di-scroll lebih dari 50px dari atas
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        // Jika kembali ke paling atas
        nav.classList.remove('nav-scrolled');
    }
});