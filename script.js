document.addEventListener("DOMContentLoaded", function () {
    // Nomor HP WhatsApp KYY Store (Format Internasional)
    const phoneNumber = "6285730918801";
    
    // Mengambil semua tombol Beli via WhatsApp
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-product");
            
            // Format pesan WhatsApp otomatis
            const message = encodeURIComponent(`Halo KYY Store, saya mau pesan ${productName}. Apakah stok masih tersedia?`);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            // Membuka tautan WhatsApp di tab baru
            window.open(whatsappUrl, "_blank");
        });
    });
});