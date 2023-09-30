import ListKandangAyam from '@/components/kebun/ListKandangAyam'
import ListBlokSayuran from '@/components/kebun/listBlokSayuran'
import ListKolamIkan from '@/components/kebun/listKolamIkan'
import { genPageMetadata } from 'app/seo'
import getListLengkapKandang from 'utils/kebun/kandang/getListLengkapKandang'
import getListLengkapKolam from 'utils/kebun/kolam/getListLengkapKolam'
import getListLengkapBlokSayuran from 'utils/kebun/sayuran/getListLengkapBlokSayuran'

export const metadata = genPageMetadata({ title: 'Kebun' })

export default async function Page() {
  const listBlokLengkap = await getListLengkapBlokSayuran()
  const listKolamLengkap = await getListLengkapKolam()
  const listKandangLengkap = await getListLengkapKandang()
  //console.log('listKandangLengkap : ', listKandangLengkap)
  return (
    <>
      <ListBlokSayuran blokSayuran={listBlokLengkap} />
      <ListKolamIkan kolamIkan={listKolamLengkap} />
      <ListKandangAyam kandangAyam={listKandangLengkap} />
    </>
  )
}
