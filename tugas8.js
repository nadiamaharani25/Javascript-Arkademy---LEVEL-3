
// =============== SOAL 1 ===============




//=============== SOAL 2 ===============
const angka= 10;

function ganjil (angka) {
  if (angka%2 != 0) {
    return true;
  } else {
    return false;
  }
}

ganjil(3);


function genap (angka) {
  if (angka%2 == 0) {
    return true;
  } else {
    return false;
  }
}

genap (10);





// =============== SOAL 3 ===============
let nama= "Nadia Maharani";
let ukuranSepatu= 41;
let is_female= true;
let hobi= [1,2,3];
let alamat= {
  kota: 'Palembang',
  provinsi: 'Sumsel'
};

function cekParameter (param) {
  if (param == 'Nadia Maharani') {
    return console.log ('Parameter' + " " + param + " " + 'adalah String!');
  } else 
  if (param == 41) {
    return console.log ('Parameter' + " " + param + " " + 'adalah Number!');
  } else
  if (param == true) {
    return console.log ('Parameter' + " " + param + " " + 'adalah Boolean!');
  } else
  if (param == 1,2,3) {
    return console.log ('Parameter' + " " + param + " " + 'adalah Array!');
  } else 
  if (param == object) {
    return console.log ('Parameter' + " " + param + " " + 'adalah Array!');
  }
};

cekParameter ({kota: 'Palembang', provinsi: 'Sumsel'});
