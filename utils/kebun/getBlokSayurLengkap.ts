import kebunStatic from '@/data/kebun/kebun'
import getGabungHitungBlokSayur from './getGabungHitungBlokSayur'

export default async function getBlokSayurLengkap(id: number) {
  try {
    let resultBlokIndex = kebunStatic.blokSayuran.findIndex((blk) => blk.id === id)
    if (resultBlokIndex < 0) {
      resultBlokIndex = 0
    }
    const resultBlok = kebunStatic.blokSayuran[resultBlokIndex]

    let resultSayurIndex = kebunStatic.sayuran.findIndex((sayur) => sayur.id === resultBlok?.id)
    if (resultSayurIndex < 0) {
      resultSayurIndex = 0
    }
    const resultSayur = kebunStatic.sayuran[resultSayurIndex]
    //gabung dan hitung
    const blokLengkap = getGabungHitungBlokSayur(resultBlok, resultSayur)
    if (!resultBlok) {
      return { name: 'no name', description: 'no name' }
    }
    return blokLengkap
  } catch (error) {
    console.log('getBlokSayurLengkap - error: ', error)
  }
}
