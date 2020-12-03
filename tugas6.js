/* =============== SOAL 1 ===============

Perulangan atau Looping adalah cara untuk mengeksekusi blok kode secara berulang kali dengan kondisi yang kita tentukan.

*********************** CONTOH *********************** */

// For
for (i=1; i<=5; i++) {
  console.log('Ini angka ke-' + " " + i);
}

// For in
var buah=['Mangga', 'Nanas', 'Anggur'];

for (i in buah) {
  console.log('\n' + i + '.' + buah[i] + '\n');
}

// For of
const nama='NADIA';

for (const ejaanNama of nama) {
  console.log(ejaanNama);
}

// While
var i=10;

while(i>0) {
  console.log('\nPermen saya tinggal' + " " + i);
  i--;
}

// Do While
var i=9;

do {
  console.log('\nPerulangan ke-' + " " + i);
}
while(i<5);


// =============== SOAL 2 ===============

function printNumber(num) {
  for (i=0; i<=num; i++){
    console.log(i);
  }
}

printNumber(3);


// =============== SOAL 3 ===============
var angka=10;

function cekGanjilGenap(angka) {
    if(angka%2==0) {
      return console.log('\nGenap');
    } else {
      return console.log('\nGanjil');
    }
}

cekGanjilGenap(15);


// =============== SOAL 4 ===============
var angka= 12;

function deretGanjilGenap(num) {
  for (i=1; i<=num; i++){
    angka++;

    if(angka%2==0) {
      console.log('\n' + i + " " + 'adalah genap');
    } else {
      console.log('\n' + i + " " + 'adalah ganjil');
    }
  }
}

deretGanjilGenap(3);


// =============== SOAL 5 ===============
