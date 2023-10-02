import ListAyamDalamKandang from '@/components/kebun/ListAyamDalamKandang'
import DetailAyam from '@/components/kebun/detailAyam'
import { genPageMetadata } from 'app/seo'
import getListLengkapAyamKandang from 'utils/kebun/kandang/getListLengkapAyamDalamKandang'
import getStaticAyam from 'utils/kebun/kandang/getStaticAyam'

export const metadata = genPageMetadata({ title: 'Detail Ayam' })
export default async function Page({ params }: { params: { id: string } }) {
  const ayam = await getStaticAyam(parseInt(params.id))
  const listKandangLengkap = await getListLengkapAyamKandang(ayam.id)
  //console.log('listKandangLengkap : ', listKandangLengkap)
  return (
    <>
      <DetailAyam ayam={ayam} />
      <ListAyamDalamKandang listKandangLengkap={listKandangLengkap} />
    </>
  )
}
