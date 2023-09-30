import DetailKolam from '@/components/kebun/detailKolam'
import { genPageMetadata } from 'app/seo'
import getKolamLengkap from 'utils/kebun/kolam/getKolamLengkap'

export const metadata = genPageMetadata({ title: 'Kolam' })

export default async function Page({ params }: { params: { id: string } }) {
  const kolamLengkap = await getKolamLengkap(parseInt(params.id))
  return (
    <>
      <DetailKolam kolamLengkap={kolamLengkap} />
    </>
  )
}
