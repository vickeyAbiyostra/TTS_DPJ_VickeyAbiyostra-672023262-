$(document).ready(function () {
  // Ketika dokumen sudah siap (DOM sudah dimuat), fungsi ini dijalankan

  $('#retrieve-resources').click(function () {
    // Menambahkan event handler ketika elemen dengan id 'retrieve-resources' diklik

    var displayResources = $('#display-resources');
    // Menyimpan elemen dengan id 'display-resources' ke dalam variabel

    displayResources.text('Mengambil data dari API...');
    // Mengubah teks elemen menjadi "Mengambil data dari API..." saat permintaan dimulai

    $.ajax({
      // Memulai permintaan AJAX
      type: 'GET',
      // Tipe permintaan adalah GET
      dataType: 'json',
      // Data yang diterima diharapkan dalam format JSON
      url: 'https://vickeyabiyostra.github.io/TTS_DPJ_VickeyAbiyostra-672023262-/apii.json',
      // URL tujuan permintaan adalah 'api.php'
      
      success: function (result) {
        // Fungsi ini akan dijalankan jika permintaan berhasil
        console.log(result);
        // Menampilkan hasil respons dari server ke console browser

        var output = '<table><thead><tr><th>User ID</th><th>Name</th><th>Email</th><th>Phone</th></tr></thead><tbody>';
        // Membuat struktur tabel HTML untuk menampilkan data

        for (var i in result) {
          // Loop melalui setiap elemen dalam hasil JSON
          output += '<str><td>' + result[i].user_id + '</td><td>' + result[i].name + '</td><td>' + result[i].email + '</td><td>' + result[i].phone + '</td><td>';
          // Mengisi baris tabel dengan data dari setiap objek hasil (user_id, name, email, phone)
        }
        output += '</tbody></table>';
        // Menutup tag tabel

        displayResources.html(output);
        // Mengubah konten HTML dari elemen 'display-resources' menjadi tabel yang sudah dibuat

        $('table').addClass('table');
        // Menambahkan class 'table' ke elemen tabel untuk styling CSS
      },
    });
  });
});
