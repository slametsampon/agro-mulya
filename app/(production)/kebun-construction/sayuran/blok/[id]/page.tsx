import { genPageMetadata } from 'app/seo'
import getBlokSayurLengkap from 'utils/kebun/getBlokSayurLengkap'

export const metadata = genPageMetadata({ title: 'Blok-Detail' })
export default async function Page({ params }: { params: { id: number } }) {
  const idNumber = parseInt(params.id)
  const blokLengkap = await getBlokSayurLengkap(idNumber)
  console.log('blokLengkap : ', blokLengkap)
  return (
    <>
      <div className="mt-3 font-semibold text-2xl text-green-700"> Blok Detail </div>
      <h3>Blok Id : {params.id}</h3>
      <h3>Under Construction</h3>
    </>
  )
}
