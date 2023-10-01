import DetailSayur from '@/components/kebun/detailSayur'
import { genPageMetadata } from 'app/seo'
import getStaticSayur from 'utils/kebun/sayuran/getStaticSayur'

export const metadata = genPageMetadata({ title: 'Detail Sayuran' })
export default async function Page({ params }: { params: { id: string } }) {
  const sayur = await getStaticSayur(parseInt(params.id))
  console.log('sayur : ', sayur)
  return (
    <>
      <DetailSayur sayur={sayur} />
    </>
  )
}
