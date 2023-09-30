import kebunStatic from '@/data/kebun/kebun'

export default async function getStaticIkan(id: number) {
  try {
    let resultIndex = kebunStatic.ikan.findIndex((ikan) => ikan.id === id)
    if (resultIndex < 0) {
      resultIndex = 0
    }
    return kebunStatic.ikan[resultIndex]
  } catch (error) {
    console.log('getStaticIkan - error: ', error)
    return kebunStatic.ikan[0]
  }
}
