import DetailSayur from '@/components/kebun/detailSayur'
import ListSayurDalamBlok from '@/components/kebun/listSayurDalamBlok'
import { genPageMetadata } from 'app/seo'
import getListLengkapSayurDalamBlok from 'utils/kebun/sayuran/getListLengkapSayurDalamBlok'
import getStaticSayur from 'utils/kebun/sayuran/getStaticSayur'

export const metadata = genPageMetadata({ title: 'Detail Sayuran' })
export default async function Page({ params }: { params: { id: string } }) {
  const sayur = await getStaticSayur(parseInt(params.id))
  const listSayurDalamBlok = await getListLengkapSayurDalamBlok(sayur.id)
  //console.log('listSayurDalamBlok : ', listSayurDalamBlok)
  return (
    <>
      <DetailSayur sayur={sayur} />
      <ListSayurDalamBlok listBlokLengkap={listSayurDalamBlok} />
    </>
  )
}
