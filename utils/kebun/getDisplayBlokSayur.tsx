import kebunStatic from '@/data/kebun/kebun'
import getStaticSayur from './getStaticSayur'

export default async function getDisplayBlokSayur() {
  try {
    const blokSayuran = kebunStatic.blokSayuran.filter((blok) => blok.name !== 'Select...')
    console.log('blokSayuran : ', blokSayuran)
    const displaySayuran = blokSayuran.map((blok) => {
      const fetchPromise = getStaticSayur(blok.idSayuran)
      fetchPromise.then((data) => {
        console.log(data[0])
      })
    })
    console.log('displaySayuran : ', displaySayuran)
    if (!displaySayuran) {
      return { name: 'no name', description: 'no name' }
    }
    return displaySayuran
  } catch (error) {}
}
