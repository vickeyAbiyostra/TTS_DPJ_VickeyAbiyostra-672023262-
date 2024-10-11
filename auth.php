<?php
$servername = "localhost";  // Nama server, biasanya "localhost" untuk server lokal
$username = "root";         // Username untuk login ke database, defaultnya "root"
$password = "";             // Password untuk login ke database, defaultnya kosong
$dbname = "mysql2";         // Nama database yang akan dihubungkan

// Membuat koneksi ke database menggunakan objek mysqli
$conn = new mysqli($servername, $username, $password, $dbname);

// Mengecek apakah koneksi berhasil
if($conn->connect_error) {
    // Jika terjadi error saat koneksi, tampilkan pesan error dan hentikan eksekusi program
    die("Connection failed: " . $conn->connect_error);
}
?>
