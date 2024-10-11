<?php
header('Content-Type: application/json');

// Menyertakan file 'auth.php' yang mengandung konfigurasi koneksi database
include 'auth.php';

// Inisialisasi array untuk menyimpan hasil query
$output = array();

// Query SQL untuk mengambil data user_id, name, email, dan phone dari tabel 'personnel'
$query = "select user_id, name, email, phone from personnel";

// Menjalankan query pada koneksi database
$result = mysqli_query($conn, $query);

// Mengecek apakah ada hasil dari query
if(mysqli_num_rows($result) > 0 ) {
    // Jika ada hasil, loop melalui setiap baris data
    while($obj = mysqli_fetch_object($result)) {
        // Setiap baris data diubah menjadi objek dan dimasukkan ke dalam array $output
        $output[] = $obj;
    }
}

// Mengatur tipe konten sebagai 'text/javascript' (JSON) )
'Content-Type: text/javascript';

// Mengubah array $output menjadi format JSON dan menampilkannya
echo json_encode($output);

// Menutup koneksi database
$conn->close();
?>
