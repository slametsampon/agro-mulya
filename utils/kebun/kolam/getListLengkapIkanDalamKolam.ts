import kebunStatic from '@/data/kebun/kebun'
import getKolamLengkap from './getKolamLengkap'

export default async function getListLengkapIkanDalamKolam(idIkan: number) {
  try {
    const listKolam = kebunStatic.kolam.filter((kolam) => kolam.name !== 'Select...')
    const listIkanDalamKolam = listKolam.filter((kolam) => kolam.idIkan === idIkan)
    if (!listIkanDalamKolam) {
      const defaultKolam = kebunStatic.kolam[0]
      return defaultKolam
    }
    const listKolamLengkap = await Promise.all(
      listIkanDalamKolam.map((kolam) => {
        return getKolamLengkap(kolam.id).then((kolamLengkap) => {
          return kolamLengkap
        })
      })
    )
    return listKolamLengkap
  } catch (error) {
    console.log('getListLengkapIkanDalamKolam-error : ', error)
  }
}
