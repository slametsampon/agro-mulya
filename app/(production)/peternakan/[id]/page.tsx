import DetailAyam from '@/components/kebun/detailAyam'
import { genPageMetadata } from 'app/seo'
import getStaticAyam from 'utils/kebun/kandang/getStaticAyam'

export const metadata = genPageMetadata({ title: 'Detail Ayam' })
export default async function Page({ params }: { params: { id: string } }) {
  const ayam = await getStaticAyam(parseInt(params.id))
  console.log('ayam : ', ayam)
  return (
    <>
      <DetailAyam ayam={ayam} />
    </>
  )
}
