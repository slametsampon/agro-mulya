import kebunStatic from '@/data/kebun/kebun'

export default async function getStaticIkan(id: number) {
  try {
    let resultIndex = kebunStatic.ikan.findIndex((ikan) => ikan.id === id)
    if (resultIndex < 0) {
      resultIndex = 0
    }
    const ikan = kebunStatic.ikan[resultIndex]

    //calc FCR
    ikan.FCR = ikan.kebutuhanPakan / ikan.berat

    return ikan
  } catch (error) {
    console.log('getStaticIkan - error: ', error)
    return kebunStatic.ikan[0]
  }
}
