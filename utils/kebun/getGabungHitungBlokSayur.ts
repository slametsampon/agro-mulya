import formatDate from 'utils/formatDate'

export default function getGabungHitungBlokSayur(blok, sayur) {
  blok.sayuran = sayur

  //hitung luas
  blok.luas = blok.panjang * blok.lebar

  //hitung progress
  const calcDate = new Date(blok.tanggalTanam)
  const tglTanam: Date = new Date(blok.tanggalTanam)
  const estPanen = calcDate.setDate(calcDate.getDate() + blok.sayuran.umur)
  blok.estPanen = formatDate(estPanen)
  const toDay: Date = new Date()
  const progress: number = Math.round(
    ((toDay - tglTanam) * 100) / (blok.sayuran.umur * 1000 * 60 * 60 * 24)
  )
  blok.progres = progress

  //calc jumlah sayur, bedeng, jalur, baris
  const lebarBedeng = 100
  const jarakBedeng = 50
  const totalLebar = lebarBedeng + jarakBedeng
  const jumlahBedeng = Math.round((blok.lebar * 100) / totalLebar)
  blok.jumlahBedeng = jumlahBedeng
  const jumlahJalur = Math.round(lebarBedeng / blok.sayuran.jarakTanam) + 1
  blok.jumlahJalur = jumlahJalur
  const jumlahBaris = Math.round((blok.panjang * 100) / blok.sayuran.jarakTanam) + 1
  blok.jumlahBaris = jumlahBaris
  const jumlahSayurBedeng = jumlahJalur * jumlahBaris
  blok.jumlahTanam = jumlahBedeng * jumlahSayurBedeng

  //calc berat
  blok.berat = Math.round((blok.jumlahTanam * blok.sayuran.berat) / 1000)

  return blok
}
