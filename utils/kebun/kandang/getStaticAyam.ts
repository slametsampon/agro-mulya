import kebunStatic from '@/data/kebun/kebun'

export default async function getStaticAyam(id: number) {
  try {
    let resultIndex = kebunStatic.ayam.findIndex((ayam) => ayam.id === id)
    if (resultIndex < 0) {
      resultIndex = 0
    }
    const ayam = kebunStatic.ayam[resultIndex]

    //calc FCR
    ayam.FCR = ayam.kebutuhanPakan / ayam.berat

    return ayam
  } catch (error) {
    console.log('getStaticAyam - error: ', error)
    return kebunStatic.ayam[0]
  }
}
