import kebunStatic from '@/data/kebun/kebun'
import getBlokSayurLengkap from './getBlokSayurLengkap'

export default async function getListLengkapSayurDalamBlok(idSayuran: number) {
  try {
    const listBlokSayuran = kebunStatic.blokSayuran.filter((blok) => blok.name !== 'Select...')
    const listSayurDalamBlok = listBlokSayuran.filter((blok) => blok.idSayuran === idSayuran)
    if (!listSayurDalamBlok) {
      const defaultKebun = kebunStatic.blokSayuran[0]
      return defaultKebun
    }
    // const listBlokSayuranLengkap = await Promise.all(
    //   listSayurDalamBlok.map((blok) => {
    //     return getBlokSayurLengkap(blok.id).then((blkLengkap) => {
    //       return blkLengkap
    //     })
    //   })
    // )
    const listBlokSayuranLengkapPromise = listSayurDalamBlok.map(async (blok) => {
      const blkLengkap = await getBlokSayurLengkap(blok.id)
      return blkLengkap
    })
    const listBlokSayuranLengkap = Promise.all(listBlokSayuranLengkapPromise)
    return listBlokSayuranLengkap
  } catch (error) {
    console.log('getListLengkapSayurDalamBlok-error : ', error)
  }
}
