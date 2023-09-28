// 👇️ named export
export interface Sayuran {
  id: number
  name: string
  description: string
  umur: number
  jarakTanam: number
  berat: number
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
  jumlahBedeng: number
  jumlahJalur: number
  jumlahBaris: number
  jumlahTanam: number
  berat: number
  status: string
  waktuNyala: number
  lamaNyala: number
  mode: string
  periode: string
}
