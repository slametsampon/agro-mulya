import ListBlokSayuran from '@/components/kebun/listBlokSayuran'
import { genPageMetadata } from 'app/seo'
import getCompleteBlokSayur from 'utils/kebun/getCompleteBlokSayur'

export const metadata = genPageMetadata({ title: 'Kebun' })

export default async function Page() {
  const blokDisplay = await getCompleteBlokSayur()
  return (
    <>
      <ListBlokSayuran blokSayuran={blokDisplay} />
    </>
  )
}
