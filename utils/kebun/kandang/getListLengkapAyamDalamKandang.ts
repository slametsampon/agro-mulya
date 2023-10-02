import kebunStatic from '@/data/kebun/kebun'
import getKandangLengkap from './getKandangLengkap'

export default async function getListLengkapAyamKandang(idAyam: number) {
  try {
    const listKandang = kebunStatic.kandang.filter((kandang) => kandang.name !== 'Select...')
    const listAyamDalamKandang = listKandang.filter((kandang) => kandang.idAyam === idAyam)
    if (!listAyamDalamKandang) {
      return kebunStatic.kandang[0]
    }
    const listKandangLengkap = await Promise.all(
      listAyamDalamKandang.map((kolam) => {
        return getKandangLengkap(kolam.id).then((kandangLengkap) => {
          return kandangLengkap
        })
      })
    )
    return listKandangLengkap
  } catch (error) {
    console.log('getListLengkapAyamKandang-error : ', error)
  }
}
