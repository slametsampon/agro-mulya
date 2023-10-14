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
export interface BlokLengkap extends BlokSingkat {
  sayuran: Sayuran
  estPanen: string
  progres: number
  luas: number
  lebarBedeng: number
  jarakBedeng: number
  jumlahBedeng: number
  jumlahJalur: number
  jumlahBaris: number
  jumlahTanam: number
  totalBerat: number
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
  idIkan: number
  tanggalMasuk: string
  panjang: number
  lebar: number
  tinggi: number
  status: string
  waktuNyala: number
  lamaNyala: number
  mode: string
  periode: string
}
export interface KolamLengkap extends KolamSingkat {
  ikan: Ikan
  estPanen: string
  progres: number
  luas: number
  volume: number
  jumlahIkan: number
  totalBerat: number
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
  idAyam: number
  tanggalMasuk: string
  panjang: number
  lebar: number
  tinggi: number
  status: string
  waktuNyala: number
  lamaNyala: number
  mode: string
  periode: string
}
export interface KandangLengkap extends KandangSingkat {
  ayam: Ayam
  tanggalMasuk: string
  estPanen: string
  progres: number
  luas: number
  volume: number
  jumlahAyam: number
  totalBerat: number
  totalAir: number
  totalPakan: number
}
