import DetailBlokSayuran from '@/components/kebun/detailBlokSayuran'
import { genPageMetadata } from 'app/seo'
import getBlokSayurLengkap from 'utils/kebun/sayuran/getBlokSayurLengkap'

export const metadata = genPageMetadata({ title: 'Blok-Detail' })
export default async function Page({ params }: { params: { id: string } }) {
  const blokLengkap = await getBlokSayurLengkap(parseInt(params.id))
  return (
    <>
      <DetailBlokSayuran blokSayuranLengkap={blokLengkap} />
    </>
  )
}
