import DetailIkan from '@/components/kebun/detailIkan'
import ListIkanDalamKolam from '@/components/kebun/listIkanDalamKolam'
import { genPageMetadata } from 'app/seo'
import getListLengkapIkanDalamKolam from 'utils/kebun/kolam/getListLengkapIkanDalamKolam'
import getStaticIkan from 'utils/kebun/kolam/getStaticIkan'

export const metadata = genPageMetadata({ title: 'Detail Ikan' })
export default async function Page({ params }: { params: { id: string } }) {
  const ikan = await getStaticIkan(parseInt(params.id))
  const listKolamLengkap = await getListLengkapIkanDalamKolam(ikan.id)
  //console.log('listKolamLengkap : ', listKolamLengkap)
  return (
    <>
      <DetailIkan ikan={ikan} />
      <ListIkanDalamKolam listKolamLengkap={listKolamLengkap} />
    </>
  )
}
