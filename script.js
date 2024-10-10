// Data disimpan dalam format JSON
const database = [
    { "id": 1, "name": "Vickey", "email": "vickey@example.com" },
    { "id": 2, "name": "jea", "email": "jea@example.com" },
    { "id": 3, "name": "Sam", "email": "sam@example.com" }
];

// Fungsi untuk melihat data dalam bentuk tabel
function viewData() {
    const resultDiv = document.getElementById('result');
    let table = '<table border="1" cellpadding="5" cellspacing="0"><tr><th>ID</th><th>Name</th><th>Email</th></tr>';
    
    database.forEach(item => {
        table += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.email}</td></tr>`;
    });
    
    table += '</table>';
    resultDiv.innerHTML = table;
}

// Fungsi untuk melihat JSON Encodenya
function viewJSON() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<pre>' + JSON.stringify(database, null, 2) + '</pre>';
}
