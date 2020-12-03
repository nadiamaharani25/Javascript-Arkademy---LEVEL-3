/* =============== SOAL 1 ===============

Cara membuat kondisional (if else) adalah dengan cara membuat percabangan di dalam program. Kita bisa membuat misalnya 2 percabangan program yang akan di eksekusi bila kondisi if terpenuhi, dan akan menambahkan perintah else jika kondisi if tidak terpenuhi.*/


// =============== SOAL 2 ===============

var x=prompt ("Masukkan nilainya: ");

function cekParameter (x) {
  if(x=="x") {
    return "Ini parameternya" + " " + x
  } else {
    return "Tidak ada parameter yang diberikan!"
  }
}

console.log(cekParameter(x));



// =============== SOAL 3 ===============

var jam= prompt ("\nMasukkan jam: ");

function salam (jam) {
  if (jam<=10) {
    return "Selamat Pagi!"
  } else
  if (jam<=14) {
    return "Selamat Siang!"
  } else
  if (jam<=18) {
    return "Selamat Sore!"
  } else
  if (jam<=24) {
    return "Selamat Malam!"
  } else {
    return "Jam salah/tidak ada"
  }
}

console.log("\nHalo Nadia Maharani,")
salam(jam);


/* =============== SOAL 4 ===============

(==) Biasa digunakan untuk membandingkan kedua nilai apakah sama. (Tidak Identik)
(===) Digunakan untuk membandingkan kedua nilai apakah identik.
(!=) Digunakan untuk membandingkan kedua nilai apakah tidak sama. (Tidak Identik)
(!==) Digunakan untuk membandingkan kedua nilai apakah tidak identik.

Untuk menilai perbandingan, sesuaikan saja dengan kegunaan. Jika kita ingin membandingkan hanya dari 'kesamaan nilainya', kita bisa gunakan == atau != tapi jika kita ingin membandingkan dengan memperhatikan 'tipe datanya', kita gunakan === atau !==
*/