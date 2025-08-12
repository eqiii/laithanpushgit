// LatihanReact.js
import React, { useEffect } from 'react';

// ===== 1. Buatlah variabel menggunakan let dan const =====
let mutableValue = "Saya bisa diubah";
const constantValue = "Saya tidak bisa diubah";

// ===== 2. Buat arrow function yang menerima parameter dan mengembalikan nilai =====
const tambah = (a, b) => a + b;

// ===== 3. Gunakan template literals untuk menggabungkan string dan variabel =====
const greetUser = (name) => `Halo, ${name}! Selamat datang di React.`;

// ===== 4. Praktikkan destructuring pada array dan objek =====
const buah = ["Apel", "Mangga", "Jeruk"];
const [buah1, buah2] = buah;

const siswa = {
  nama: "Eqiww",
  umur: 100,
  jurusan: "Sastra perikanan",
};
const { nama, umur } = siswa;

// ===== 5. Gunakan spread operator untuk menggabungkan dua array dan dua objek =====
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const gabungArray = [...array1, ...array2];

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const gabungObjek = { ...obj1, ...obj2 };

// ===== 6. Buat sebuah modul dengan export dan import fungsi di file lain =====
// Karena dalam 1 file, kita simulasi dengan fungsi lokal
const fungsiModul = (pesan) => `Ini dari modul: ${pesan}`;
// Biasanya dipisah di file lain dan di-import pakai: import { fungsiModul } from './modul.js'

// ===== 7. Buat dan gunakan promises, lalu ubah menjadi async/await =====
const delay = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve("Selesai menunggu!"), ms));

const jalankanAsync = async () => {
  const hasil = await delay(1000);
  console.log("Async/Await:", hasil);
};

// ===== 8. Buat class sederhana, lalu kembangkan dengan inheritance =====
class Manusia {
  constructor(nama) {
    this.nama = nama;
  }

  sapa() {
    return `Hai, saya ${this.nama}`;
  }
}

class Pelajar extends Manusia {
  constructor(nama, sekolah) {
    super(nama);
    this.sekolah = sekolah;
  }

  perkenalan() {
    return `${this.sapa()} dan saya sekolah di ${this.sekolah}`;
  }
}

export default function LatihanReact() {
  useEffect(() => {
    // Memanggil async
    jalankanAsync();

    // Contoh class inheritance
    const murid = new Pelajar("Eqiww", "SMK TI BAZMA");
    console.log(murid.perkenalan());
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">📝 Latihan Dasar JavaScript di React</h1>

      <div>1. <strong>let:</strong> {mutableValue}, <strong>const:</strong> {constantValue}</div>

      <div>2. <strong>Arrow Function:</strong> 5 + 3 = {tambah(5, 3)}</div>

      <div>3. <strong>Template Literals:</strong> {greetUser("Eqiww")}</div>

      <div>4. <strong>Destructuring Array:</strong> {buah1}, {buah2}</div>
      <div>   <strong>Destructuring Objek:</strong> {nama}, {umur} tahun</div>

      <div>5. <strong>Spread Array:</strong> {gabungArray.join(", ")}</div>
      <div>   <strong>Spread Object:</strong> {JSON.stringify(gabungObjek)}</div>

      <div>6. <strong>Fungsi dari Modul:</strong> {fungsiModul("Halo modul!")}</div>

      <div>7. <strong>Async/Await:</strong> (cek di console log)</div>

      <div>8. <strong>Class & Inheritance:</strong> (cek di console log)</div>
    </div>
  );
}
