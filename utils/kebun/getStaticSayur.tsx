import kebunStatic from '@/data/kebun/kebun'

export default async function getStaticSayur(id) {
  try {
    const result = kebunStatic.sayuran.find((sayur) => sayur.id === id)
    if (!result) {
      return { name: 'no name', description: 'no name' }
    }
    return result
  } catch (error) {
    console.log('getStaticSayur - error: ', error)
  }
}
