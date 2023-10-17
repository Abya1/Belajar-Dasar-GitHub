// TIPE DATA 
// value dari sebuah variabel berbentuk apa atau jenisnya apa
// contoh

// (let adalah variabel) 
// 1.Tipe String,contoh
let nama = 'Abya'  
// 2.Tipe Integer Number,contoh
let usia = 18
// 3.Tipe Double atau Float 
// (desimal)
let tinggiBadan = 170.5
let beratBadan = 65 
let pacar = 2
// 4.Tipe Data Boolean
var sudahBuka = true;
var sudahSahur = false;

// 5.Array dan Object
// ada pada chapter selanjutnya

// 6.Tipe Data Function
// tomato : function () 
// tomato = nama object
// dan "function ()" adalah sintaks untuk mengubahnya menjadi sebuah function



// null adalah kosong atau tidak ada nilainya
if (pacar == null) {
    pacar = 'belum punya'
} else { pacar = 'sudah punya'}



// let adalah variabel yang dapat diubah ubah isiya baik ditambah maupun dikurang
let saldoAwal = 50000
let  saldoTambahan = 80000
// const adalah variabel yang tidak dapat diubah ubah,
// penggunaanya untuk rumus yang sudah paten
const hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

const x = 5
const y = 3
const z = x * y

// alert adalah sintaks yang memunculkan pop up diatas pada sebuah web
// berikut adalah contoh sintaksnya

alert (`Nama saya ${nama} .Usia saya ${usia} tahun.Tinggi badan saya ${tinggiBadan} cm.Berat badan saya ${beratBadan} kg.Pacar saya ${pacar}`)

alert (`saldo awal saya sebesar Rp ${saldoAwal} kemudian nanti saya akan mendapat uang sebesar Rp ${saldoTambahan} dan untuk membayar hutang sebesar Rp ${hutang} maka sisa saldo saya adalah Rp ${saldoAkhir}`)

alert (`nilai ${x} * nilai ${y} maka hasilnya ${z}`)
