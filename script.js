let currentIndex = 0;

// Fungsi untuk menampilkan slide berdasarkan index
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    // Pastikan index tetap dalam rentang jumlah slide
    if (index >= slides.length) {
        currentIndex = 0; // Kembali ke slide pertama
    } else if (index < 0) {
        currentIndex = slides.length - 1; // Kembali ke slide terakhir
    } else {
        currentIndex = index; // Set slide ke index yang diinginkan
    }

    // Pindahkan slider ke posisi gambar yang tepat
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Fungsi untuk next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Fungsi untuk prev slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Tambahkan event listener untuk tombol prev dan next
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Inisialisasi dengan menampilkan slide pertama
showSlide(currentIndex);


function donate() {
    alert("Terima kasih atas donasi Anda!");
}

function joinActivity() {
    alert("Ingin ikut kegiatan? Silakan cek kalender kegiatan kami!");
}

function joinForum() {
    alert("Bergabunglah dalam forum komunitas untuk berdiskusi tentang isu lingkungan!");
}
