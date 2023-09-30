import DetailKandang from '@/components/kebun/detailKandang'
import { genPageMetadata } from 'app/seo'
import getKandangLengkap from 'utils/kebun/kandang/getKandangLengkap'

export const metadata = genPageMetadata({ title: 'Kandang' })

export default async function Page({ params }: { params: { id: string } }) {
  const kandangLengkap = await getKandangLengkap(parseInt(params.id))
  return (
    <>
      <DetailKandang kandangLengkap={kandangLengkap} />
    </>
  )
}
