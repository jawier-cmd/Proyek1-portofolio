// Mengambil tombol berdasarkan ID
const toggleBtn = document.getElementById('theme-toggle');

// Menambahkan aksi saat tombol diklik
toggleBtn.addEventListener('click', () => {
    // Menambah atau menghapus class 'light-mode' pada tag <body>
    document.body.classList.toggle('light-mode');
    
    // Mengubah teks di dalam tombol
    if (document.body.classList.contains('light-mode')) {
        toggleBtn.innerText = '🌙 Mode Dark';
    } else {
        toggleBtn.innerText = '☀️ Mode Light';
    }
});
