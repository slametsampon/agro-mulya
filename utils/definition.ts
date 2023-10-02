// 👇️ named export
export interface Sayuran {
  id: number
  name: string
  description: string
  umur: number
  jarakTanam: number
  berat: number
  kebutuhanAir: number
  kebutuhanPupuk: number
  FCR: number
}

export interface BlokSingkat {
  id: number
  name: string
  idSayuran: number
  tanggalTanam: string
  panjang: number
  lebar: number
  status: string
  waktuNyala: number
  lamaNyala: number
  mode: string
  periode: string
}
export interface BlokLengkap {
  id: number
  name: string
  idSayuran: number
  sayuran: Sayuran
  tanggalTanam: string
  estPanen: string
  progres: number
  panjang: number
  lebar: number
  luas: number
  lebarBedeng: number
  jarakBedeng: number
  jumlahBedeng: number
  jumlahJalur: number
  jumlahBaris: number
  jumlahTanam: number
  totalBerat: number
  status: string
  waktuNyala: number
  lamaNyala: number
  mode: string
  periode: string
  totalAir: number
  totalPupuk: number
}
export interface Ikan {
  id: number
  name: string
  description: string
  umur: number
  padatTebar: number
  berat: number
  kebutuhanAir: number
  kebutuhanPakan: number
  FCR: number
}

export interface KolamSingkat {
  id: number
  name: string
  idSayuran: number
  tanggalTanam: string
  panjang: number
  lebar: number
  tinggi: number
  status: string
  waktuNyala: number
  lamaNyala: number
  mode: string
  periode: string
}
export interface KolamLengkap {
  id: number
  name: string
  idIkan: number
  ikan: Ikan
  tanggalMasuk: string
  estPanen: string
  progres: number
  panjang: number
  lebar: number
  tinggi: number
  luas: number
  volume: number
  jumlahIkan: number
  totalBerat: number
  status: string
  waktuNyala: number
  lamaNyala: number
  mode: string
  periode: string
  totalAir: number
  totalPakan: number
}
export interface Ayam {
  id: number
  name: string
  description: string
  umur: number
  padatTebar: number
  berat: number
  kebutuhanAir: number
  kebutuhanPakan: number
  FCR: number
}

export interface KandangSingkat {
  id: number
  name: string
  idSayuran: number
  tanggalTanam: string
  panjang: number
  lebar: number
  tinggi: number
  status: string
  waktuNyala: number
  lamaNyala: number
  mode: string
  periode: string
}
export interface KandangLengkap {
  id: number
  name: string
  idIkan: number
  ayam: Ayam
  tanggalMasuk: string
  estPanen: string
  progres: number
  panjang: number
  lebar: number
  tinggi: number
  luas: number
  volume: number
  jumlahAyam: number
  totalBerat: number
  status: string
  waktuNyala: number
  lamaNyala: number
  mode: string
  periode: string
  totalAir: number
  totalPakan: number
}
