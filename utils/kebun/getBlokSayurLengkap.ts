import kebunStatic from '@/data/kebun/kebun'
import getGabungHitungBlokSayur from './getGabungHitungBlokSayur'
import { BlokSingkat, Sayuran } from 'utils/definition'

export default async function getBlokSayurLengkap(id: number) {
  try {
    const resultBlok: BlokSingkat = kebunStatic.blokSayuran.find((blk) => blk.id === id)
    const resultSayur: Sayuran = kebunStatic.sayuran.find((sayur) => sayur.id === resultBlok?.id)
    const blokLengkap = getGabungHitungBlokSayur(resultBlok, resultSayur)
    if (!resultBlok) {
      return { name: 'no name', description: 'no name' }
    }
    return blokLengkap
  } catch (error) {
    console.log('getBlokSayurLengkap - error: ', error)
  }
}
