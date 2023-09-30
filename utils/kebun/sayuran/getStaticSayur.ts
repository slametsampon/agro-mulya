import kebunStatic from '@/data/kebun/kebun'

export default async function getStaticSayur(id: number) {
  try {
    let resultIndex = kebunStatic.sayuran.findIndex((sayur) => sayur.id === id)
    if (resultIndex < 0) {
      resultIndex = 0
    }
    return kebunStatic.sayuran[resultIndex]
  } catch (error) {
    console.log('getStaticSayur - error: ', error)
    return kebunStatic.sayuran[0]
  }
}
