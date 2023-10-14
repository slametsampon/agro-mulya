import { Ayam, KandangLengkap } from 'utils/definition'
import formatDate from 'utils/formatDate'

export default function getGabungHitungKandang(kandang, ayam: Ayam): KandangLengkap {
  const kandangLengkap: KandangLengkap = kandang
  kandangLengkap.ayam = ayam

  //hitung luas & volume dalam cm
  kandangLengkap.luas = kandangLengkap.panjang * kandangLengkap.lebar
  kandangLengkap.volume = kandangLengkap.luas * kandangLengkap.tinggi

  //calc jumlah
  kandangLengkap.jumlahAyam = Math.round(
    (kandangLengkap.luas * kandangLengkap.ayam.padatTebar) / 10000
  )

  //calc kebutuhan air
  kandangLengkap.totalAir = Math.round(
    (kandangLengkap.jumlahAyam * kandangLengkap.ayam.kebutuhanAir) / 1000
  )

  //calc berat
  kandangLengkap.totalBerat = Math.round(
    (kandangLengkap.jumlahAyam * kandangLengkap.ayam.berat) / 1000
  )

  //calc FCR
  kandangLengkap.ayam.FCR = kandangLengkap.ayam.kebutuhanPakan / kandangLengkap.ayam.berat

  //calc pakan
  kandangLengkap.totalPakan = Math.round(kandangLengkap.totalBerat * kandangLengkap.ayam.FCR)

  //hitung progress
  const calcDate = new Date(kandangLengkap.tanggalMasuk)
  const tglTanam = new Date(kandangLengkap.tanggalMasuk)
  const estPanen = calcDate.setDate(calcDate.getDate() + kandangLengkap.ayam.umur)
  kandangLengkap.estPanen = formatDate(estPanen)
  const toDay = new Date()
  const progress = Math.round(
    ((toDay.getTime() - tglTanam.getTime()) * 100) /
      (kandangLengkap.ayam.umur * 1000 * 60 * 60 * 24)
  )
  kandangLengkap.progres = progress

  return kandangLengkap
}
