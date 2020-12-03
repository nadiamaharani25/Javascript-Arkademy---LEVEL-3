/* =============== SOAL 1 ===============

Function atau fungsi merupakan potongan kode yang tidak akan dieksekusi sebelum dipanggil.

Cara membuat Function di Javascript:
Di deklarasikan dengan 'function', kemudian diikuti dengan 'nama fungsinya', lalu diikuti dengan 'parameter' dengan tanda kurung di belakang.

--CONTOH : */
function salam (nama) {
  return console.log("Halo" + " " + nama + ", selamat pagi!");
}

salam("Nadia Maharani");


// =============== SOAL 2 ===============

function tambah (bilanganPertama, bilanganKedua) {
  return console.log(bilanganPertama + bilanganKedua)
}
tambah(9,9);


// =============== SOAL 3 ===============

const penjelasanArrowFunction = () => {
  return console.log("\n Arrow function adalah sintaks penulisan fungsi yang bisa dibilang lebih sederhana dan lebih singkat (dengan menggunakan =>)");
}

penjelasanArrowFunction();


// =============== SOAL 4 ===============

const perkalian = (bilanganPertama, bilanganKedua) => {
  return bilanganPertama * bilanganKedua
}

perkalian(3,3);