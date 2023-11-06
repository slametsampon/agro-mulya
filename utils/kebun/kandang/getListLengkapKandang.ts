import kebunStatic from '@/data/kebun/kebun'
import getKandangLengkap from './getKandangLengkap'

export default async function getListLengkapKandang() {
  try {
    const listKolam = kebunStatic.kandang.filter((kandang) => kandang.name !== 'Select...')
    // const listKandangLengkap = await Promise.all(
    //   listKolam.map((kolam) => {
    //     return getKandangLengkap(kolam.id).then((kandangLengkap) => {
    //       return kandangLengkap
    //     })
    //   })
    // )
    const listKandangLengkapPromise = listKolam.map(async (kolam) => {
      const kandangLengkap = await getKandangLengkap(kolam.id)
      return kandangLengkap
    })
    const listKandangLengkap = Promise.all(listKandangLengkapPromise)
    if (!listKandangLengkap) {
      return { name: 'no name', description: 'no name' }
    }
    return listKandangLengkap
  } catch (error) {
    console.log('getListLengkapKandang-error : ', error)
  }
}
