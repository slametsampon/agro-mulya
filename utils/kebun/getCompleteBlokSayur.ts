import kebunStatic from '@/data/kebun/kebun'
import getStaticSayur from './getStaticSayur'
import getGabungHitungBlokSayur from './getGabungHitungBlokSayur'

export default async function getCompleteBlokSayur() {
  try {
    const blokSayuran = kebunStatic.blokSayuran.filter((blok) => blok.name !== 'Select...')
    const displaySay = await Promise.all(
      blokSayuran.map((blok) => {
        return getStaticSayur(blok.idSayuran).then((sayur) => {
          return sayur
        })
      })
    )
    if (!displaySay) {
      return { name: 'no name', description: 'no name' }
    }
    //gabung dan hitung
    const kompleteBlokSayuran = blokSayuran.map((blk, index) => {
      blk = getGabungHitungBlokSayur(blk, displaySay[index])
      return blk
    })
    return kompleteBlokSayuran
  } catch (error) {
    console.log('getCompleteBlokSayur-error : ', error)
  }
}
