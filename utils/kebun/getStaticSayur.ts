import kebunStatic from '@/data/kebun/kebun'
import { Sayuran } from 'utils/definition'

export default async function getStaticSayur(id: number) {
  const defaultResult: Sayuran = {
    id: 0,
    name: 'no name',
    description: 'no name',
    umur: 0,
    jarakTanam: 0,
    berat: 0,
  }
  try {
    const result = kebunStatic.sayuran.find((sayur) => sayur.id === id)
    if (!result) {
      return defaultResult
    }
    return result
  } catch (error) {
    console.log('getStaticSayur - error: ', error)
    return defaultResult
  }
}
