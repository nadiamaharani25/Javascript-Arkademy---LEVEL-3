 /* 
===================== SOAL 1 ============================
Database adalah kumpulan data yang disimpan secara sistematis di dalam komputer dan dapat diolah atau dimanipulasi menggunakan perangkat lunak (software) program untuk menghasilkan informasi.

Perbedaan SQL dan NoSQL:
-Dalam basisdata SQL data dalam bentuk tabel yang terdiri dari sejumlah baris
-Sedangkan data dalam NoSQL tidak memiliki definisi skema standar yang harus dipatuhi. Basisdata NoSQL memiliki skema yang dinamis sementara basisdata SQL terdiri dari skema yang telah ditetapkan.


===================== SOAL 2 ============================
- Pernah belajar. Sudah sampai CRUD


===================== SOAL 3 ============================

1. SELECT
SELECT berfungsi untuk menampilkan data pada table secara kesuluruhan.

Syntax Dasar :
SELECT * FROM nama_tabel

Contoh Penggunaan :
SELECT * FROM mahasiswa;
(penggunaan tanda * (bintang) artinya digunakan memilih semua field)


2. WHERE
WHERE memiliki fungsi untuk memfilter data/record. pengunaan select dapat menampilkan keseluruhan data, sedangkan dengan menambah perintah where setelah select maka data yang ditampilkan dapat difilter/disaring.

Syntax Dasar :
SELECT * FROM nama_tabel WHERE nama_field = 'nilai'

Contoh Penggunaan :
SELECT * FROM customers WHERE kota = 'Jakarta';
query tersebut untuk menampilkan customer yang tinggal di kota Jakarta.


3. INSERT
Untuk memasukan atau menambah record/data baru ke table

Sytax Dasar :
INSERT INTO nama_tabel('nama_field', 'nama_field', 'dst' ) VALUES('nilai_masukan', 'nilai_masukan', 'dst'); 

Contoh Penggunaan :

- Misal kita ingin memasukkan data ini ke tabel.
nama	:	Nadia Maharani
kota	:	Palembang
negara	:	Indonesia

INSERT INTO customers('nama', 'kota', 'negara') 
VALUES('Nadia Maharani', 'Palembang', 'Indonesia');


4. UPDATE
Untuk memperbarui atau memberbaiki record/data yang sudah ada pada tabel.

Contoh :
UPDATE customers
SET nama = 'Nadia', kota = 'Palembang'
WHERE name = 'Maharani';

Query di atas dapat mengubah nama dan kota sekaligus cukup dengan menambahkan nama field pada SET saja dan pisahkan dengan koma (,).


5. DELETE
Untuk Menghapus Data/Record
Penggunaan DELETE digunakan untuk menghapus record pada tabel. baik itu satu data/record atau lebih.

Contoh :
DELETE FROM customers
WHERE negara = 'USA';


Sama halnya UPDATE, DELETE juga harus diakhiri dengan WHERE. penggunaan DELETE tanpa WHERE dapat menyebabkan seluruh record yang telah dimasukan ke tabel terhapus.


===================== SOAL 4 ============================
db.<koleksi>.find()
Gunanya untuk menampilkan data yang sudah ditambahkan.

Contoh :
db.buku.find()

Kita juga bisa menambahkan pretty() agar ditampilkan dengan rapi
Contoh :
db.buku.find().pretty()
*/