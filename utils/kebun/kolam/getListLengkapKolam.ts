import kebunStatic from '@/data/kebun/kebun'
import getKolamLengkap from './getKolamLengkap'

export default async function getListLengkapKolam() {
  try {
    const listKolam = kebunStatic.kolam.filter((kolam) => kolam.name !== 'Select...')
    // const listKolamLengkap = await Promise.all(
    //   listKolam.map((kolam) => {
    //     return getKolamLengkap(kolam.id).then((kolamLengkap) => {
    //       return kolamLengkap
    //     })
    //   })
    // )

    const listKolamLengkapPromise = listKolam.map(async (kolam) => {
      const kolamLengkap = await getKolamLengkap(kolam.id)
      return kolamLengkap
    })
    const listKolamLengkap = Promise.all(listKolamLengkapPromise)
    if (!listKolamLengkap) {
      return { name: 'no name', description: 'no name' }
    }
    return listKolamLengkap
  } catch (error) {
    console.log('getListLengkapKolam-error : ', error)
  }
}
