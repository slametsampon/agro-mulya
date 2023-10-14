import { Ikan, KolamLengkap } from 'utils/definition'
import formatDate from 'utils/formatDate'

export default function getGabungHitungKolam(kolam, ikan: Ikan): KolamLengkap {
  const kolamLengkap: KolamLengkap = kolam
  kolamLengkap.ikan = ikan

  //hitung luas & volume dalam cm
  kolamLengkap.luas = kolamLengkap.panjang * kolamLengkap.lebar
  kolamLengkap.volume = Math.round((kolamLengkap.luas * kolamLengkap.tinggi) / 1000) //dalam liter

  //calc jumlah
  kolamLengkap.jumlahIkan = Math.round((kolamLengkap.volume * kolamLengkap.ikan.padatTebar) / 1000)

  //calc kebutuhan air
  kolamLengkap.totalAir = Math.round(
    (kolamLengkap.jumlahIkan * kolamLengkap.ikan.kebutuhanAir) / 1000
  )

  //calc berat
  kolamLengkap.totalBerat = Math.round(kolamLengkap.jumlahIkan * kolamLengkap.ikan.berat)

  //calc FCR
  kolamLengkap.ikan.FCR = kolamLengkap.ikan.kebutuhanPakan / kolamLengkap.ikan.berat

  //calc pakan
  kolamLengkap.totalPakan = Math.round((kolamLengkap.totalBerat * kolamLengkap.ikan.FCR) / 1000)

  //hitung progress
  const calcDate = new Date(kolamLengkap.tanggalMasuk)
  const tglTanam = new Date(kolamLengkap.tanggalMasuk)
  const estPanen = calcDate.setDate(calcDate.getDate() + kolamLengkap.ikan.umur)
  kolamLengkap.estPanen = formatDate(estPanen)
  const toDay = new Date()
  const progress = Math.round(
    ((toDay.getTime() - tglTanam.getTime()) * 100) / (kolamLengkap.ikan.umur * 1000 * 60 * 60 * 24)
  )
  kolamLengkap.progres = progress

  return kolamLengkap
}
