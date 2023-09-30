import kebunStatic from '@/data/kebun/kebun'
import getGabungHitungKandang from './getGabungHitungKandang'

export default async function getKandangLengkap(id: number) {
  try {
    let resultKandangIndex = kebunStatic.kandang.findIndex((kandang) => kandang.id === id)
    if (resultKandangIndex < 0) {
      resultKandangIndex = 0
    }
    const resultKandang = kebunStatic.kandang[resultKandangIndex]

    let resultAyamIndex = kebunStatic.ayam.findIndex((ayam) => ayam.id === resultKandang?.id)
    if (resultAyamIndex < 0) {
      resultAyamIndex = 0
    }
    const resultAyam = kebunStatic.ayam[resultAyamIndex]
    //gabung dan hitung
    const blokLengkap = getGabungHitungKandang(resultKandang, resultAyam)
    if (!resultKandang) {
      return { name: 'no name', description: 'no name' }
    }
    return blokLengkap
  } catch (error) {
    console.log('getKandangLengkap - error: ', error)
  }
}
