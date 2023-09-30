import kebunStatic from '@/data/kebun/kebun'
import getKolamLengkap from './getKolamLengkap'

export default async function getListLengkapKolam() {
  try {
    const listKolam = kebunStatic.kolam.filter((kolam) => kolam.name !== 'Select...')
    const listKolamLengkap = await Promise.all(
      listKolam.map((kolam) => {
        return getKolamLengkap(kolam.id).then((kolamLengkap) => {
          return kolamLengkap
        })
      })
    )
    if (!listKolamLengkap) {
      return { name: 'no name', description: 'no name' }
    }
    return listKolamLengkap
  } catch (error) {
    console.log('getListLengkapKolam-error : ', error)
  }
}
