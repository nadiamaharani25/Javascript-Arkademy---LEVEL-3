/* =============== SOAL 1 ===============

- Array adalah tipe data yang dapat mengelompokkan lebih dari satu nilai dari tipe data lain, dengan menempatkannya pada satu variabel. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [].

- Sedangkan Object adalah (hampir sama / serupa) dengan array yang dapat menampung banyak nilai dengan tipe data yang beragam. Bedanya, objek diakses tidak melalui indexing melainkan menggunakan pendekatan key-value. Untuk menetapkan objek pada variabel, gunakan tanda kurung kurawal { }, kemudian di dalamnya kita tetapkan key: value. */


// =============== SOAL 2 ===============

var hobi=['Desain', 'Ngoding', 'Menulis', 'Traveling', 'Bermain Basket'];


// =============== SOAL 3 ===============

var saya= {
  nama: 'Nadia Maharani',
  alamat: 'Jl.urip sumoharjo, Palembang',
  hobi: hobi
};


// =============== SOAL 4 ===============

var sekolah= [
  {
    namaSekolah:'TK Aisyiyah Palembang',
    jurusan: undefined,
  },

  {
    namaSekolah:'SD Negeri 68 Palembang',
    jurusan: undefined,
  },

  {
    namaSekolah:'SD Negeri Gunung Sulah Bandar Lampung',
    jurusan: undefined,
  },

  {
    namaSekolah:'SD Negeri 1 Sukarame Bandar Lampung',
    jurusan: undefined,
  },

  {
    namaSekolah:'SMP Negeri 12 Bandar Lampung',
    jurusan: undefined,
  },

  {
    namaSekolah:'SMA Negeri 12 Bandar Lampung',
    jurusan: 'IPA',
  },

  {
    namaSekolah:'UIN Raden Fatah Palembang',
    jurusan: 'S1 Sistem Informasi',
  }
];

console.log(sekolah);


// =============== SOAL 5 ===============

const jawaban= 'Penggunaan kutip 1 atau kutip 2 dalam deklarasi String di JavaScript biasanya merupakan preferensi developer atau API konsistensi. Selain menjadi konsisten, gunakan mana yang paling sesuai dengan string. Karena terkadang, untuk sebuah kalimat, kita  membutuhkan kombinasi keduanya. \n';

console.log(jawaban)

