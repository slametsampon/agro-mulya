import { genPageMetadata } from 'app/seo'
import getBlokSayurLengkap from 'utils/kebun/getBlokSayurLengkap'

export const metadata = genPageMetadata({ title: 'Blok-Detail' })
export default async function Page({ params }: { params: { id: string } }) {
  const blokLengkap = await getBlokSayurLengkap(parseInt(params.id))
  console.log('blokLengkap : ', blokLengkap)
  return (
    <>
      <div className="mt-3 font-semibold text-2xl text-green-700"> Blok Detail </div>
      <h3>Blok Id : {params.id}</h3>
      <h3>Under Construction</h3>
    </>
  )
}
