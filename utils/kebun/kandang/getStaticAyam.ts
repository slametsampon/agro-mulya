import kebunStatic from '@/data/kebun/kebun'

export default async function getStaticAyam(id: number) {
  try {
    let resultIndex = kebunStatic.ayam.findIndex((ayam) => ayam.id === id)
    if (resultIndex < 0) {
      resultIndex = 0
    }
    return kebunStatic.ayam[resultIndex]
  } catch (error) {
    console.log('getStaticAyam - error: ', error)
    return kebunStatic.ayam[0]
  }
}
