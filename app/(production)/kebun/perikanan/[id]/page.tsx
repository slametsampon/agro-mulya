import DetailIkan from '@/components/kebun/detailIkan'
import { genPageMetadata } from 'app/seo'
import getStaticIkan from 'utils/kebun/kolam/getStaticIkan'

export const metadata = genPageMetadata({ title: 'Detail Ikan' })
export default async function Page({ params }: { params: { id: string } }) {
  const ikan = await getStaticIkan(parseInt(params.id))
  console.log('ikan : ', ikan)
  return (
    <>
      <DetailIkan ikan={ikan} />
    </>
  )
}
