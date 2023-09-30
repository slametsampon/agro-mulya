import kebunStatic from '@/data/kebun/kebun'
import getGabungHitungKolam from './getGabungHitungKolam'

export default async function getKolamLengkap(id: number) {
  try {
    let resultKolamIndex = kebunStatic.kolam.findIndex((kolam) => kolam.id === id)
    if (resultKolamIndex < 0) {
      resultKolamIndex = 0
    }
    const resultKolam = kebunStatic.kolam[resultKolamIndex]

    let resultIkanIndex = kebunStatic.ikan.findIndex((ikan) => ikan.id === resultKolam?.id)
    if (resultIkanIndex < 0) {
      resultIkanIndex = 0
    }
    const resultIkan = kebunStatic.ikan[resultIkanIndex]
    //gabung dan hitung
    const blokLengkap = getGabungHitungKolam(resultKolam, resultIkan)
    if (!resultKolam) {
      return { name: 'no name', description: 'no name' }
    }
    return blokLengkap
  } catch (error) {
    console.log('getKolamLengkap - error: ', error)
  }
}
