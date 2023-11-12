import kebunStatic from '@/data/kebun/kebun'
import getBlokSayurLengkap from './getBlokSayurLengkap'

export default async function getListLengkapBlokSayuran() {
  try {
    const blokSayuran = kebunStatic.blokSayuran.filter((blok) => blok.name !== 'Select...')
    // const kompleteBlokSayuran = await Promise.all(
    //   blokSayuran.map((blok) => {
    //     return getBlokSayurLengkap(blok.id).then((blkLengkap) => {
    //       return blkLengkap
    //     })
    //   })
    // )
    const kompleteBlokSayuranPromise = await blokSayuran.map(async (blok) => {
      const blkLengkap = await getBlokSayurLengkap(blok.id)
      return blkLengkap
    })
    const kompleteBlokSayuran = Promise.all(kompleteBlokSayuranPromise)
    return kompleteBlokSayuran
  } catch (error) {
    console.log('getListLengkapBlokSayuran-error : ', error)
  }
}
