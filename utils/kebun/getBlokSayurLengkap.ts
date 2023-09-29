import kebunStatic from '@/data/kebun/kebun'
import getGabungHitungBlokSayur from './getGabungHitungBlokSayur'

export default async function getBlokSayurLengkap(id: number) {
  try {
    const resultBlok = kebunStatic.blokSayuran.find((blk) => blk.id === id)
    const resultSayur = kebunStatic.sayuran.find((sayur) => sayur.id === resultBlok?.id)
    const blokLengkap = getGabungHitungBlokSayur(resultBlok, resultSayur)
    if (!resultBlok) {
      return { name: 'no name', description: 'no name' }
    }
    return blokLengkap
  } catch (error) {
    console.log('getBlokSayurLengkap - error: ', error)
  }
}
