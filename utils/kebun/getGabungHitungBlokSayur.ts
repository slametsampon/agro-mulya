import { BlokLengkap, BlokSingkat, Sayuran } from 'utils/definition'
import formatDate from 'utils/formatDate'

export default function getGabungHitungBlokSayur(blok, sayur): BlokLengkap {
  const blokLengkap: BlokLengkap = blok
  blokLengkap.sayuran = sayur

  //hitung luas
  blokLengkap.luas = blokLengkap.panjang * blokLengkap.lebar

  //hitung progress
  const calcDate = new Date(blokLengkap.tanggalTanam)
  const tglTanam = new Date(blokLengkap.tanggalTanam)
  const estPanen = calcDate.setDate(calcDate.getDate() + blokLengkap.sayuran.umur)
  blokLengkap.estPanen = formatDate(estPanen)
  const toDay = new Date()
  const progress = Math.round(
    ((toDay.getTime() - tglTanam.getTime()) * 100) /
      (blokLengkap.sayuran.umur * 1000 * 60 * 60 * 24)
  )
  blokLengkap.progres = progress

  //calc jumlah sayur, bedeng, jalur, baris
  const lebarBedeng = 100
  const jarakBedeng = 50
  const totalLebar = lebarBedeng + jarakBedeng
  const jumlahBedeng = Math.round((blokLengkap.lebar * 100) / totalLebar)
  blokLengkap.jumlahBedeng = jumlahBedeng
  const jumlahJalur = Math.round(lebarBedeng / blokLengkap.sayuran.jarakTanam) + 1
  blokLengkap.jumlahJalur = jumlahJalur
  const jumlahBaris = Math.round((blokLengkap.panjang * 100) / blokLengkap.sayuran.jarakTanam) + 1
  blokLengkap.jumlahBaris = jumlahBaris
  const jumlahSayurBedeng = jumlahJalur * jumlahBaris
  blokLengkap.jumlahTanam = jumlahBedeng * jumlahSayurBedeng

  //calc berat
  blokLengkap.berat = Math.round((blokLengkap.jumlahTanam * blokLengkap.sayuran.berat) / 1000)

  return blokLengkap
}
